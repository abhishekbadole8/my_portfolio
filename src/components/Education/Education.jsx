import React from 'react'
import Style from "./Education.module.css"
import Table from '../Table/Table'
import "../../assets/styles/global.css"

function Education() {
    return (
        <div className={Style.education}>
            <h3 className="pageTitle">Education</h3>

            <Table />
        </div>
    )
}

export default Education