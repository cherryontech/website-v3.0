import { useState, useEffect } from 'react'
import { assetSrc } from '../../util/assetSrc'

const SponsorList = () => {
    const [records, setRecords] = useState()

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
                setRecords(data.records)
            })
            .catch((error) => console.error(error))

        console.log('records')
        console.log(records)
    }, [])

    return (
        <>
            <div className="sponsor-list">
                {records &&
                    records.map((record) => {
                        return (
                            <div className="sponsor">
                                <a
                                    href={`${record.fields['Website Link']}`}
                                    target="_blank"
                                    aria-label={`${record.fields['Sponsor Name']} logo (website opens in a new tab)`}
                                >
                                    <img
                                        src={assetSrc(
                                            record.fields.Logo[0].thumbnails
                                                .small.url
                                        )}
                                        alt=""
                                    />
                                </a>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

const Sponsor = () => {}

export default SponsorList
