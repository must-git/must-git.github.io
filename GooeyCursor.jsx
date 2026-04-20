import { useEffect, useRef, useState } from "react";
import styles from "../style/GooeyCursor.module.css";

const GooeyCursor = () => {
  const NUM_CIRCLES = 20;
  const Easing = 0.35;

  const circlesContainerRef = useRef(null);
  const circlesRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const points = useRef(
    Array(NUM_CIRCLES)
      .fill()
      .map(() => ({ x: 0, y: 0 })),
  );
  const smoothedMousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (circlesContainerRef.current) {
      circlesRef.current = Array.from(circlesContainerRef.current.children);
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      if (
        e.target.closest('a, button, [role="button"], [class*="skillCard"], [class*="btn"], [class*="dropdownContainer"]')
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.closest('a, button, [role="button"], [class*="skillCard"], [class*="btn"], [class*="dropdownContainer"]')
      ) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    const animate = () => {
      // Smoothed mouse position
      smoothedMousePos.current.x +=
        (mousePos.current.x - smoothedMousePos.current.x) * Easing;
      smoothedMousePos.current.y +=
        (mousePos.current.y - smoothedMousePos.current.y) * Easing;

      // First point follows smoothed mouse
      const leader = points.current[0];
      leader.x = smoothedMousePos.current.x;
      leader.y = smoothedMousePos.current.y;

      // All other points follow the one in front of them
      for (let i = 1; i < points.current.length; i++) {
        points.current[i].x +=
          (points.current[i - 1].x - points.current[i].x) * Easing;
        points.current[i].y +=
          (points.current[i - 1].y - points.current[i].y) * Easing;
      }

      // Apply transformations to DOM elements
      circlesRef.current.forEach((circle, index) => {
        const point = points.current[index];

        if (circle && point) {
          const scale = (NUM_CIRCLES - index) / NUM_CIRCLES;
          circle.style.transform = `translate(${point.x}px, ${point.y}px) scale(${scale})`;
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [Easing]);

  return (
    <div
      className={`${styles.cursorWrapper} ${isHovered ? styles.hovered : ""}`}
    >
      <svg className={styles.gooeySvg}>
        <defs>
          <filter id="gooey-cursor-filter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={styles.circlesContainer} ref={circlesContainerRef}>
        {[...Array(NUM_CIRCLES)].map((_, i) => (
          <div key={i} className={styles.circle} />
        ))}
      </div>
    </div>
  );
};

export default GooeyCursor;
