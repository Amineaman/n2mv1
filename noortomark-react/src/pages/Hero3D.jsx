import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls, PerspectiveCamera, Text, Float } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Link } from 'react-router-dom'
import * as THREE from 'three'
import './Hero3D.css'

function RotatingBox() {
  const meshRef = useRef(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#ff6b6b"
        metalness={0.8}
        roughness={0.2}
        emissive="#ff6b6b"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

function FloatingSphere() {
  const mesh = useRef(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.5
      mesh.current.rotation.x += 0.002
      mesh.current.rotation.y += 0.003
    }
  })

  return (
    <mesh ref={mesh} position={[3, 0, -3]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial 
        color="#30e3ca"
        metalness={0.7}
        roughness={0.3}
        emissive="#30e3ca"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

function FloatingCube() {
  const mesh = useRef(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.y = Math.cos(clock.elapsedTime * 0.7) * 0.5
      mesh.current.rotation.z += 0.001
    }
  })

  return (
    <mesh ref={mesh} position={[-3, 0, -2]}>
      <octahedronGeometry args={[0.7, 2]} />
      <meshStandardMaterial 
        color="#7c3aed"
        metalness={0.9}
        roughness={0.1}
        emissive="#7c3aed"
        emissiveIntensity={0.25}
      />
    </mesh>
  )
}

function Marketing3DObjects() {
  const cameraRef = useRef(null)
  const adsRef = useRef(null)
  const copyRef = useRef(null)

  useFrame(({ clock }) => {
    const time = clock.elapsedTime

    // Camera animation - more dynamic
    if (cameraRef.current) {
      cameraRef.current.position.x = Math.sin(time * 0.3) * 3
      cameraRef.current.position.y = Math.cos(time * 0.4) * 2
      cameraRef.current.position.z = Math.sin(time * 0.2) * 2 - 4
      cameraRef.current.rotation.y = time * 0.2
      cameraRef.current.rotation.x = Math.sin(time * 0.1) * 0.1
    }

    // ADS animation - billboard effect
    if (adsRef.current) {
      adsRef.current.position.x = Math.cos(time * 0.5) * 3.5
      adsRef.current.position.z = Math.sin(time * 0.3) * 1.5 - 3
      adsRef.current.rotation.x = Math.sin(time * 0.2) * 0.1
      adsRef.current.rotation.y = time * 0.1
    }

    // Copywriting animation - book flipping effect
    if (copyRef.current) {
      copyRef.current.position.z = Math.sin(time * 0.6) * 2 - 5
      copyRef.current.position.y = Math.cos(time * 0.4) * 1.5 - 1
      copyRef.current.rotation.z = Math.sin(time * 0.3) * 0.2
      copyRef.current.rotation.y = time * 0.15
    }
  })

  return (
    <group>
      {/* Camera 3D Object */}
      <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
        <group ref={cameraRef} position={[4, 2, -5]}>
          {/* Camera body */}
          <mesh>
            <boxGeometry args={[1, 0.6, 0.4]} />
            <meshStandardMaterial 
              color="#ff6b6b" 
              metalness={0.8} 
              roughness={0.2}
              emissive="#ff6b6b"
              emissiveIntensity={0.2}
            />
          </mesh>
          {/* Lens */}
          <mesh position={[0.3, 0, 0.25]}>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
            <meshStandardMaterial 
              color="#000000" 
              metalness={0.9} 
              roughness={0.1}
              emissive="#333333"
              emissiveIntensity={0.1}
            />
          </mesh>
          {/* Flash */}
          <mesh position={[-0.3, 0.2, 0.25]}>
            <boxGeometry args={[0.1, 0.1, 0.05]} />
            <meshStandardMaterial 
              color="#ffffff" 
              emissive="#ffffff" 
              emissiveIntensity={0.8}
            />
          </mesh>
          <Text
            position={[0, -1, 0]}
            fontSize={0.3}
            color="#ff6b6b"
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
          >
            CAMÉRA
          </Text>
          {/* Camera glow effect */}
          <pointLight position={[0, 0, 0]} intensity={0.5} color="#ff6b6b" distance={3} />
        </group>
      </Float>

      {/* ADS 3D Object */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.3}>
        <group ref={adsRef} position={[-4, -1, -4]}>
          {/* Billboard/Sign */}
          <mesh>
            <boxGeometry args={[1.5, 1, 0.1]} />
            <meshStandardMaterial 
              color="#30e3ca" 
              metalness={0.6} 
              roughness={0.4}
              emissive="#30e3ca"
              emissiveIntensity={0.1}
            />
          </mesh>
          {/* Content area */}
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[1.3, 0.8]} />
            <meshStandardMaterial 
              color="#1a1a2e" 
              emissive="#30e3ca" 
              emissiveIntensity={0.2}
            />
          </mesh>
          {/* Support pole */}
          <mesh position={[0, -0.8, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1.6, 8]} />
            <meshStandardMaterial 
              color="#666666" 
              metalness={0.7} 
              roughness={0.3}
            />
          </mesh>
          <Text
            position={[0, -1.5, 0]}
            fontSize={0.3}
            color="#30e3ca"
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
          >
            ADS
          </Text>
          {/* ADS glow effect */}
          <pointLight position={[0, 0, 0]} intensity={0.4} color="#30e3ca" distance={3} />
        </group>
      </Float>

      {/* Copywriting 3D Object */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={0.4}>
        <group ref={copyRef} position={[0, -2, -6]}>
          {/* Paper/Book */}
          <mesh>
            <boxGeometry args={[1.2, 1.6, 0.1]} />
            <meshStandardMaterial 
              color="#7c3aed" 
              metalness={0.5} 
              roughness={0.5}
              emissive="#7c3aed"
              emissiveIntensity={0.15}
            />
          </mesh>
          {/* Pages */}
          <mesh position={[0, 0, 0.02]}>
            <boxGeometry args={[1.1, 1.5, 0.02]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0, 0, 0.04]}>
            <boxGeometry args={[1.1, 1.5, 0.02]} />
            <meshStandardMaterial color="#f8f9fa" />
          </mesh>
          {/* Pen */}
          <mesh position={[0.8, 0.5, 0.1]} rotation={[0, 0, Math.PI / 4]}>
            <cylinderGeometry args={[0.02, 0.02, 0.8, 6]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
          {/* Pen tip */}
          <mesh position={[0.8, 0.9, 0.1]} rotation={[0, 0, Math.PI / 4]}>
            <coneGeometry args={[0.02, 0.1, 6]} />
            <meshStandardMaterial 
              color="#ff6b6b"
              emissive="#ff6b6b"
              emissiveIntensity={0.3}
            />
          </mesh>
          <Text
            position={[0, -1.2, 0]}
            fontSize={0.25}
            color="#7c3aed"
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
          >
            COPYWRITING
          </Text>
          {/* Copywriting glow effect */}
          <pointLight position={[0, 0, 0]} intensity={0.3} color="#7c3aed" distance={3} />
        </group>
      </Float>
    </group>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff6b6b" />
      <pointLight position={[-10, -10, 10]} intensity={1} color="#30e3ca" />
      <pointLight position={[0, 0, 20]} intensity={0.8} />
      <pointLight position={[0, 10, -10]} intensity={1.2} color="#7c3aed" />
      <spotLight 
        position={[0, 15, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1} 
        color="#ffffff" 
        castShadow 
      />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.5} 
        color="#ffffff" 
      />
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="hero3d">
      <Canvas className="canvas-hero">
        <PerspectiveCamera position={[0, 0, 8]} fov={75} />
        <fog attach="fog" args={['#070b1a', 10, 25]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Lights />
        <RotatingBox />
        <FloatingSphere />
        <FloatingCube />
        <Marketing3DObjects />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>

      <div className="hero-overlay-content">
        <div className="hero-content">
          <h1 className="hero-title">Noortomark</h1>
          <p className="hero-subtitle">Agence de marketing digitale pour les marques ambitieuses.</p>
          <div className="hero-pillars">
            <span>Branding</span>
            <span>Stratégie</span>
            <span>Growth</span>
          </div>
          <Link to="/services" className="btn btn-primary">Découvrir nos services</Link>
        </div>
      </div>
    </div>
  )
}
