import React from "react";
import './Projects.scss'
import { MenuList } from "../ProjectMenuList/MenuList";
import { Slider } from "../Slider/Slider";

export const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <div className="project-wrapper">
                    <div className="projects-left-part">
                        <h2>Projects</h2>
                        <MenuList/>
                    </div>
                    <div className="projects-right-part">
                        <Slider/>
                    </div>
                </div>
            </div>
        </section>
    )
}