import './App.css'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'

import * as THREE from 'three'

function App() {

  return (
    <>
     <Canvas>
      <OrbitControls
        minDistance={ 10 }
        maxPolarAngle={ Math.PI / 2 }
        enableDamping={ true }
        autoRotate={ true }
        autoRotateSpeed={ -2 }
      />
      <Stage
        shadows={ { type: 'contact', opacity: 0.8, blur: 3 } }
        preset={ 'rembrandt' }
        adjustCamera={ false }
      >
        <GameBoy/>
      </Stage>
     </Canvas>
    </>
  )
}

function GlassMaterial() {
  return (
    <meshPhysicalMaterial transmission={0.4} transparent opacity={0.5} roughness={0} metalness={0} clearcoat={1} clearcoatRoughness={0} reflectivity={1} />
  )
}

function GameBoy(props) {
  const { nodes, materials } = useGLTF('/gameboy-draco.glb')
  return (
    <group {...props} dispose={null} rotation={[Math.PI / 3, 0, 0.2]}>
      <mesh geometry={nodes.Corps_de_maillage_02_1.geometry} position={[0, -0.025, 0]}>
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_28__2_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_43.geometry} material={materials.metal} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_80.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_52.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_33__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Screen__1_.geometry} material={materials.plastics} position={[0, 0.021, 0]} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_10__2_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_45.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_46__1_.geometry} material={materials.metal} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_87.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_25.geometry} material={materials.transparent} position={[-0.016, -0.006, 0]} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_50.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_35__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_64__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_93.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.S_lect__1_.geometry} material={materials.plastics} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_14__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_56.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.B__1_.geometry} material={materials.plastics} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_09__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.A__1_.geometry} material={materials.plastics} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_42.geometry} material={materials['default']} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_28__3_.geometry} material={materials.plastics} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_81.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_34__2_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_20__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_28__5_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_15__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_12__1_.geometry} material={materials.plastics} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_36__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_10__2___2_.geometry} material={materials.Default} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_91.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_28__3___2_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_97.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_10__2___3_.geometry} material={materials.plastics} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Console_block__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_98__2_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_34__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_44.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_22__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_28__4_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_46__2_.geometry} material={materials.metal} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_27__1_.geometry} material={materials.Default} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_98__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_98__2___2_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_26__1_.geometry} material={materials['default']} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_83.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_56__2_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_12__2_.geometry} material={materials.cartdridge} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Dpad__1_.geometry} material={materials.plastics} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_82.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_94.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_10__1_.geometry} material={materials.plastics} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_38.geometry} material={materials.metal} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Start__1_.geometry} material={materials.plastics} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_46.geometry} material={materials.metal} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_54.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_25__1_.geometry} material={materials['default']} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_65__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_56__3_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_46__3_.geometry} material={materials.metal} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_56__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_18__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_57.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_63__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_61__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_62__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_60__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_89.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_59__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_58__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_77.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_76.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_74.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_23__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_75.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_79.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_78.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_96.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_95.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_84.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_92.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_85.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_86.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_90.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_88.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_98__3_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_24__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_21__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_19__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_17__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_16__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
      <mesh geometry={nodes.Corps_13__1_.geometry} material={materials.Mat} >
        <GlassMaterial />
      </mesh>
    </group>
  )
}

useGLTF.preload('/gameboy-draco.glb')

export default App