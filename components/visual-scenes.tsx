"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Line, OrbitControls, RoundedBox } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function CargoCluster() {
  const group = useRef<THREE.Group>(null)
  useFrame(({ pointer }, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * .12
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * .12, .03)
  })
  return <group ref={group}>
    <Float speed={1.5} rotationIntensity={.35} floatIntensity={.5}><mesh position={[-1.2,.25,0]}><icosahedronGeometry args={[.72,1]}/><meshStandardMaterial color="#55c3c8" roughness={.25} metalness={.5}/></mesh></Float>
    <Float speed={1.1} rotationIntensity={.5} floatIntensity={.35}><RoundedBox args={[1.25,1.25,1.25]} radius={.22} position={[.8,.25,.1]}><meshStandardMaterial color="#f0a950" roughness={.3} metalness={.35}/></RoundedBox></Float>
    <Float speed={1.8} rotationIntensity={.2} floatIntensity={.55}><mesh position={[.1,-1,.4]} rotation={[Math.PI/2,0,0]}><torusGeometry args={[.52,.14,18,48]}/><meshStandardMaterial color="#e8f3ee" roughness={.28} metalness={.45}/></mesh></Float>
  </group>
}

export function CommodityScene() {
  return <div className="mini-scene" role="img" aria-label="Interactive commodity network"><Canvas camera={{position:[0,0,4.5],fov:42}} dpr={[1,1.3]}><ambientLight intensity={1.3}/><pointLight position={[3,3,4]} intensity={18} color="#55c3c8"/><pointLight position={[-3,-2,3]} intensity={12} color="#f0a950"/><CargoCluster/><OrbitControls enableZoom={false} enablePan={false} rotateSpeed={.4}/></Canvas></div>
}

const route = [new THREE.Vector3(-2,-.7,0),new THREE.Vector3(-.8,.65,.25),new THREE.Vector3(.6,-.1,.1),new THREE.Vector3(2,.65,0)]
function LogisticsWorld(){
 const ship=useRef<THREE.Group>(null)
 useFrame(({clock})=>{if(ship.current){const t=(clock.elapsedTime*.08)%1; const p=new THREE.CatmullRomCurve3(route).getPoint(t); ship.current.position.copy(p)}})
 return <group><Line points={route} color="#55c3c8" lineWidth={2} dashed dashSize={.12} gapSize={.08}/>{route.filter((_,i)=>i===0||i===3).map((p,i)=><mesh position={p} key={i}><sphereGeometry args={[.16,20,20]}/><meshStandardMaterial color="#f0a950" emissive="#f0a950" emissiveIntensity={.5}/></mesh>)}<group ref={ship}><RoundedBox args={[.7,.22,.28]} radius={.08}><meshStandardMaterial color="#e8f3ee" metalness={.5} roughness={.25}/></RoundedBox><mesh position={[0,.22,0]}><boxGeometry args={[.22,.24,.2]}/><meshStandardMaterial color="#55c3c8"/></mesh></group></group>
}
export function LogisticsScene(){return <div className="logistics-scene" role="img" aria-label="Animated Iran to Austria logistics corridor"><Canvas camera={{position:[0,0,5.6],fov:42}} dpr={[1,1.3]}><ambientLight intensity={1.4}/><directionalLight position={[4,5,6]} intensity={2.5}/><LogisticsWorld/><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.25} rotateSpeed={.35}/></Canvas></div>}
