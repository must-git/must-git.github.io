import Card from "./Card";
import styles from "./style/Projects.module.css";
import shopUpThumbnail from "./assets/ShopUp_on_Laptop.png";
import familyTableThumbnail from "./assets/FamilyTable_on_Laptop.png";
import suppocketThumbnail from "./assets/Suppocket.png";
import commingSoon from "./assets/comingsoon.png";

function Projects() {
  return (
    <>
      <h1 className={styles.title} data-aos="fade-up">
        Featured Projects
      </h1>
      <div className={styles.container}>
        <div className={styles.projects}>
          <Card
            projectThumbnail={shopUpThumbnail}
            projectName="Shop Up"
            projectDesc="E-Commerce Store"
            githubLink="https://github.com/must-git/E-commerce-Website-Project"
            liveLink="https://e-commerce-shopup.vercel.app/"
            projectTags={["html5", "css3", "js"]}
          />
          <Card
            projectThumbnail={familyTableThumbnail}
            projectName="Family Table"
            projectDesc="Restaurant Website"
            githubLink="https://github.com/must-git/Family-Table"
            liveLink="https://family-table.vercel.app/"
            projectTags={["html5", "css3", "js"]}
          />
          <Card
            projectThumbnail={suppocketThumbnail}
            projectName="Suppocket"
            projectDesc="Support Tickets Management System"
            githubLink="https://github.com/must-git/Suppocket"
            liveLink="https://suppocket.streamlit.app/"
            projectTags={["streamlit", "python"]}
          />
          {/* <Card
            projectThumbnail={suppocketThumbnail}
            projectName="ClassMatch"
            projectDesc="Classroom Management System"
            githubLink="https://github.com/must-git/ClassMatch"
            projectTags={["react", "django", "mongodb"]}
          /> */}
          {/* <Card
            projectThumbnail={commingSoon}
            projectName="Private Projects"
            projectTags={["react", "django", "mongodb"]}
            projectDesc="More Projects Coming Soon ..."
          /> */}
        </div>
      </div>
    </>
  );
}

export default Projects;
