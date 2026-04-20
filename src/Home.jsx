import styles from "./style/Home.module.css";
import { motion } from "motion/react";
// import me from "./assets/me.png";
// import ProfileCard from "./ProfileCard";
// import LogoLoop from "./LogoLoop";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiTailwindcss,
// } from "react-icons/si";

import Orb from "./Orb";

// const techLogos = [
//   { node: <SiReact />, title: "React", href: "https://react.dev" },
//   { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//   {
//     node: <SiTypescript />,
//     title: "TypeScript",
//     href: "https://www.typescriptlang.org",
//   },
//   {
//     node: <SiTailwindcss />,
//     title: "Tailwind CSS",
//     href: "https://tailwindcss.com",
//   },
// ];

// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

function Home() {
  return (
    <div
      className={styles.home}
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      <Orb hoverIntensity={0} hue={0} forceHoverState={false} />
      <div className={styles.homeContent} style={{ position: "absolute" }}>
        <h2 data-aos="fade-up" data-aos-delay="250">
          Hello, I&apos;m
        </h2>
        <h1 data-aos="fade-up" data-aos-delay="400">
          Mustapha
        </h1>
        <h4 data-aos="fade-up">Software Engineering Student</h4>
      </div>
      {/* <div>
        <ProfileCard
          name="Mustapha Achahrour"
          title="Software Engineer"
          handle="must-git"
          status="Online"
          contactText="Contact Me"
          avatarUrl={me}
          // showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={true}
          // onContactClick={() => console.log("Contact clicked")}
        />
      </div> */}
      {/* <div
        style={{
          height: "200px",
          width: "1000px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div> */}
    </div>
  );
}

export default Home;
