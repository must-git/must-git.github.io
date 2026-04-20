import styles from "./style/Certifications.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { certificationsData } from "./data/certificationsData";
import { useEffect } from "react";

function CertificationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedCertifications = certificationsData.sort(
    (a, b) => b.date - a.date
  );

  return (
    <div className={styles.certifications}>
      <div className={styles.pageHeader}>
        <Link to="/" className={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Portfolio</span>
        </Link>
        <h2 className={styles.title} data-aos="fade-down">
          All Certifications <span className={styles.count}>({sortedCertifications.length})</span>
        </h2>
      </div>
      <div className={styles.certGrid}>
        {sortedCertifications.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certCard}
            data-aos="fade-up"
            data-aos-delay={index * 50}
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
    </div>
  );
}

export default CertificationsPage;
