import { useState, useEffect } from 'react'

interface VolunteerTableProps {
    url: string
    title: string
}

interface VolunteerResponse {
    fullName: string
    photo: string
    firstName: string
    lastName: string
}

const systemMessages = {
    loading_msg_branded: 'Cherry-picking the goods...🍒',
    global_err_fetch_failed: {
        headline: 'Temporarily unavailable.',
        uiCopy: 'Unable to fetch {content_type} right now.',
    },
}

const VolunteerSection = () => {
    const [records, setRecords] = useState<VolunteerResponse | null>(null)
    const [error, setError] = useState<string | null>(null)

    //Placeholder for fetching volunteer records

    useEffect(() => {
        const apiUrl = import.meta.env.PUBLIC_CONTENT_API_URL?.replace(
            /\/$/,
            ''
        )
        if (!apiUrl) {
            setError(
                systemMessages.global_err_fetch_failed.uiCopy.replace(
                    '{content_type}',
                    'Terms and Conditions'
                )
            )
            return
        }

        const controller = new AbortController()

        fetch(`${apiUrl}/api/v1/volunteers`, {
            signal: controller.signal,
        })
            .then((response) => {
                if (!response.ok) throw new Error('Request failed')
                return response.json() as Promise<VolunteerResponse>
            })
            .then(setRecords)
            .catch((fetchError: unknown) => {
                if (
                    fetchError instanceof DOMException &&
                    fetchError.name === 'AbortError'
                ) {
                    return
                }
                setError(
                    systemMessages.global_err_fetch_failed.uiCopy.replace(
                        '{content_type}',
                        'Terms and Conditions'
                    )
                )
            })

        return () => controller.abort()
    }, [])

    return (
        <>
            <section
                className="section-volunteers"
                aria-labelledby="volunteers-title"
            >
                <div className="volunteer-container">
                    <div className="text-container header-content-container">
                        <h1>Our Helping Cherries</h1>
                        <p>
                            Cherry On Tech is powered by an incredible, rotating
                            squad of mentors and community members who dedicate
                            their time to building together. Whether sharing
                            industry expertise or helping behind the scenes,
                            every contributor keeps our ecosystem growing.
                        </p>
                    </div>
                    <div className="volunteer-tables">
                        <h2 className="volunteer-title">The Community Squad</h2>
                        {records && records ? (
                            <VolunteerTable
                                title="Community Squad members"
                                url={
                                    'https://airtable.com/embed/appQGB7QVsOOx0rX1/shrtN10W9uJvICrBp'
                                }
                            />
                        ) : (
                            <EmptyStateCard />
                        )}
                    </div>
                    <div>
                        <h2 className="volunteer-title">Guest Cherries</h2>
                        {records && records ? (
                            <VolunteerTable
                                title="Guest cherries"
                                url={
                                    'https://airtable.com/embed/appQGB7QVsOOx0rX1/shrHSd5CTlUEzeYuj'
                                }
                            />
                        ) : (
                            <EmptyStateCard />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

const VolunteerTable = ({ url, title }: VolunteerTableProps) => {
    return (
        <div>
            <div className="">
                <iframe
                    className="airtable-embed volunteer-list"
                    src={`${url}`}
                    title={title}
                ></iframe>
            </div>
        </div>
    )
}

const EmptyStateCard = () => {
    return (
        <div className="empty-state-card">
            <div className="text-container">
                <h3 className="font-bold">
                    No active cherries listed right now! 🍒
                </h3>
                <p>
                    We’re currently between cohort cycles and updating our
                    community roster. Check back soon to meet our latest team,
                    or reach out if you'd like to get involved with Cherry On
                    Tech!
                </p>
            </div>
            <a href="/get-involved" className="btn btn-stroke">
                Find Your Role
            </a>
        </div>
    )
}

export default VolunteerSection
