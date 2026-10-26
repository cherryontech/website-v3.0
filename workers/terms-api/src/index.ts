interface Env {
    AIRTABLE_PAT: string
    AIRTABLE_POLICIES_BASE_ID: string
    AIRTABLE_TABLE_NAME: string
    CACHE_TTL_SECONDS?: string
}

interface AirtableRecord {
    fields: {
        'Heading Text'?: string
        'Heading Style'?: string
        'Body Copy'?: string
        Published?: boolean
        'Display Order'?: number
        'Last Updated'?: string
    }
}

interface AirtableResponse {
    records?: AirtableRecord[]
    offset?: string
}

interface TermsSection {
    heading?: string
    headingLevel: 2 | 3
    body: string
    displayOrder: number
}

const policyEndpoints: Record<string, string> = {
    '/api/v1/policies/terms-and-conditions': 'Terms and Conditions',
    '/api/v1/policies/privacy-policy': 'Privacy Policy',
    '/api/v1/policies/code-of-conduct': 'Code of Conduct',
}
const fields = [
    'Heading Text',
    'Heading Style',
    'Body Copy',
    'Published',
    'Display Order',
    'Last Updated',
]

const jsonHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
}

const jsonResponse = (
    body: unknown,
    status = 200,
    cache = true,
    cacheTtlSeconds = 86400
) =>
    Response.json(body, {
        status,
        headers: {
            ...jsonHeaders,
            'Cache-Control': cache
                ? `public, max-age=${cacheTtlSeconds}`
                : 'no-store',
        },
    })

async function fetchPublishedRecords(
    env: Env,
    tableName: string
): Promise<AirtableRecord[]> {
    let offset: string | undefined
    const records: AirtableRecord[] = []

    do {
        const url = new URL(
            `https://api.airtable.com/v0/${env.AIRTABLE_POLICIES_BASE_ID}/${encodeURIComponent(tableName)}`
        )
        url.searchParams.set('filterByFormula', '{Published}=TRUE()')
        url.searchParams.set('pageSize', '100')
        url.searchParams.set('sort[0][field]', 'Display Order')
        url.searchParams.set('sort[0][direction]', 'asc')
        for (const field of fields) url.searchParams.append('fields[]', field)
        if (offset) url.searchParams.set('offset', offset)

        const response = await fetch(url, {
            headers: { Authorization: `Bearer ${env.AIRTABLE_PAT}` },
        })

        if (!response.ok) {
            console.error(
                'Airtable request failed with status',
                response.status
            )
            throw new Error('Unable to load policy content')
        }

        const data = (await response.json()) as AirtableResponse
        records.push(...(data.records ?? []))
        offset = data.offset
    } while (offset)

    return records.filter((record) => record.fields.Published === true)
}

function toPolicyPayload(records: AirtableRecord[]) {
    let lastUpdated: string | null = null
    const sections: TermsSection[] = []

    for (const record of records) {
        const { fields: recordFields } = record
        const heading = recordFields['Heading Text']?.trim()

        if (heading?.toLowerCase() === 'last updated') {
            lastUpdated = recordFields['Last Updated'] ?? null
            continue
        }

        const body = recordFields['Body Copy']?.trim() ?? ''
        if (!body) continue

        sections.push({
            heading: heading || undefined,
            headingLevel: recordFields['Heading Style'] === 'Heading 2' ? 3 : 2,
            body,
            displayOrder: recordFields['Display Order'] ?? 0,
        })
    }

    sections.sort((left, right) => left.displayOrder - right.displayOrder)

    return { lastUpdated, sections }
}

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        const url = new URL(request.url)

        if (request.method === 'OPTIONS') {
            return new Response(null, {
                status: 204,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Max-Age': '86400',
                },
            })
        }

        const tableName = policyEndpoints[url.pathname]
        if (!tableName) {
            return jsonResponse({ error: 'Not found' }, 404, false)
        }

        if (request.method !== 'GET') {
            return jsonResponse({ error: 'Method not allowed' }, 405, false)
        }

        if (!env.AIRTABLE_PAT || !env.AIRTABLE_POLICIES_BASE_ID) {
            return jsonResponse(
                { error: 'Policy service is not configured' },
                503,
                false
            )
        }

        const cache = caches.default
        // Production defaults to one day; the local dev script overrides this to one week.
        const configuredCacheTtl = Number(env.CACHE_TTL_SECONDS)
        const cacheTtlSeconds =
            Number.isFinite(configuredCacheTtl) && configuredCacheTtl > 0
                ? Math.floor(configuredCacheTtl)
                : 86400
        const cacheKey = new Request(new URL(url.pathname, url.origin), {
            method: 'GET',
        })
        const cached = await cache.match(cacheKey)
        if (cached) return cached

        try {
            const records = await fetchPublishedRecords(
                env,
                url.pathname === '/api/v1/policies/terms-and-conditions'
                    ? env.AIRTABLE_TABLE_NAME || tableName
                    : tableName
            )
            const response = jsonResponse(
                toPolicyPayload(records),
                200,
                true,
                cacheTtlSeconds
            )
            await cache.put(cacheKey, response.clone())
            return response
        } catch {
            return jsonResponse(
                { error: `Unable to load ${tableName}` },
                502,
                false
            )
        }
    },
}
