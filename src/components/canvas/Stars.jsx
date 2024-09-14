import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere, setSphere] = useState(null);

  useEffect(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    
    // Ensure positions don't contain NaN values
    const hasNaN = positions.some((value) => isNaN(value));
    if (!hasNaN) {
      setSphere(positions);
    } else {
      console.error("Position array contains NaN values, skipping render.");
    }
  }, []);

  // for rotation of all stars
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  if (!sphere) return null; // Don't render if positions are invalid

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  // return (
  //   <div className='w-full h-auto absolute inset-0 z-[-1]'>
  //     <Canvas camera={{ position: [0, 0, 1] }}>
  //       <Suspense fallback={null}>
  //         <Stars />
  //       </Suspense>
  //       <Preload all />
  //     </Canvas>
  //   </div>
  // );
};

export default StarsCanvas;
