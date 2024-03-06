import React from "react";

import './ServicesCard.scss'

import icon from '../../assets/icons/icon.png'
import icon_1 from '../../assets/icons/icon-1.png'
import icon_2 from '../../assets/icons/icon-2.png'
import icon_3 from '../../assets/icons/icon-3.png'
import icon_4 from '../../assets/icons/icon-4.png'
import icon_5 from '../../assets/icons/icon-5.png'


export const ServicesCard = () => {
    return (
        <section className="sevices-card">
            <div className="container">
                <h2 className="sevices-title">Services</h2>
                <div className="sevices-wrapper">
                    <div className="sevices-item white">
                        <img src={icon} alt="" />
                        <h3>Construction</h3>
                    </div>
                    <div className="sevices-item">
                        <img src={icon_1} alt="" />
                        <h3>Renovation</h3>
                    </div>
                    <div className="sevices-item white">
                        <img src={icon_2} alt="" />
                        <h3>Consultation</h3>
                    </div>
                    <div className="sevices-item">
                        <img src={icon_3} alt="" />
                        <h3>Repair Services</h3>
                    </div>
                    <div className="sevices-item white">
                        <img src={icon_4} alt="" />
                        <h3>Architecture</h3>
                    </div>
                    <div className="sevices-item">
                        <img src={icon_5} alt="" />
                        <h3>Electric</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}