import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function TorusKnotCore() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.12;
      meshRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group position={[0, -0.2, -1]}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.8, 0.45, 128, 32]} />
        <meshBasicMaterial
          color="#c8f332"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
}

function ParticleSwarm() {
  const pointsRef = useRef();

  // Generate 1600 points in a sphere / neural field
  const [positions, colors] = useMemo(() => {
    const count = 1600;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    const colorLime = new THREE.Color("#c8f332");
    const colorCyan = new THREE.Color("#00f2fe");
    const colorPurple = new THREE.Color("#8b5cf6");

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.8 + Math.random() * 3.2;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      let mixedColor;
      const rand = Math.random();
      if (rand > 0.4) mixedColor = colorLime;
      else if (rand > 0.15) mixedColor = colorCyan;
      else mixedColor = colorPurple;

      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }

    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.04;
      pointsRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.038}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

function OrbitRings() {
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame((state, delta) => {
    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.15;
      ringRef1.current.rotation.x += delta * 0.08;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z -= delta * 0.12;
      ringRef2.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <>
      <mesh ref={ringRef1} position={[0, 0, -1]}>
        <ringGeometry args={[3.4, 3.43, 64]} />
        <meshBasicMaterial color="#c8f332" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={ringRef2} position={[0, 0, -1]} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[4.2, 4.22, 64]} />
        <meshBasicMaterial color="#00f2fe" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-90">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.6} />
        <TorusKnotCore />
        <ParticleSwarm />
        <OrbitRings />
      </Canvas>
    </div>
  );
}

