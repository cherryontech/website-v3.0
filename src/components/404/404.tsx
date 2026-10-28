import balloons404 from '../../assets/404/404.svg'
import '../../styles/404.css'
import Icon from '../Icon'

function goBack(): void {
    const referrer = document.referrer
    const currentOrigin = window.location.origin

    if (referrer && new URL(referrer).origin === currentOrigin) {
        window.history.back()
    } else {
        window.location.href = '/'
    }
}

const Not_Found_404_Page = () => {
    return (
        <>
            <section className="main-section">
                <div className="main_image">
                    <img src={balloons404.src} alt="" />
                </div>

                <div className="content_block">
                    <h1>Looks like this page popped!</h1>
                    <h3>Let’s get back to the sweet stuff. 🍒</h3>
                    <a className="link" onClick={() => goBack()}>
                        <Icon name="arrow-left" className="btn__icon" />
                        <span>Back</span>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Not_Found_404_Page
