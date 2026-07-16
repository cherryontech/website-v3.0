import React, { useState } from 'react'
import "../../styles/global.css"
import "../../styles/footer.css"

export default function Footer(){

    return (
    <div className='footer'>
        <div className='footer-container'>
            <a href='/'>
                <img className='img-logo' src="src/assets/cherry_on_tech.svg" alt="CherryOnTech logo"/>
            </a>

            <div>
                <h4>Connect with Us!</h4>
                <caption>Questions, ideas, or just saying hello? We'd love to hear from you: <a>info@cherryontech.org</a></caption>
            </div>

            <div>
                <h4>Registered Canadian Non-Profit</h4>
                <caption className='font-bold'>Incorporation Number: S0081556</caption>
                <br/>
                <caption className='font-bold'>Business Number: 79742 6962 BC0001</caption>
            </div>

            <div>
                <h4>Land Acknowledgement</h4>
                <div>We acknowledge that the work of Cherry On Tech takes place on the <em>traditional</em>, <em>stolen</em>, and <em>ancestral</em> lands of Indigenous Peoples across Turtle Island, known today as Canada and the United States. 
                We honour the original caretakers of these lands and recognize their enduring connection to them. 
                As we build inclusive tech spaces, we <em>commit to learning</em> from Indigenous ways of knowing, being, and relating.</div>
            </div>

                <div className="div-container">
                    <div>
                        <h4>Policies</h4>
                        <ul>
                            <li><a href='/'>Terms and Conditions</a></li>
                            <li><a href='/'>Privacy Policy</a></li>
                            <li><a href='/'>Code of Conduct</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Socials</h4>
                        <ul>
                            <li><a href='/'>LinkedIn</a></li>
                            <li><a href='/'>Instagram</a></li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>)
}