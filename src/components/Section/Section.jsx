import React from 'react'
import Style from "./Section.module.css"
import bg from "../../assets/images/bg-2.svg"
import Education from '../Education/Education';
import Hero from '../Hero/Hero';
import "../../assets/styles/global.css";
import Card from '../Card/Card';

function Section() {
    return (
        <section>
            <Hero />

            <Education />

            <div className={Style.skillSection}>

                <h3 className="pageTitle">Skills</h3>

                <div className={Style.cards}>

                    <Card />

                </div>

            </div>

        </section>
    )
}

export default Section;