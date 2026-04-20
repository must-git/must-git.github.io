import styles from "./style/Certifications.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { certificationsData } from "./data/certificationsData";

function Certifications() {
  // Show only the first 3 certifications on the homepage
  const displayedCerts = certificationsData.slice(0, 3);

  return (
    <div className={styles.certifications}>
      <h2 className={styles.title} data-aos="fade-up">
        Certifications
      </h2>
      <div className={styles.certGrid}>
        {displayedCerts.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certCard}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className={styles.previewContainer}>
              <img
                src={cert.preview}
                alt={cert.name}
                className={styles.previewImage}
              />
              <div className={styles.overlay}>
                <img
                  src={cert.badge}
                  alt={cert.name}
                  className={styles.overlayIcon}
                />
              </div>
            </div>
            <div className={styles.certContent}>
              <div className={styles.certHeader}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
              </div>
              <div className={styles.certFooter}>
                <span className={styles.certDate}>{cert.date}</span>
                <FontAwesomeIcon
                  icon={cert.icon}
                  className={styles.smallIcon}
                />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className={styles.showMoreContainer} data-aos="fade-up">
        <Link to="/certifs" className={styles.showMoreButton}>
          <span>View All Certifications</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}

export default Certifications;
