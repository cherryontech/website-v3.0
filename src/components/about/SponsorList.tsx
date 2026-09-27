import { useState, useEffect } from 'react'

type Asset = string | { src: string }

const assetSrc = (asset: Asset) =>
    typeof asset === 'string' ? asset : asset.src

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
    }, [])

    return (
        <>
            <div className="sponsor-list">
                {records &&
                    records.map((record) => {
                        return (
                            <div className="sponsor">
                                <img
                                    src={assetSrc(
                                        record.fields.Logo[0].thumbnails.small
                                            .url
                                    )}
                                    alt=""
                                />
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

const Sponsor = () => {}

export default SponsorList
