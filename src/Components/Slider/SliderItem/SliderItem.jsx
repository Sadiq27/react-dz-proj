import React from "react";
import './SliderItem.scss'

export const SliderItem = ({img, title, text}) => {
    return (
        <div className="silder-item">
            <img src={img} alt="" />
            <div className="offer">
                <h3>{title}</h3>
                <div>{text}</div>
            </div>
        </div>
    )
}