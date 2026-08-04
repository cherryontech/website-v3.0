import "../../styles/global.css"
import "../../styles/footer.css"
import logo from '../../assets/cherry_on_tech.svg'

export default function Footer(){

    return (
    <div className='footer' id="footer">
        <div className='footer-container'>
            <a href='/'>
                <img className='img-logo-footer' src={logo.src ?? logo} alt="Cherry On Tech home"/>
            </a>

            <div>
                <div className="footer-heading">Connect with Us!</div>
                <div className="footer-section">Questions, ideas, or just saying hello? We'd love to hear from you: <a href='mailto:info[@cherryontech](https://github.com/cherryontech).org'>info@cherryontech.org</a></div>
            </div>

            <div>
                <h3>Registered Canadian Non-Profit</h3>
                <div className='footer-section'><span className="font-bold">Incorporation Number:</span> S0081556</div> 
                <div className='footer-section'><span className="font-bold">Business Number:</span> 79742 6962 BC0001</div>
            </div>

            <div className="footer-section-two">
                <h3>Land Acknowledgement</h3>
                <div className="footer-section">We acknowledge that the work of Cherry On Tech takes place on the <em>traditional</em>, <em>stolen</em>, and <em>ancestral</em> lands of Indigenous Peoples across Turtle Island, known today as Canada and the United States. 
                We honour the original caretakers of these lands and recognize their enduring connection to them. 
                As we build inclusive tech spaces, we <em>commit to learning</em> from Indigenous ways of knowing, being, and relating.</div>
            </div>

                <div className="footer-panel-container">
                    <div className="footer-panel">
                        <h3>Policies</h3>
                        <ul>
                            <li><a target="_blank" href='/'>Terms and Conditions</a></li>
                            <li><a target="_blank" href='/'>Privacy Policy</a></li>
                            <li><a target="_blank" href='/'>Code of Conduct</a></li>
                        </ul>
                    </div>
                    <div className="footer-panel">
                        <h3>Socials</h3>
                        <ul>
                            <li><a target="_blank" href='https://www.linkedin.com/company/cherry-on-tech'>LinkedIn</a></li>
                            <li><a target="_blank" href='https://www.instagram.com/cherryontech/'>Instagram</a></li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>)
}
