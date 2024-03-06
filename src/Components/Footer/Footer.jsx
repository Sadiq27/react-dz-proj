import React from "react";
import './Footer.scss'
import { Logo } from "../Logo/Logo";

import social_1 from '../../assets/icons/social_1.png'
import social_2 from '../../assets/icons/social_2.png'
import social_3 from '../../assets/icons/social_3.png'

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-left-part">
                        <div className="footer-text"><span>Address:</span> 6391 Elgin St. Celina, Delaware 10299</div>
                        <div className="footer-text"><span>Phone:</span> +84 1102 2703</div>
                        <div className="footer-text"><span>Email:</span> hello@thebox.com</div>
                        <Logo/>
                    </div>
                    <div className="footer-right-part">
                        <div className="newsletter">
                            <div className="footer-text"><span>Newsletter:</span></div>
                            <form action="">
                            <input type="Email" placeholder="Your email here" />
                            <button className="footer-btn">Subscribe</button>
                            </form>
                        </div>
                        <div className="social">
                            <div className="footer-text"><span>Social:</span></div>
                            <img src={social_1} alt="" />
                            <img src={social_2} alt="" />
                            <img src={social_3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}