interface Env {
    AIRTABLE_PAT: string
    AIRTABLE_POLICIES_BASE_ID?: string
    AIRTABLE_TABLE_NAME?: string
    AIRTABLE_VOLUNTEERS_BASE_ID?: string
    AIRTABLE_VOLUNTEERS_TABLE_NAME?: string
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

interface AirtableVolunteerRecord {
    fields: {
        'Full name'?: string
        Photo?: Array<{ url?: string }>
        'First name'?: string
        'Last name'?: string
    }
}

interface AirtableVolunteersResponse {
    records?: AirtableVolunteerRecord[]
    offset?: string
}

interface TermsSection {
    heading: string
    headingLevel: 2 | 3
    body: string
    displayOrder: number
}

const endpointPath = '/api/v1/policies/terms-and-conditions'
const volunteersEndpointPath = '/api/v1/volunteers'
const fields = [
    'Heading Text',
    'Heading Style',
    'Body Copy',
    'Published',
    'Display Order',
    'Last Updated',
]
const volunteerFields = ['Full name', 'Photo', 'First name', 'Last name']

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

async function fetchPublishedRecords(env: Env): Promise<AirtableRecord[]> {
    const tableName = env.AIRTABLE_TABLE_NAME || 'Terms and Conditions'
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

async function fetchVolunteerRecords(
    env: Env
): Promise<AirtableVolunteerRecord[]> {
    const baseId = env.AIRTABLE_VOLUNTEERS_BASE_ID
    if (!baseId) throw new Error('Volunteer base is not configured')

    const tableName = env.AIRTABLE_VOLUNTEERS_TABLE_NAME || 'Volunteers'
    let offset: string | undefined
    const records: AirtableVolunteerRecord[] = []

    do {
        const url = new URL(
            `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`
        )
        url.searchParams.set('pageSize', '100')
        for (const field of volunteerFields)
            url.searchParams.append('fields[]', field)
        if (offset) url.searchParams.set('offset', offset)

        const response = await fetch(url, {
            headers: { Authorization: `Bearer ${env.AIRTABLE_PAT}` },
        })
        if (!response.ok) {
            console.error(
                'Airtable volunteer request failed with status',
                response.status
            )
            throw new Error('Unable to load volunteer records')
        }

        const data = (await response.json()) as AirtableVolunteersResponse
        records.push(...(data.records ?? []))
        offset = data.offset
    } while (offset)

    return records
}

function toVolunteersPayload(records: AirtableVolunteerRecord[]) {
    return records.map(({ fields: recordFields }) => ({
        fullName: recordFields['Full name'] ?? '',
        photo: recordFields.Photo?.[0]?.url ?? '',
        firstName: recordFields['First name'] ?? '',
        lastName: recordFields['Last name'] ?? '',
    }))
}

function toTermsPayload(records: AirtableRecord[]) {
    let lastUpdated: string | null = null
    const sections: TermsSection[] = []

    for (const record of records) {
        const { fields: recordFields } = record
        const heading = recordFields['Heading Text']?.trim()

        if (!heading) continue

        if (heading.toLowerCase() === 'last updated') {
            lastUpdated = recordFields['Last Updated'] ?? null
            continue
        }

        const body = recordFields['Body Copy']?.trim() ?? ''
        if (!body) continue

        sections.push({
            heading,
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

        if (
            url.pathname !== endpointPath &&
            url.pathname !== volunteersEndpointPath
        ) {
            return jsonResponse({ error: 'Not found' }, 404, false)
        }

        if (request.method !== 'GET') {
            return jsonResponse({ error: 'Method not allowed' }, 405, false)
        }

        const isVolunteersEndpoint = url.pathname === volunteersEndpointPath
        if (
            !env.AIRTABLE_PAT ||
            (isVolunteersEndpoint
                ? !env.AIRTABLE_VOLUNTEERS_BASE_ID
                : !env.AIRTABLE_POLICIES_BASE_ID)
        ) {
            return jsonResponse(
                {
                    error: `${isVolunteersEndpoint ? 'Volunteer' : 'Policy'} service is not configured`,
                },
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
        const activeEndpointPath = isVolunteersEndpoint
            ? volunteersEndpointPath
            : endpointPath
        const cacheKey = new Request(new URL(activeEndpointPath, url.origin), {
            method: 'GET',
        })
        const cached = await cache.match(cacheKey)
        if (cached) return cached

        try {
            const payload = isVolunteersEndpoint
                ? toVolunteersPayload(await fetchVolunteerRecords(env))
                : toTermsPayload(await fetchPublishedRecords(env))
            const response = jsonResponse(payload, 200, true, cacheTtlSeconds)
            await cache.put(cacheKey, response.clone())
            return response
        } catch {
            return jsonResponse(
                {
                    error: `Unable to load ${isVolunteersEndpoint ? 'volunteer records' : 'Terms and Conditions'}`,
                },
                502,
                false
            )
        }
    },
}
