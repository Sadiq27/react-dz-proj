import React from "react"

import './About.scss'
import man from '../../assets/icons/man.png'

export const AboutUs = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about-wrapper">
                    <img src={man} alt="" />
                    <div className="right-block">
                        <h2 className="about-title">About us</h2>
                        <div className="about-text">
                            For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.
                        </div>
                        <button className="about-btn">More on Our History</button>
                    </div>
                </div>
            </div>
        </section>
    )
}