import { useEffect, useRef } from "react";

const BackgroundMotionEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = containerRef.current;
      const moveX = (clientX / offsetWidth) * 50;
      const moveY = (clientY / offsetHeight) * 50;
      containerRef.current.style.backgroundPosition = `${moveX}% ${moveY}%`;
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        background: "linear-gradient(45deg, #ff6b6b, #f8e71c)",
        backgroundSize: "200% 200%",
        transition: "background-position 0.1s",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#fff", paddingTop: "50px" }}>
        Move your mouse around!
      </h2>
    </div>
  );
};

export default BackgroundMotionEffect;
