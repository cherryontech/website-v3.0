import { useState, useEffect } from 'react'
import { assetSrc } from '../../util/assetSrc'

const SponsorList = () => {
    const [records, setRecords] = useState<any>()

    //placeholder for fetching sponor records

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
