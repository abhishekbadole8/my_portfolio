import React from 'react';
import Style from "./Header.module.css";

function Header() {

    return (
        <header>
            <h3 className={Style.projectTitle}>My Portfolio</h3>

            <div className={Style.navigation}>
                <ul>
                    <li className={Style.navigationList}>Home</li>
                    <li className={Style.navigationList}>Skills</li>
                    <li className={Style.navigationList}>Project's</li>
                    <li className={Style.navigationList}>Contact</li>
                </ul>

                <div className={Style.profileBurger}>
                    {/* Here my photo */}
                </div>
            </div>

        </header>
    )
}

export default Header