import React from "react";

import './FeedBack.scss'

export const FeedBack = () => {
    return (
        <section className="feed-back">
            <div className="container">
                <div className="feed-back-wrapper">
                    <div className="feed-back-left-part">
                        <h2>Free consultation with exceptional quality</h2>
                        <div className="feed-back-text">Just one call away: <span className="decor">+84 1102 2703</span></div>
                    </div>
                    <button className="feed-back-btn">Get your consultation</button>
                </div>                      
            </div>
        </section>
    )
}