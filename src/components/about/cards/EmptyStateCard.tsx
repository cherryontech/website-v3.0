import { useState, useEffect } from 'react'

const EmptyStateCard = () => {
    const [records, setRecords] = useState()

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
                setRecords(data.records)
            })
            .catch((error) => console.error(error))
    }, [])

    return (
        <div className="empty-state-card">
            <div className="card-content">
                <div className="display-3 font-bold">
                    No active cherries listed right now! 🍒
                </div>
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

export default EmptyStateCard
