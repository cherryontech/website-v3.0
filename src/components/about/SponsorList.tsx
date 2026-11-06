import { useState, useEffect } from 'react'
import { assetSrc } from '../../util/assetSrc'

const SponsorList = () => {
    const [records, setRecords] = useState<any>()

    useEffect(() => {
        fetch(
            `https://api.airtable.com/v0/${import.meta.env.PUBLIC_SPONSORS_BASE_ID}/${encodeURIComponent(import.meta.env.PUBLIC_SPONSORS_TABLE_NAME)}`,
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.PUBLIC_AIRTABLE_PAT}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setRecords(
                    data.records.filter(
                        (r) => r.fields['Active Status'] !== 'No'
                    )
                )
            })
            .catch((error) => console.error(error))
    }, [])

    return (
        <>
            <div className="sponsor-list">
                {records &&
                    records.map((record, index) => {
                        return (
                            <div className="sponsor" key={index}>
                                <a
                                    href={`${record.fields['Website Link']}`}
                                    target="_blank"
                                    aria-label={`${record.fields['Sponsor Name']} logo (website opens in a new tab)`}
                                >
                                    <img
                                        src={assetSrc(
                                            record.fields.Logo[0].thumbnails
                                                .large.url
                                        )}
                                        alt={`${record.fields['Sponsor Name']} logo image`}
                                    />
                                </a>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default SponsorList
