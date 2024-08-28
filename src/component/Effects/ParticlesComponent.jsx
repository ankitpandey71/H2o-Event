const ParallaxComponent = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url('https://via.placeholder.com/1920x1080')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#fff", paddingTop: "50px" }}>
        Parallax Effect
      </h2>
    </div>
  );
};

export default ParallaxComponent;
