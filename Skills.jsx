import styles from "./style/Skills.module.css";
import djangoIcon from "./assets/django.svg";
import javaIcon from "./assets/java.svg";
import jsIcon from "./assets/js.svg";
import pythonIcon from "./assets/python.svg";
import mongodbIcon from "./assets/mongodb.svg";
import cIcon from "./assets/c.svg";
import htmlIcon from "./assets/html.svg";
import cssIcon from "./assets/css.svg";
import reactIcon from "./assets/reactjs.svg";
import phpIcon from "./assets/php.svg";
import mysqlIcon from "./assets/mysql.svg";
import uml from "./assets/UML.svg";

function Skills() {
  const skillsData = [
    { name: "HTML", icon: htmlIcon, color: "#e34c26" },
    { name: "CSS", icon: cssIcon, color: "#2965f1" },
    { name: "JavaScript", icon: jsIcon, color: "#ffca28" },
    { name: "React", icon: reactIcon, color: "#61dbfb" },
    {
      name: "Next.js",
      icon: "https://www.svgrepo.com/show/342062/next-js.svg",
      color: "#000",
    },
    { name: "Java", icon: javaIcon, color: "#007396" },
    { name: "C", icon: cIcon, color: "#283593" },
    { name: "Python", icon: pythonIcon, color: "#306998" },
    { name: "Django", icon: djangoIcon, color: "#092e20" },
    { name: "PHP", icon: phpIcon, color: "#8094d0" },
    { name: "MySQL", icon: mysqlIcon, color: "#5d87a1" },
    { name: "MongoDB", icon: mongodbIcon, color: "#13aa52" },
    {
      name: "Android",
      icon: "https://img.icons8.com/color/48/000000/android-os.png",
      color: "#7cb342",
    },
    { name: "UML", icon: uml, color: ["#962544", "#fabe15", "#452f7f"] },
  ];

  return (
    <div className={styles.skills}>
      <h2 className={styles.title} data-aos="fade-up">
        My Tech Stack
      </h2>
      <section className={styles.skillsSection}>
        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => {
            const isGradient = Array.isArray(skill.color);
            const cssValue = isGradient
              ? `linear-gradient(90deg, ${skill.color.join(", ")})`
              : skill.color;

            return (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div
                  className={`${styles.skillCard} ${
                    isGradient ? styles.gradient : ""
                  }`}
                  style={{
                    "--skill-bg": cssValue,
                    "--skill-color": isGradient ? "transparent" : cssValue,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={styles.icon}
                  />
                  <p className={styles.skillName}>{skill.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Skills;
