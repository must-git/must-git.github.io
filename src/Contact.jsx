import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./style/Contact.module.css";
import { useState } from "react";

function Contact() {
  const [isHovering1, setIsHovering1] = useState(false);
  // const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };

  // const handleMouseEnter2 = () => {
  //   setIsHovering2(true);
  // };

  // const handleMouseLeave2 = () => {
  //   setIsHovering2(false);
  // };

  const handleMouseEnter3 = () => {
    setIsHovering3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovering3(false);
  };

  const handleMouseEnter4 = () => {
    setIsHovering4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovering4(false);
  };

  const handleMouseEnter5 = () => {
    setIsHovering5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovering5(false);
  };

  return (
    <>
      <h2 className={styles.title} data-aos="fade-up">
        Let&#39;s get in touch
        <br />
      </h2>

      <div className={styles.contact}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.container}>
              <h2 data-aos="fade-up" data-aos-delay="250">
                Contact Info
              </h2>

              <a
                href="https://www.google.com/maps/place/Mohammedia,+Morocco"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <div data-aos="fade-up" data-aos-delay="350">
                  <div
                    className={styles.contactItem}
                    style={{
                      backgroundColor: isHovering1 ? "#fff" : "transparent",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <div className={styles.contactItemIcon}>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        style={{
                          fontSize: "2rem",
                          color: isHovering1 ? "#c71610" : "#868686",
                          transition: "color ease 0.2s",
                        }}
                      />
                    </div>
                    <div className={styles.contactTextInfo}>
                      {/* <h4
                        style={{
                          color: isHovering1 ? "#c71610" : "#868686",
                          transition: "color ease 0.2s",
                        }}
                      >
                        Address
                      </h4> */}
                      <p
                        style={{
                          color: isHovering1 ? "#c71610" : "#868686",
                          transition: "color ease 0.2s",
                        }}
                      >
                        Mohammedia, Morocco | Agadir, Morocco
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* <a
                href={`https://wa.me/212713006347`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <div data-aos="fade-up" data-aos-delay="450">
                  <div
                    className={styles.contactItem}
                    style={{
                      backgroundColor: isHovering2 ? "#fff" : "transparent",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                  >
                    <div className={styles.contactItemIcon}>
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{
                          fontSize: "2rem",
                          color: isHovering2 ? "#25D366" : "#868686",
                          transition: "color ease 0.2s",
                        }}
                      />
                    </div>
                    <div className={styles.contactTextInfo}>
                      <h4
                        style={{
                          color: isHovering2 ? "#25D366" : "#868686",
                          transition: "color ease 0.2s",
                        }}
                      >
                        Whatsapp
                      </h4>
                      <p
                        style={{
                          color: isHovering2 ? "#25D366" : "#868686",
                          transition: "color ease 0.2s",
                        }}
                      >
                        (+212) 713-006347
                      </p>
                    </div>
                  </div>
                </div>
              </a> */}

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=mustaphaachahrour@gmail.com&su=Contact from Portfolio`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <div data-aos="fade-up" data-aos-delay="550">
                  <div
                    className={styles.contactItem}
                    style={{
                      backgroundColor: isHovering3 ? "#fff" : "transparent",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <div className={styles.contactItemIcon}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{
                          fontSize: "2rem",
                          color: isHovering3 ? "#3e65cf" : "#868686",
                          transition: "color ease 0.2s",
                        }}
                      />
                    </div>
                    <div className={styles.contactTextInfo}>
                      {/* <h4
                        style={{
                          color: isHovering3 ? "#3e65cf" : "#868686",
                          transition: "color ease 0.2s",
                        }}
                      >
                        Email
                      </h4> */}
                      <p
                        style={{
                          color: isHovering3 ? "#3e65cf" : "#868686",
                          transition: "color ease 0.2s",
                        }}
                      >
                        mustaphaachahrour@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className={styles.profileLink}>
              <h2 data-aos="fade-up" data-aos-delay="650">
                My Profiles
              </h2>
              <div className={styles.profileLinks}>
                <div data-aos="fade-up" data-aos-delay="750">
                  <a
                    href="https://github.com/must-git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={styles.profileItem}
                      onMouseEnter={handleMouseEnter4}
                      onMouseLeave={handleMouseLeave4}
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className={styles.profileIcon}
                        style={{ color: isHovering4 ? "#000" : "#868686" }}
                      />
                      <p>Github</p>
                    </div>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay="850">
                  <a
                    href="https://www.linkedin.com/in/mustapha-achahrour/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={styles.profileItem}
                      onMouseEnter={handleMouseEnter5}
                      onMouseLeave={handleMouseLeave5}
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className={styles.profileIcon}
                        style={{ color: isHovering5 ? "#3548ee" : "#868686" }}
                      />
                      <p>Linkedin</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            <h2 data-aos="fade-up" data-aos-delay="950">
              Send Me an Email
            </h2>
            <form
              action="https://formspree.io/f/xvgzgnkp"
              method="POST"
              data-aos="fade-up"
              data-aos-delay="1050"
            >
              <input
                type="text"
                name="Name"
                id="name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your Subject"
                required
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <input type="submit" value="Send Email" className="btn" />
            </form>
          </div>
        </div>
      </div>
      <script
        type="text/javascript"
        src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
        data-name="bmc-button"
        data-slug="mustaphaachahrour"
        data-color="#bf80ff"
        data-emoji=""
        data-font="Cookie"
        data-text="Buy me a tea"
        data-outline-color="#000000"
        data-font-color="#000000"
        data-coffee-color="#FFDD00"
      ></script>
    </>
  );
}

export default Contact;
