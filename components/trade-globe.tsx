"use client"

import { Canvas } from "@react-three/fiber"
import { Line, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

const globeRadius = 1.45
const routeColor = "#b28a3c"
const globeColor = "#183643"
const wireColor = "#5f8592"
const iran = new THREE.Vector3(0.74, 0.3, 0.6).normalize().multiplyScalar(globeRadius)
const austria = new THREE.Vector3(0.46, 0.84, 0.3).normalize().multiplyScalar(globeRadius)
const curve = new THREE.QuadraticBezierCurve3(
    iran,
    iran.clone().add(austria).normalize().multiplyScalar(globeRadius + 0.55),
    austria,
)

function Globe() {
    return (
        <group>
            <mesh>
                <sphereGeometry args={[1.45, 32, 32]} />
                <meshStandardMaterial color={globeColor} roughness={0.72} metalness={0.16} />
            </mesh>
            <mesh>
                <sphereGeometry args={[1.47, 24, 24]} />
                <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.16} />
            </mesh>
            <Line points={curve.getPoints(60)} color={routeColor} lineWidth={2.4} transparent opacity={0.95} depthTest depthWrite={false} renderOrder={2} />
            {[iran, austria].map((position, index) => (
                <group key={index} position={position} renderOrder={3}>
                    <mesh>
                        <sphereGeometry args={[0.093, 16, 16]} />
                        <meshBasicMaterial color={routeColor} />
                    </mesh>
                    <mesh>
                        <sphereGeometry args={[0.112, 12, 12]} />
                        <meshBasicMaterial color="#fef7e8" transparent opacity={0.5} />
                    </mesh>
                </group>
            ))}
        </group>
    )
}

export default function TradeGlobe() {
    return (
        <div className="trade-globe" aria-label="Interactive trade route globe between Iran and Austria" role="img">
            <Canvas camera={{ position: [0, 0, 6.2], fov: 38 }} dpr={[1, 1.25]}>
                <ambientLight intensity={0.95} />
                <directionalLight position={[3.5, 2.5, 4]} intensity={1.4} color="#fef7e6" />
                <directionalLight position={[-3.5, -2, 2.5]} intensity={0.9} color="#7dd8de" />
                <Globe />
                <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.8} rotateSpeed={0.25} />
            </Canvas>
        </div>
    )
}
