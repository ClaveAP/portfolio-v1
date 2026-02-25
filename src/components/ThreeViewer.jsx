import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";

// Placeholder 3D shape while GLB is not provided
function FloatingGeometry() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#4f6b49"
          wireframe={false}
          roughness={0.2}
          metalness={0.8}
          envMapIntensity={1}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#8fa888"
          wireframe={true}
          roughness={0.5}
          metalness={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

// GLB Model loader - uncomment when you have the GLB file
// function Model({ url }) {
//   const { scene } = useGLTF(url)
//   return <primitive object={scene} scale={1.5} />
// }

export default function ThreeViewer({ glbPath }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full relative"
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          color="#e8b56a"
        />
        <directionalLight
          position={[-5, -2, -5]}
          intensity={0.3}
          color="#8fa888"
        />
        <Suspense fallback={null}>
          <Environment preset="city" />
          {/* When you add GLB: <Model url="/your-model.glb" /> */}
          <FloatingGeometry />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      {/* Label when using placeholder */}
      {!glbPath && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-ink-600 tracking-wider">
          {/* placeholder · add .glb to replace */}
        </div>
      )}
    </motion.div>
  );
}
