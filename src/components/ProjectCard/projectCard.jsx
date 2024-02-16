import Style from "./ProjectCard.module.css";
import ProjectImg from "../../assets/images/swiptory.png"
import Skill from '../Skill/Skill';
import { FaGithub } from "react-icons/fa6";
import { ImNewTab } from "react-icons/im";
import { FaRegPlayCircle } from "react-icons/fa";

function ProjectCard() {

    return (
        <div className={Style.projectCard}>
            <div>
                <img src={ProjectImg} alt="" className={Style.projectImg} />
            </div>

            <div className={Style.projectContent}>

                <h5 className={Style.projectHeading}>Swiptory</h5>

                <div className={Style.projectSkills}>
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                </div>

                <p className={Style.projectDescription}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quasi laborum optio.
                    Ipsum commodi dolorum sed est quidem deleniti exercitationem? Iusto animi excepturi,
                    illo eligendi a atque aliquid mollitia suscipit!
                </p>

                <div className={Style.projectCardFooter}>
                    <button><FaRegPlayCircle size={20}/> Demo</button>

                    <button><FaGithub size={20}/> Github</button>

                    <button><ImNewTab size={20}/> Deployment</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;