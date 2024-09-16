import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// Canvas (from @react-three/fiber): This is the core container for 3D scenes. It’s like the <canvas> element in HTML but specific to Three.js and Fiber.
// OrbitControls (from @react-three/drei): Allows for rotating and zooming the 3D model interactively.
// Preload: Optimizes loading assets.
// useGLTF: A hook that loads GLTF models (a common format for 3D models).
// CanvasLoader: A loading component (a spinner) to display while the model is loading.



import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  // useGLTF: Loads the 3D model from the file ./desktop_pc/scene.gltf. It returns a scene object that represents the model.

  // Lights: Different light sources are added to the scene to control how the 3D object appears:

  // ambientLight: Provides overall lighting.
  // hemisphereLight: Provides light from both the sky and ground, simulating outdoor lighting.
  // directionalLight: A light that shines in one direction and can cast shadows.
  // spotLight: A focused light, used here to add sharp lighting effects.
  // pointLight: A light source that emits light in all directions, used to increase overall brightness.

  // primitive: Renders the computer.scene object (the loaded 3D model).

  // scale: Adjusts the model size based on whether the user is on mobile (isMobile).
  // position: Positions the model differently depending on the device.
  // rotation: Slightly rotates the model for better viewing angles.

  return (
    <mesh>
      <ambientLight intensity={1.5} />
      <hemisphereLight intensity={0.35} groundColor='black' skyColor='white' />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
       <pointLight intensity={5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Canvas: The container for the 3D scene.

  // frameloop='demand': This optimizes performance by only re-rendering the scene when needed (reducing unnecessary re-renders).
  // shadows: Enables shadow rendering in the scene.
  // dpr={[1, 2]}: Sets the device pixel ratio. 1 for normal screens, 2 for high-DPI screens.
  // camera: Sets the camera's position ([20, 3, 5]) and field of view (fov: 25) to control the viewing perspective of the scene.
  // gl: Enables preserveDrawingBuffer, which preserves the drawing buffer (used when you need to take screenshots or manipulate the buffer).
  // Suspense: Wraps the 3D scene and displays the CanvasLoader component while the 3D model is loading.

  // OrbitControls: Provides interactive controls for rotating and viewing the model. Zoom is disabled (enableZoom={false}), and the camera's rotation is constrained to a horizontal plane (maxPolarAngle={Math.PI / 2}).

  // Preload: Ensures that all assets are preloaded before displaying the 3D scene.

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;