import React from 'react'
import Style from "./Section.module.css"
import Education from '../Education/Education';
import Hero from '../Hero/Hero';
import "../../assets/styles/global.css";
import Card from '../Card/Card';
import ProjectCard from '../ProjectCard/projectCard';

function Section() {
    return (
        <section>
            <Hero />

            <Education />

            <div className={Style.skillSection}>

                <h3 className="pageTitle">Skills</h3>

                <div className={Style.cards}>

                    <Card />

                    <Card />
                    
                    <Card />

                </div>

            </div>

            <div className={Style.projectSection}>

                <h3 className="pageTitle">Project's</h3>

                <div className={Style.projectCards}>

                    <ProjectCard />

                    <ProjectCard />

                </div>

            </div>

        </section>
    )
}

export default Section;