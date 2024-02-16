import React from 'react'
import Style from "./Table.module.css"

function Table() {
    return (

        <div className={Style.tableContainer}>

            <div className={Style.educationSelect}>
                <ul>
                    <li className={Style.educationShow}> --> SSC</li>
                    <li className={Style.educationShow}> --> HSC</li>
                    <li className={Style.educationShow}> --> BE</li>
                </ul>
            </div>

            <div className={Style.educationContent}>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>SCHOOL NAME: </th>
                                <th>COURSE : </th>
                                <th>FIELD: </th>
                                <th>CGPA: </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>SUNNY'S SPRING DALE SCHOOL</td>
                                <td>SCIENCE </td>
                                <td>10 TH</td>
                                <td>7.4 CGPA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Table