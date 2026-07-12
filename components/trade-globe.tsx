"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Line, OrbitControls } from "@react-three/drei"
import { useMemo, useRef } from "react"
import * as THREE from "three"

const iran = new THREE.Vector3(.72,.42,.56).normalize().multiplyScalar(2.03)
const austria = new THREE.Vector3(.53,.78,.34).normalize().multiplyScalar(2.03)
const curve = new THREE.QuadraticBezierCurve3(iran,iran.clone().add(austria).normalize().multiplyScalar(2.8),austria)

function Globe(){
 const group=useRef<THREE.Group>(null)
 const particles=useMemo(()=>Array.from({length:6},(_,i)=>i/6),[])
 useFrame(({clock,pointer})=>{if(group.current){group.current.rotation.x=THREE.MathUtils.lerp(group.current.rotation.x,.1+pointer.y*.08,.025);group.current.rotation.z=THREE.MathUtils.lerp(group.current.rotation.z,-.1-pointer.x*.06,.025)} particles.forEach((_,i)=>{const node=group.current?.getObjectByName(`route-${i}`);if(node)node.position.copy(curve.getPoint((clock.elapsedTime*.09+i/6)%1))})})
 return <group ref={group} rotation={[.1,-.6,-.1]}>
  <mesh><sphereGeometry args={[2,48,48]}/><meshPhysicalMaterial color="#102b35" roughness={.48} metalness={.48} clearcoat={.45}/></mesh>
  <mesh><sphereGeometry args={[2.012,24,24]}/><meshBasicMaterial color="#55c3c8" wireframe transparent opacity={.12}/></mesh>
  <Line points={curve.getPoints(48)} color="#f0a950" lineWidth={1.7} transparent opacity={.9}/>
  {particles.map((_,i)=><mesh name={`route-${i}`} key={i}><sphereGeometry args={[.035,10,10]}/><meshBasicMaterial color="#e8f3ee"/></mesh>)}
  {[iran,austria].map((position,i)=><mesh position={position} key={i}><sphereGeometry args={[.075,16,16]}/><meshBasicMaterial color="#f0a950"/></mesh>)}
  <mesh rotation={[Math.PI/2.5,.1,0]}><torusGeometry args={[2.55,.008,8,96]}/><meshBasicMaterial color="#55c3c8" transparent opacity={.34}/></mesh>
  <mesh rotation={[.2,.4,Math.PI/2]}><torusGeometry args={[2.85,.006,8,96]}/><meshBasicMaterial color="#f0a950" transparent opacity={.22}/></mesh>
  <Float speed={1.3} floatIntensity={.5}><mesh position={[-2.65,1.15,.3]}><octahedronGeometry args={[.2]}/><meshStandardMaterial color="#55c3c8" metalness={.6}/></mesh></Float>
  <Float speed={1.7} floatIntensity={.4}><mesh position={[2.45,-1.25,.4]}><torusGeometry args={[.18,.06,12,30]}/><meshStandardMaterial color="#f0a950" metalness={.5}/></mesh></Float>
 </group>
}
export default function TradeGlobe(){return <div className="trade-globe" aria-label="Interactive trade route globe between Iran and Austria" role="img"><Canvas camera={{position:[0,0,6.5],fov:44}} dpr={[1,1.35]}><ambientLight intensity={1.1}/><directionalLight position={[4,5,5]} intensity={2.4} color="#d8ffff"/><pointLight position={[-4,-2,3]} intensity={20} color="#55c3c8"/><Globe/><OrbitControls enablePan={false} enableZoom={false} rotateSpeed={.5} autoRotate autoRotateSpeed={.3} minPolarAngle={Math.PI*.28} maxPolarAngle={Math.PI*.72}/></Canvas></div>}
