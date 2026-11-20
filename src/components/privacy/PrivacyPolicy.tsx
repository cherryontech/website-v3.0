import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import privacyIllustration from '../../assets/policies/privacy.svg'
import '../../styles/policies.css'

interface PolicySection {
    heading: string
    headingLevel: 2 | 3
    body: string
    displayOrder: number
}

interface PolicyResponse {
    lastUpdated: string | null
    sections: PolicySection[]
}

const systemMessages = {
    loading_msg_branded: 'Cherry-picking the goods...🍒',
    global_err_fetch_failed: {
        headline: 'Temporarily unavailable.',
        uiCopy: 'Unable to fetch {content_type} right now.',
    },
}

const formatDate = (date: string) => {
    const parsedDate = new Date(`${date.slice(0, 10)}T00:00:00Z`)
    if (Number.isNaN(parsedDate.getTime())) return date

    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(parsedDate)
}

const PrivacyPolicy = () => {
    const [content, setContent] = useState<PolicyResponse | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const apiUrl = import.meta.env.PUBLIC_CONTENT_API_URL?.replace(
            /\/$/,
            ''
        )
        if (!apiUrl) {
            setError('Unable to fetch Privacy Policy right now.')
            return
        }

        const controller = new AbortController()

        fetch(`${apiUrl}/api/v1/policies/privacy-policy`, {
            signal: controller.signal,
        })
            .then((response) => {
                if (!response.ok) throw new Error('Request failed')
                return response.json() as Promise<PolicyResponse>
            })
            .then(setContent)
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
                        'Privacy Policy'
                    )
                )
            })

        return () => controller.abort()
    }, [])

    const goBack = () => {
        const referrer = document.referrer
        if (referrer && new URL(referrer).origin === window.location.origin) {
            window.history.back()
        } else {
            window.location.assign('/')
        }
    }

    return (
        <div className="terms-page">
            <section className="terms-intro" aria-labelledby="privacy-title">
                <div className="terms-intro-content">
                    <h1 id="privacy-title">Privacy Policy</h1>
                    {content?.lastUpdated && (
                        <p className="terms-updated">
                            <strong>Last Updated:</strong>{' '}
                            {formatDate(content.lastUpdated)}
                        </p>
                    )}
                    <button
                        className="terms-back"
                        type="button"
                        onClick={goBack}
                    >
                        <span aria-hidden="true">←</span> Back
                        <span className="sr-only"> (to previous page)</span>
                    </button>
                </div>
            </section>

            <section className="terms-content" aria-label="Privacy Policy">
                <div className="terms-body" aria-live="polite">
                    {!content && !error && (
                        <p>{systemMessages.loading_msg_branded}</p>
                    )}
                    {error && (
                        <div role="alert">
                            <h2>
                                {
                                    systemMessages.global_err_fetch_failed
                                        .headline
                                }
                            </h2>
                            <p>{error}</p>
                        </div>
                    )}
                    {content?.sections.map((section) => (
                        <article
                            className="terms-section"
                            key={`${section.displayOrder}-${section.heading}`}
                        >
                            {section.headingLevel === 2 ? (
                                <h2>{section.heading}</h2>
                            ) : (
                                <h3>{section.heading}</h3>
                            )}
                            <div className="terms-copy">
                                <ReactMarkdown>{section.body}</ReactMarkdown>
                            </div>
                        </article>
                    ))}
                    {content?.sections.length === 0 && (
                        <p>No published privacy policy content is available.</p>
                    )}
                </div>

                <div className="terms-illustration">
                    <img
                        src={privacyIllustration.src}
                        alt=""
                        aria-hidden="true"
                    />
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicy
