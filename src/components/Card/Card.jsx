import React from 'react'
import htmlIcon from "../../assets/images/html-icon.svg"
import Style from "./Card.module.css";

function Card() {
    return (

        <div className={Style.card}>

            <div className={Style.cardHeader}>
                <h3>FRONTEND </h3>
            </div>

            <div className={Style.skillTags}>

                <div className={Style.skillTag}>
                    <img src={htmlIcon} alt="" />
                    <span>HTML</span>
                </div>

                <div className={Style.skillTag}>
                    <img src={htmlIcon} alt="" />
                    <span>CSS</span>
                </div>
                <div className={Style.skillTag}>
                    <img src={htmlIcon} alt="" />
                    <span>CSS</span>
                </div>
                <div className={Style.skillTag}>
                    <img src={htmlIcon} alt="" />
                    <span>CSS</span>
                </div>

            </div>

        </div>

    )
}

export default Card