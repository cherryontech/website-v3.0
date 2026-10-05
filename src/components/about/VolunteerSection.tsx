import { useState, useEffect } from 'react'

interface VolunteerTableProps {
    url: string
}

const VolunteerSection = () => {
    const [records, setRecords] = useState(null)

    useEffect(() => {
        fetch(
            `https://api.airtable.com/v0/${import.meta.env.PUBLIC_VOLUNTEER_BASE_ID}/${encodeURIComponent(import.meta.env.PUBLIC_VOLUNTEER_TABLE_NAME)}`,
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.PUBLIC_AIRTABLE_PAT}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setRecords(data.records.length)
            })
            .catch((error) => console.error(error))
    }, [])

    return (
        <>
            <section className="section-volunteers">
                <div className="volunteer-content">
                    <h1>Our Helping Cherries</h1>
                    <p>
                        Cherry On Tech is powered by an incredible, rotating
                        squad of mentors and community members who dedicate
                        their time to building together. Whether sharing
                        industry expertise or helping behind the scenes, every
                        contributor keeps our ecosystem growing.
                    </p>
                </div>
                <div className="volunteer-tables">
                    <h2 className="volunteer-title">The Community Squad</h2>
                    {records && records ? (
                        <VolunteerTable
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
                            url={
                                'https://airtable.com/embed/appQGB7QVsOOx0rX1/shrHSd5CTlUEzeYuj'
                            }
                        />
                    ) : (
                        <EmptyStateCard />
                    )}
                </div>
            </section>
        </>
    )
}

const VolunteerTable = ({ url }: VolunteerTableProps) => {
    return (
        <div>
            <div className="">
                <iframe
                    className="airtable-embed volunteer-list"
                    src={`${url}`}
                ></iframe>
            </div>
        </div>
    )
}

const EmptyStateCard = () => {
    return (
        <div className="empty-state-card">
            <div className="card-content">
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
            <a href="#" className="btn btn-stroke">
                Find Your Role
            </a>
        </div>
    )
}

export default VolunteerSection
