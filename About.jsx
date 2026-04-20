import styles from "./style/About.module.css";

function About() {
  return (
    <div>

      <h1 className={styles.title} data-aos="fade-up">
        About Me
      </h1>
      <div className={styles.container}>
        <div className={styles.about}>
          <div
            className={styles.aboutRight}
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {/* <img
              src="https://github.com/must-git.png"
              alt="Mustapha's Avatar"
              className={styles.avatar}
            /> */}
          </div>
          <div className={styles.aboutLeft}>
            <h2 data-aos="fade-up" data-aos-delay="400">
              I&apos;m Mustapha Achahrour
            </h2>
            <p data-aos="fade-up" data-aos-delay="250">
              I&apos;m a <span>Software Engineering Student</span> from <span>Morocco</span> with a strong
              interest in software development, particularly web technologies. I
              enjoy building applications that are both functional and
              meaningful. Always eager to learn, I continuously seek
              opportunities to improve my skills through hands on projects and
              real world challenges.
            </p>
            <div data-aos="fade-up" data-aos-delay="150">
              <a href="https://www.canva.com/design/DAG7sf4YEjE/kFejyu_AgYF47AsTqjfCRw/view?utm_content=DAG7sf4YEjE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3ae5cbe073" target="_blank">
                <button className="btn">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
