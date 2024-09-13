import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// In React, Suspense is a component that helps you handle the loading state of components that are being loaded asynchronously. It is often used in conjunction with React's lazy function to dynamically import components, enabling code splitting and improving the performance of your application by loading only the code that is necessary for the current view.

// Key Points about Suspense:
// Code Splitting: Suspense is commonly used with React.lazy() to implement code splitting, which allows you to split your code into smaller bundles that can be loaded on demand. This can help reduce the initial load time of your application.

// Fallback UI: Suspense accepts a fallback prop, which is a React element to display while the component is being loaded. This could be a loading spinner, a placeholder, or any other loading indicator.

// Asynchronous Data: Although Suspense is primarily used for code splitting, it can also be used for handling asynchronous data fetching with libraries like React Query or Suspense for Data Fetching, which allows you to display loading states while data is being fetched.

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;