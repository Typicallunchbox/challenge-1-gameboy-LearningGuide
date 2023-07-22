import './App.css'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, useGLTF, MeshTransmissionMaterial, Edges, Environment, Shadow } from '@react-three/drei'

function App() {

  return (
    <>
     <Canvas>
      <ambientLight intensity={ 5.5 } />
      <OrbitControls
        minDistance={ 20 }
        maxPolarAngle={ Math.PI / 2 }
        enableDamping={ true }
        autoRotate={ true }
        autoRotateSpeed={ -2 }
      />
      <Environment files="./environment.hdr" />
      <Center>
        <GameBoy/>
      </Center>
     </Canvas>
    </>
  )
}

function GlassMaterial() {
  return (
    <>
      <MeshTransmissionMaterial
        color={'#1fb4ff'}
        bg={'#212121'}
        attenuationColor={'#ffffff'}
        envMapIntensity={100}
      />
      <Edges color="white"/>
    </>
  )
}

function NormalMaterial() {
  return (
    <>
      <meshNormalMaterial
        transparent={true}
        opacity={0.5}
      />
    </>
  )
}

function GameBoy(props) {
  const { nodes, materials } = useGLTF('/gba-draco.glb')
  return (
    <group {...props} dispose={null} rotation={[0, 0, 0]}>
      <group position={[0, -2.521, -4.974]} rotation={[-3.058, 0, 0]}>
        <mesh geometry={nodes.LogoSticker_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.ScreenGuard_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.Top_LargeHinge_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.Top_SmallHinge_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.TopScreen_Frame_geo.geometry} >
          <GlassMaterial/>
        </mesh>
        <mesh geometry={nodes.Sceren_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.ScreenCover_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.ScreenGlass_geo.geometry} >
          <NormalMaterial/>
        </mesh>
      </group>
      <group position={[0, -2.007, 0.023]} rotation={[1.916, 0, 0]}>
        <mesh geometry={nodes.Base_geo.geometry} >
          <GlassMaterial/>
        </mesh>
        <mesh geometry={nodes.BatterLid_Screw_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.Battery_Lid_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.Btm_Label_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.CartridgeSlot_Teeth_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.HingeCorner_LMid_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.HingeCorner_RMid_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.LKesnsignton_Lock_End_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.Power_LED01_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.Power_LED02_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.RKesnsignton_Lock_End_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.A_Btn_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.B_Btn_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.Brightness_Btn_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.DPad_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.L_ShoulderBtn_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.L_ShoulderButn_Inside_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.R_ShoulderBtn_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.R_ShoulderButn_Inside_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.Select_Btn_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.Start_Btn_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.ChargingPort_Frame_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.ChargingPort_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.ChargingPort_Mid_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.LinkPort_Frame_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.LinkPort_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.LinkPort_Mid_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.PowerBtn_Base_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.PowerBtn_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.OffDot_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.OffText_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.OnDot_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.OnText_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.VolumeBtn_Base_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.VolumeBtn_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.VolBar_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.VolDot_geo.geometry} >
          <NormalMaterial/>
        </mesh>
        <mesh geometry={nodes.VolText_geo.geometry} >
          <NormalMaterial/>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/gba-draco.glb')

export default App