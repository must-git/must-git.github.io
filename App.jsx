import AOS from "aos";
import "aos/dist/aos.css";
import { scroller, Element } from "react-scroll";
import { useEffect, useState, useRef } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from "./Skills";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Loader from "./Loader";
import ScrollToTop from "./ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import styles from "./style/App.module.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import GooeyCursor from "./components/GooeyCursor";
import CertificationsPage from "./CertificationsPage";
import { ReactLenis } from "lenis/react";

const HomePage = () => (
  <>
    <Element name="home">
      <Home />
    </Element>
    <Element name="about">
      <About />
    </Element>
    <Element name="stack">
      <Skills />
    </Element>
    <Element name="projects">
      <Projects />
    </Element>
    <Element name="experience">
      <Experience />
    </Element>
    <Element name="certifications">
      <Certifications />
    </Element>
    <Element name="contact">
      <Contact />
    </Element>
  </>
);

function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(update);
    }

    let rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && location.pathname === "/" && location.state?.scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          duration: 1000,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -150,
        });
      }, 100);
    }
  }, [loading, location]);

  if (loading) return <Loader />;

  return (
    <div className={styles.appContainer}>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <GooeyCursor />
      <Analytics />
      <SpeedInsights />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certifs" element={<CertificationsPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
