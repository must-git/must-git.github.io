import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faChevronDown,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { Expand } from "@theme-toggles/react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "./assets/arabic_logo.png";
import "@theme-toggles/react/css/Expand.css";

function Header() {
  const [menuIcon, setMenuIcon] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggled, setToggle] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isToggled) {
      document.body.style.background = "#121212";
      document.body.style.color = "#fef7ff";
    } else {
      document.body.style.background = "#fff";
      document.body.style.color = "#000";
    }
  }, [isToggled]);

  const showMenuLinks = (menuLinks) => {
    setMenuIcon(false);
    setIsMenuOpen(true);
    menuLinks.classList.remove("menuLinksHider");
    menuLinks.classList.add("showMenuLinks");
  };

  const hideMenuLinks = (menuLinks) => {
    setMenuIcon(true);
    setIsMenuOpen(false);
    menuLinks.classList.remove("showMenuLinks");
    menuLinks.classList.add("menuLinksHider");
  };

  const toggleMenuLinks = () => {
    const menuLinks = document.querySelector(".menuLinks");
    if (menuIcon) {
      showMenuLinks(menuLinks);
    } else {
      hideMenuLinks(menuLinks);
    }
  };

  return (
    <header className="header" data-aos="fade-up">
      <div className="nav-con">
        <RouterLink to="/" state={{ scrollTo: "home" }}>
          <img src={logo} alt="Mustapha" className="logo" />
        </RouterLink>
        <nav className="nav-bar">
          <ul className="nav-links">
            <li>
              {isHomePage ? (
                <Link spy={true} activeClass="active" to="home" offset={-150}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-home"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
                  </svg>
                  <p>Home</p>
                </Link>
              ) : (
                <RouterLink to="/" state={{ scrollTo: "home" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-home"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
                  </svg>
                  <p>Home</p>
                </RouterLink>
              )}
            </li>
            <li>
              {isHomePage ? (
                <Link spy={true} activeClass="active" to="about" offset={-150}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-user"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                    <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                  </svg>
                  <p>About</p>
                </Link>
              ) : (
                <RouterLink to="/" state={{ scrollTo: "about" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-user"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                    <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                  </svg>
                  <p>About</p>
                </RouterLink>
              )}
            </li>
            <li
              className="dropdownContainer"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div
                className={`dropdownTrigger ${isDropdownOpen ? "open" : ""}`}
              >
                <FontAwesomeIcon icon={faRocket} className="icon" />
                <p>Work</p>
                <FontAwesomeIcon icon={faChevronDown} className="chevron" />
              </div>
              <ul className={`dropdownMenu ${isDropdownOpen ? "show" : ""}`}>
                <li>
                  {isHomePage ? (
                    <Link
                      spy={true}
                      activeClass="active"
                      to="stack"
                      offset={-150}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-code"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 8l-4 4l4 4" />
                        <path d="M17 8l4 4l-4 4" />
                        <path d="M14 4l-4 16" />
                      </svg>
                      <p>Stack</p>
                    </Link>
                  ) : (
                    <RouterLink
                      to="/"
                      state={{ scrollTo: "stack" }}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-code"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 8l-4 4l4 4" />
                        <path d="M17 8l4 4l-4 4" />
                        <path d="M14 4l-4 16" />
                      </svg>
                      <p>Stack</p>
                    </RouterLink>
                  )}
                </li>
                <li>
                  {isHomePage ? (
                    <Link
                      spy={true}
                      activeClass="active"
                      to="projects"
                      offset={-150}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-folders"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2a1 1 0 0 1 .707 .293l1.708 1.707h4.585a3 3 0 0 1 2.995 2.824l.005 .176v7a3 3 0 0 1 -3 3h-1v1a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h1v-1a3 3 0 0 1 3 -3zm-6 6h-1a1 1 0 0 0 -1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-1h-7a3 3 0 0 1 -3 -3z" />
                      </svg>
                      <p>Projects</p>
                    </Link>
                  ) : (
                    <RouterLink
                      to="/"
                      state={{ scrollTo: "projects" }}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-folders"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2a1 1 0 0 1 .707 .293l1.708 1.707h4.585a3 3 0 0 1 2.995 2.824l.005 .176v7a3 3 0 0 1 -3 3h-1v1a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h1v-1a3 3 0 0 1 3 -3zm-6 6h-1a1 1 0 0 0 -1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-1h-7a3 3 0 0 1 -3 -3z" />
                      </svg>
                      <p>Projects</p>
                    </RouterLink>
                  )}
                </li>
                <li>
                  {isHomePage ? (
                    <Link
                      spy={true}
                      activeClass="active"
                      to="experience"
                      offset={-150}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
                      </svg>
                      <p>Experience</p>
                    </Link>
                  ) : (
                    <RouterLink
                      to="/"
                      state={{ scrollTo: "experience" }}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
                      </svg>
                      <p>Experience</p>
                    </RouterLink>
                  )}
                </li>
                <li>
                  <RouterLink
                    to="/certifs"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-certificate"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                      <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-5" />
                      <path d="M6 9h12" />
                      <path d="M6 12h3" />
                    </svg>
                    <p>Certifs</p>
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li>
              {isHomePage ? (
                <Link
                  spy={true}
                  activeClass="active"
                  to="contact"
                  offset={-150}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-at"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                  </svg>
                  <p>Contact</p>
                </Link>
              ) : (
                <RouterLink to="/" state={{ scrollTo: "contact" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-at"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                  </svg>
                  <p>Contact</p>
                </RouterLink>
              )}
            </li>
          </ul>
        </nav>
        <div className="rightNav">
          <div className="themeButton">
            <Expand
              duration={750}
              style={{
                color: "#fff",
                width: "50px",
                fontSize: "25px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
              className="themeToggle"
              toggled={isToggled}
              toggle={setToggle}
            />
          </div>
          <div className="menuIcon" onClick={toggleMenuLinks}>
            <FontAwesomeIcon
              icon={isMenuOpen ? faClose : faBars}
              style={{ color: "#fef7ff", fontSize: "25px" }}
            />
          </div>
        </div>
      </div>
      <div className="menuLinks">
        <ul className="mobileNavLinks">
          <li>
            {isHomePage ? (
              <Link
                spy={true}
                activeClass="mobileActive"
                to="home"
                offset={-150}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-home"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
                </svg>
                <p>Home</p>
              </Link>
            ) : (
              <RouterLink
                to="/"
                state={{ scrollTo: "home" }}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-home"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
                </svg>
                <p>Home</p>
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link
                spy={true}
                activeClass="mobileActive"
                to="about"
                offset={-150}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-user"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                  <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                </svg>
                <p>About</p>
              </Link>
            ) : (
              <RouterLink
                to="/"
                state={{ scrollTo: "about" }}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-user"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                  <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                </svg>
                <p>About</p>
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link
                spy={true}
                activeClass="mobileActive"
                to="stack"
                offset={-150}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-code"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 8l-4 4l4 4" />
                  <path d="M17 8l4 4l-4 4" />
                  <path d="M14 4l-4 16" />
                </svg>
                <p>Stack</p>
              </Link>
            ) : (
              <RouterLink
                to="/"
                state={{ scrollTo: "stack" }}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-code"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 8l-4 4l4 4" />
                  <path d="M17 8l4 4l-4 4" />
                  <path d="M14 4l-4 16" />
                </svg>
                <p>Stack</p>
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link
                spy={true}
                activeClass="mobileActive"
                to="projects"
                offset={-150}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-folders"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2a1 1 0 0 1 .707 .293l1.708 1.707h4.585a3 3 0 0 1 2.995 2.824l.005 .176v7a3 3 0 0 1 -3 3h-1v1a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h1v-1a3 3 0 0 1 3 -3zm-6 6h-1a1 1 0 0 0 -1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-1h-7a3 3 0 0 1 -3 -3z" />
                </svg>
                <p>Projects</p>
              </Link>
            ) : (
              <RouterLink
                to="/"
                state={{ scrollTo: "projects" }}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-folders"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2a1 1 0 0 1 .707 .293l1.708 1.707h4.585a3 3 0 0 1 2.995 2.824l.005 .176v7a3 3 0 0 1 -3 3h-1v1a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h1v-1a3 3 0 0 1 3 -3zm-6 6h-1a1 1 0 0 0 -1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-1h-7a3 3 0 0 1 -3 -3z" />
                </svg>
                <p>Projects</p>
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link
                spy={true}
                activeClass="mobileActive"
                to="experience"
                offset={-150}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
                </svg>
                <p>Experience</p>
              </Link>
            ) : (
              <RouterLink
                to="/"
                state={{ scrollTo: "experience" }}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
                </svg>
                <p>Experience</p>
              </RouterLink>
            )}
          </li>
          <li>
            <RouterLink
              to="/certifs"
              onClick={() =>
                hideMenuLinks(document.querySelector(".menuLinks"))
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-certificate"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-5" />
                <path d="M6 9h12" />
                <path d="M6 12h3" />
              </svg>
              <p>Certifs</p>
            </RouterLink>
          </li>
          <li>
            {isHomePage ? (
              <Link
                spy={true}
                activeClass="mobileActive"
                to="contact"
                offset={-150}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-at"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                </svg>
                <p>Contact</p>
              </Link>
            ) : (
              <RouterLink
                to="/"
                state={{ scrollTo: "contact" }}
                onClick={() =>
                  hideMenuLinks(document.querySelector(".menuLinks"))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-at"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                </svg>
                <p>Contact</p>
              </RouterLink>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
