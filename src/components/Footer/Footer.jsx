import React from 'react';
import Style from "./Footer.module.css";

function Footer() {

    return (
        <footer>
            <div className={Style.container}>
                <span className={Style.credit}>
                    Made with ❤️ by Abhishek Badole
                </span>
            </div>
        </footer>
    )
}

export default Footer