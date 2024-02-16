import Style from "./Skill.module.css";
import htmlIcon from "../../assets/images/html-icon.svg"

function Skill() {
    return (
        <div className={Style.skillTag}>
            <img src={htmlIcon} alt="" />
            <span>HTML</span>
        </div>
    )
}

export default Skill