import ParticlesComponent from "./component/Effects/BackgroundMotionEffect";
import BackgroundMotionEffect from "./component/Effects/ParticlesComponent";
import ParallaxComponent from "./component/Effects/ParallaxComponent";

function App() {
  return (
    <div className="App">
      <ParticlesComponent />
      <BackgroundMotionEffect />
      <ParallaxComponent />
    </div>
  );
}

export default App;
