import styles from "./style/Experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCode } from "@fortawesome/free-solid-svg-icons";
import esta from "./assets/esta.png";
import enset from "./assets/ensetm.png";
import vala from "./assets/vala.png";
import SpotlightCard from "./SpotlightCard";

function Education() {
  return (
    <div>
      <h2 className={styles.title} data-aos="fade-up">
        My Experience
      </h2>
      <div className={styles.education}>
        <div className={styles.container}>
          <div data-aos="fade-up" data-aos-delay="150">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(255, 220, 0, 0.5)"
            >
              <div className={styles.eCard}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    style={{
                      fontSize: "4rem",
                    }}
                  />
                  <img src={enset} className={styles.eduexpIcon} />
                </div>
                <div>
                  <h3 className={styles.subtitle}>
                    Engineering Degree in Software Engineering (DI)
                  </h3>
                  <p className={styles.desc}>
                    Higher Normal School of Technical Education of Mohammedia{" "}
                    <a
                      href="https://www.enset-media.ac.ma/"
                      target="_blank"
                      className={styles.link}
                    >
                      (@ENSET){" "}
                    </a>
                  </p>
                  <p className={styles.date}>In Progress...</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
          <div data-aos="fade-up" data-aos-delay="350">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(141, 0, 255, 0.5)"
            >
              <div className={styles.eCard}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    style={{
                      fontSize: "4rem",
                    }}
                  />
                  <img src={esta} className={styles.eduexpIcon} />
                </div>
                <div>
                  <h3 className={styles.subtitle}>
                    University Diploma of Technology (DUT)
                  </h3>
                  <p className={styles.desc}>
                    High School of Technology of Agadir{" "}
                    <a
                      href="https://www.esta.ac.ma/"
                      target="_blank"
                      className={styles.link}
                    >
                      (@ESTA){" "}
                    </a>
                  </p>
                  <p className={styles.date}>2025</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
          <div data-aos="fade-up" data-aos-delay="250">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(13, 255, 0, 0.5)"
            >
              <div className={styles.eCard}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon
                    icon={faCode}
                    style={{
                      fontSize: "4rem",
                    }}
                  />
                  <img src={vala} className={styles.eduexpIcon} />
                </div>
                <div>
                  <h3 className={styles.subtitle}>Development Internship</h3>
                  <p className={styles.desc}>
                    Build an Education Web Application (ClassMatch) at{" "}
                    <a
                      href="https://vala.ma"
                      target="_blank"
                      className={styles.link}
                    >
                      @VALA
                    </a>
                  </p>
                  <p className={styles.date}>2025</p>
                </div>
              </div>
            </SpotlightCard>
          </div>

          <div data-aos="fade-up" data-aos-delay="450">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(255, 0, 0, 0.5)"
            >
              <div className={styles.eCard}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon
                    icon={faCode}
                    style={{
                      fontSize: "4rem",
                    }}
                  />
                  <img src={vala} className={styles.eduexpIcon} />
                </div>
                <div>
                  <h3 className={styles.subtitle}>Application Internship</h3>
                  <p className={styles.desc}>
                    Build an Website of E-commerce Store (Shop Up) at{" "}
                    <a
                      href="https://vala.ma"
                      target="_blank"
                      className={styles.link}
                    >
                      @VALA
                    </a>
                  </p>
                  <p className={styles.date}>2024</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
