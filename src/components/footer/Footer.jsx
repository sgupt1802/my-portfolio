import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>

            <footer className="footer">
                <div className="footer__container container">
                    <h1 className="footer__title">Samarth</h1>

                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>

                        <li>
                            <a href="#portfolio" className="footer__link">Projects</a>
                        </li>

                        <li>
                            <a href="#skills" className="footer__link">Skills</a>
                        </li>
                    </ul>

                    <div className="footer__social">
                        <a href="https://www.instagram.com/samarth_gupta_234/" className="footer__social-link" target="_blank">
                            <i class="bx bxl-instagram"></i>
                        </a>

                        <a href="https://www.facebook.com/samarth.gupta.589100/" className="footer__social-link" target="_blank">
                            <i class="bx bxl-facebook"></i>
                        </a>

                        <a href="https://twitter.com" className="footer__social-link" target="_blank">
                            <i class="bx bxl-twitter"></i>
                        </a>
                    </div>

                    <span className="footer__copy">&copy; sgupt1802, All rights reserved</span>
                </div>
            </footer>
        </>
    )
}

export default Footer