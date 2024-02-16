import React from 'react'
import Style from "./Card.module.css";
import Skill from '../Skill/Skill';

function Card() {
    return (

        <div className={Style.card}>

            <div className={Style.cardHeader}>
                <h3>FRONTEND </h3>
            </div>

            <div className={Style.skillTags}>

                <Skill />

                <Skill />

                <Skill />

            </div>

        </div>

    )
}

export default Card