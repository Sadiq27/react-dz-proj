import React from "react";
import './Slider.scss'
import { SliderItem } from "./SliderItem/SliderItem";

import proj_1 from '../../assets/icons/proj_1.png'
import proj_2 from '../../assets/icons/proj_2.png'
import proj_3 from '../../assets/icons/proj_3.png'
import proj_4 from '../../assets/icons/proj_4.png'
import { Button } from "../Buttton/Button";

export const Slider = () => {
    return (
        <div className="slider-wrapper">
            <div className="slider-item-wrapper">
                <SliderItem img={proj_1} title={'Wildstone Infra Hotel'} text={'2715 Ash Dr. San Jose, South Dakota'} />
                <SliderItem img={proj_2} title={'Wish Stone Building'} text={'2972 Westheimer Rd. Santa Ana, Illinois '} />
                <SliderItem img={proj_3} title={'Mr. Parkinston’s House'} text={'3517 W. Gray St. Utica, Pennsylvania'} />
                <SliderItem img={proj_4} title={'Oregano Height'} text={'2464 Royal Ln. Mesa, New Jersey '} />
            </div>
            <div className="slider-btn">
                <Button btnText={'<- Back'}/>
                <Button btnText={'Next ->'}/>
            </div>
        </div>
    )
}