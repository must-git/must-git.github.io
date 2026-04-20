import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./style/Card.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import StackIcon from "tech-stack-icons";

function Card(props) {
   const [isHovering, setIsHovering] = useState(false);

   const handleMouseEnter = () => {
      setIsHovering(true);
   };

   const handleMouseLeave = () => {
      setIsHovering(false);
   };
   return (
      <div
         className={styles.card}
         data-aos="fade-up"
         data-aos-delay="250"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <img
            src={props.projectThumbnail}
            className={styles.projectThumbnail}
            alt="Project Thumbnail"
         />
         <div className={styles.cardContent}>
            <h4
               style={{
                  color: isHovering ? "#000" : "#868686",
                  transition: "color ease 0.3s",
               }}
            >
               <b>{props.projectName}</b>
            </h4>
            <p
               style={{
                  color: isHovering ? "#000" : "#868686",
                  transition: "color ease 0.3s",
               }}
            >
               {props.projectDesc}
            </p>
            <div className={styles.projectTags}>
               {props.projectTags.map((tag, index) => (
                  <StackIcon key={index} name={tag} style={{ width: "30px" }} />
               ))}
            </div>
            <div className={styles.socialIcons}>
               <a
                  href={props.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon
                     icon={faGithub}
                     style={{
                        color: isHovering ? "#000" : "#868686",
                        transition: "color ease 0.3s",
                     }}
                  />
                  <p
                     style={{
                        color: isHovering ? "#000" : "#868686",
                        transition: "color ease 0.3s",
                     }}
                  >
                     GitHub Repo
                  </p>
               </a>
               {props.liveLink === "" ? (
                  ""
               ) : (
                  <a
                     href={props.liveLink}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        style={{
                           color: isHovering ? "#000" : "#868686",
                           transition: "color ease 0.3s",
                        }}
                     />
                     <p
                        style={{
                           color: isHovering ? "#000" : "#868686",
                           transition: "color ease 0.3s",
                        }}
                     >
                        Live View
                     </p>
                  </a>
               )}
            </div>
         </div>
      </div>
   );
}

Card.defaultProps = {
   projectThumbnail: "https://placehold.jp/220x130.png",
   projectName: "Project Name",
   projectDesc: "Project Description",
   githubLink: "https://github.com/must-git/",
   liveLink: "",
   projectTags: [],
};

Card.propTypes = {
   projectThumbnail: PropTypes.string,
   projectName: PropTypes.string.isRequired,
   projectDesc: PropTypes.string,
   githubLink: PropTypes.string.isRequired,
   liveLink: PropTypes.string,
   projectTags: PropTypes.arrayOf(PropTypes.string),
};

export default Card;
