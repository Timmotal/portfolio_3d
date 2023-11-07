/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/scene2Bake.gltf -K -k 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene2Bake.gltf')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Character" position={[0.414, -0.441, -0.415]} rotation={[0, -0.312, 0]} />
        <group name="Desk" position={[0.511, -0.002, -1.21]} rotation={[Math.PI, -1.561, Math.PI]}>
          <mesh name="Cube001_Cube002_BlackCoatSteel" geometry={nodes.Cube001_Cube002_BlackCoatSteel.geometry} material={materials.BlackCoatSteel} />
          <mesh name="Cube001_Cube002_BlackCoatSteel_1" geometry={nodes.Cube001_Cube002_BlackCoatSteel_1.geometry} material={materials.GrayPlastic} />
          <mesh name="Cube001_Cube002_BlackCoatSteel_2" geometry={nodes.Cube001_Cube002_BlackCoatSteel_2.geometry} material={materials.WhiteSteelScrew} />
          <mesh name="Cube001_Cube002_BlackCoatSteel_3" geometry={nodes.Cube001_Cube002_BlackCoatSteel_3.geometry} material={materials.BlackPlastic} />
          <mesh name="Cube001_Cube002_BlackCoatSteel_4" geometry={nodes.Cube001_Cube002_BlackCoatSteel_4.geometry} material={materials.BlackWood} />
        </group>
        <group name="Shelf" position={[-0.622, 1.73, -1.518]}>
          <mesh name="SM_ShelfSM_Shelf1_1" geometry={nodes.SM_ShelfSM_Shelf1_1.geometry} material={materials.lambert2SG} />
          <mesh name="SM_ShelfSM_Shelf1_1_1" geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry} material={materials.lambert3SG} />
        </group>
        <group name="OfficeChair" position={[0.417, 0, -0.353]} rotation={[-Math.PI / 2, 0, 3.018]}>
          <mesh name="OfficeChair_1" geometry={nodes.OfficeChair_1.geometry} material={materials.Grey} />
          <mesh name="OfficeChair_2" geometry={nodes.OfficeChair_2.geometry} material={materials.Black} />
          <mesh name="OfficeChair_3" geometry={nodes.OfficeChair_3.geometry} material={materials.Chair} />
        </group>
        <group name="Lamp" position={[-0.946, 1.979, -1.5]} rotation={[0, 0.527, 0]}>
          <mesh name="Desk_lamp_01_Circle001-Mesh" geometry={nodes['Desk_lamp_01_Circle001-Mesh'].geometry} material={materials.FFFFFF} />
          <mesh name="Desk_lamp_01_Circle001-Mesh_1" geometry={nodes['Desk_lamp_01_Circle001-Mesh_1'].geometry} material={materials.FFEB3B} />
          <mesh name="Desk_lamp_01_Circle001-Mesh_2" geometry={nodes['Desk_lamp_01_Circle001-Mesh_2'].geometry} material={materials['455A64']} />
        </group>
        <group name="Laptop" position={[0.079, 0.787, -1.362]} rotation={[0, 0.238, 0]}>
          <mesh name="ChamferBox017_1" geometry={nodes.ChamferBox017_1.geometry} material={materials['03___Default']} />
          <mesh name="ChamferBox017_1_1" geometry={nodes.ChamferBox017_1_1.geometry} material={materials['05___Default']} />
          <mesh name="ChamferBox017_1_2" geometry={nodes.ChamferBox017_1_2.geometry} material={materials['01___Default']} />
          <mesh name="ChamferBox017_1_3" geometry={nodes.ChamferBox017_1_3.geometry} material={materials['04___Default']} />
        </group>
        <mesh name="RubberDuck_mesh" geometry={nodes.RubberDuck_mesh.geometry} material={materials.RubberDuck_mat1} position={[-0.293, 0.767, -0.891]} rotation={[0, 1.156, 0]} />
        <mesh name="iMac" geometry={nodes.iMac.geometry} material={materials.Mat} position={[0.836, 0.78, -1.397]} rotation={[Math.PI, -1.36, Math.PI]} />
        <group name="Wall_Art_Classical_Plane" position={[-1.785, 1.288, 0.34]} rotation={[Math.PI, -1.57, Math.PI]}>
          <mesh name="Wall_Art_Classical_Plane-Mesh" geometry={nodes['Wall_Art_Classical_Plane-Mesh'].geometry} material={materials.DD9944} />
          <mesh name="Wall_Art_Classical_Plane-Mesh_1" geometry={nodes['Wall_Art_Classical_Plane-Mesh_1'].geometry} material={materials['1A1A1A']} />
          <mesh name="Wall_Art_Classical_Plane-Mesh_2" geometry={nodes['Wall_Art_Classical_Plane-Mesh_2'].geometry} material={materials['4CAF50']} />
          <mesh name="Wall_Art_Classical_Plane-Mesh_3" geometry={nodes['Wall_Art_Classical_Plane-Mesh_3'].geometry} material={materials['8BC34A']} />
        </group>
        <group name="Houseplant_7" position={[-1.092, -0.001, -0.774]} rotation={[-Math.PI / 2, 0, 2.587]}>
          <mesh name="Houseplant_7_1" geometry={nodes.Houseplant_7_1.geometry} material={materials['Black.001']} />
          <mesh name="Houseplant_7_2" geometry={nodes.Houseplant_7_2.geometry} material={materials.Brown} />
          <mesh name="Houseplant_7_3" geometry={nodes.Houseplant_7_3.geometry} material={materials.Plant_Green} />
        </group>
        <mesh name="Door" geometry={nodes.Door.geometry} material={materials.mat18} position={[-2.036, 1.21, 1.25]} rotation={[-Math.PI, 1.569, -Math.PI]} />
        <group name="Window" position={[-2.048, 1.599, -0.85]} rotation={[Math.PI, -1.567, Math.PI]}>
          <mesh name="mesh1198767915" geometry={nodes.mesh1198767915.geometry} material={materials.mat24} />
          <mesh name="mesh1198767915_1" geometry={nodes.mesh1198767915_1.geometry} material={materials.mat20} />
          <mesh name="mesh1198767915_2" geometry={nodes.mesh1198767915_2.geometry} material={materials.mat23} />
        </group>
        <mesh name="Geo_Beagle" geometry={nodes.Geo_Beagle.geometry} material={materials['lambert2SG.001']} position={[-0.868, 0.544, 1.03]} rotation={[-Math.PI, 0.799, -Math.PI]} />
        <group name="Mantis" position={[-0.388, 2.232, -1.374]} rotation={[-Math.PI, 0.045, -Math.PI]}>
          <mesh name="Node-Mesh003" geometry={nodes['Node-Mesh003'].geometry} material={materials.mat10} />
          <mesh name="Node-Mesh003_1" geometry={nodes['Node-Mesh003_1'].geometry} material={materials.mat9} />
          <mesh name="Node-Mesh003_2" geometry={nodes['Node-Mesh003_2'].geometry} material={materials['mat20.001']} />
        </group>
        <group name="whiskers" position={[2.004, -0.011, -0.829]} rotation={[-Math.PI / 2, 0, 1.151]}>
          <mesh name="whiskers_1" geometry={nodes.whiskers_1.geometry} material={materials.Whiskers} />
          <mesh name="whiskers_2" geometry={nodes.whiskers_2.geometry} material={materials.Dingus} />
        </group>
        <group name="Cube" position={[1.421, 2.373, -1.6]} rotation={[0, 0, -0.85]}>
          <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={materials.mat8} />
          <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat21} />
        </group>
        <group name="Mouse" position={[0.724, 0.781, -0.967]} rotation={[-1.563, 0.003, -0.311]}>
          <mesh name="cuerpo_base_mouse" geometry={nodes.cuerpo_base_mouse.geometry} material={materials.DefaultMaterial} />
          <mesh name="cuerpo_base_mouse_1" geometry={nodes.cuerpo_base_mouse_1.geometry} material={materials['Paint - Metallic (Red)']} />
          <mesh name="cuerpo_base_mouse_2" geometry={nodes.cuerpo_base_mouse_2.geometry} material={materials['Paint - Metallic (Silver)']} />
          <mesh name="cuerpo_base_mouse_3" geometry={nodes.cuerpo_base_mouse_3.geometry} material={materials['Nylon 6-6 (White)']} />
        </group>
        <mesh name="Screen" geometry={nodes.Screen.geometry} material={materials.Mat} position={[0.836, 0.78, -1.397]} rotation={[Math.PI, -1.36, Math.PI]} />
        <mesh name="Keyboard001" geometry={nodes.Keyboard001.geometry} material={materials['Mat.001']} position={[0.413, 0.78, -0.935]} rotation={[0, -0.015, 0]} />
        <group name="Plane" position={[0.219, -0.197, 0.026]}>
          <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials.Default} />
          <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials.Floor} />
          <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={materials.Walls} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene2Bake.gltf')
