'use client'
import { useRef, type MutableRefObject } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

/* ── Piezas del conjunto (vista explosionada → ensamblado) ── */
interface PieceConfig {
  id: string
  explodedPos: [number, number, number]
  assembledPos: [number, number, number]
  rotation?: [number, number, number]
  geometry: () => THREE.BufferGeometry
  label?: string
  labelOffset?: [number, number, number]
}

const PIECES: PieceConfig[] = [
  {
    id: 'base',
    explodedPos: [0, -4.5, 0],
    assembledPos: [0, -1.1, 0],
    geometry: () => new THREE.BoxGeometry(3.2, 0.18, 2.0),
    label: 'Placa base',
    labelOffset: [1.8, 0.3, 0],
  },
  {
    id: 'housing',
    explodedPos: [0, 5.5, 0],
    assembledPos: [0, -0.1, 0],
    geometry: () => new THREE.BoxGeometry(2.0, 1.4, 1.4),
    label: 'Carcasa',
    labelOffset: [1.2, 0.9, 0],
  },
  {
    id: 'shaft-in',
    explodedPos: [-5.5, 0, 0],
    assembledPos: [0, -0.1, 0],
    rotation: [0, 0, Math.PI / 2],
    geometry: () => new THREE.CylinderGeometry(0.09, 0.09, 2.8, 12),
    label: 'Eje entrada',
    labelOffset: [-1.6, 0.5, 0],
  },
  {
    id: 'shaft-out',
    explodedPos: [5.5, 0, 0],
    assembledPos: [0, -0.1, 0],
    rotation: [0, 0, Math.PI / 2],
    geometry: () => new THREE.CylinderGeometry(0.14, 0.14, 2.0, 12),
    label: 'Eje salida',
    labelOffset: [1.6, 0.5, 0],
  },
  {
    id: 'gear-large',
    explodedPos: [0, 0, -4.5],
    assembledPos: [0.35, -0.1, 0],
    geometry: () => new THREE.CylinderGeometry(0.52, 0.52, 0.22, 24),
    label: 'Engranaje Z=48',
    labelOffset: [0.8, 0.6, 0],
  },
  {
    id: 'gear-small',
    explodedPos: [0, 0, 4.5],
    assembledPos: [-0.42, -0.1, 0],
    geometry: () => new THREE.CylinderGeometry(0.27, 0.27, 0.22, 18),
    label: 'Piñón Z=24',
    labelOffset: [-0.9, 0.5, 0],
  },
  {
    id: 'cover-a',
    explodedPos: [3.5, 3.5, 2.5],
    assembledPos: [1.05, -0.1, 0],
    rotation: [0, 0, Math.PI / 2],
    geometry: () => new THREE.CylinderGeometry(0.32, 0.32, 0.06, 16),
    label: 'Tapa A',
    labelOffset: [0.6, -0.4, 0],
  },
  {
    id: 'cover-b',
    explodedPos: [-3.5, 3.5, -2.5],
    assembledPos: [-1.05, -0.1, 0],
    rotation: [0, 0, Math.PI / 2],
    geometry: () => new THREE.CylinderGeometry(0.32, 0.32, 0.06, 16),
    label: 'Tapa B',
    labelOffset: [-0.6, -0.4, 0],
  },
]

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

/* Stagger: cada pieza se ensambla en un sub-rango del progreso */
function getPieceProgress(globalProgress: number, index: number, total: number): number {
  const windowSize = 0.8
  const stagger = (1 - windowSize) / (total - 1)
  const start = index * stagger
  const end = start + windowSize
  const local = (globalProgress - start) / (end - start)
  return Math.min(1, Math.max(0, local))
}

function Piece({
  config,
  index,
  total,
  progressRef,
  showLabels,
}: {
  config: PieceConfig
  index: number
  total: number
  progressRef: MutableRefObject<number>
  showLabels: boolean
}) {
  const ref = useRef<THREE.Mesh>(null)
  const geo = useRef<THREE.BufferGeometry>(config.geometry())

  useFrame(() => {
    if (!ref.current) return
    const p = getPieceProgress(progressRef.current, index, total)
    const ep = easeInOut(p)

    ref.current.position.x = lerp(config.explodedPos[0], config.assembledPos[0], ep)
    ref.current.position.y = lerp(config.explodedPos[1], config.assembledPos[1], ep)
    ref.current.position.z = lerp(config.explodedPos[2], config.assembledPos[2], ep)
  })

  return (
    <mesh
      ref={ref}
      rotation={config.rotation ?? [0, 0, 0]}
      position={config.explodedPos}
    >
      <primitive object={geo.current} attach="geometry" />
      <meshBasicMaterial color="#141414" wireframe />
      {showLabels && config.label && config.labelOffset && (
        <Html
          position={config.labelOffset}
          center
          style={{ pointerEvents: 'none', whiteSpace: 'nowrap' }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 9,
              color: 'var(--color-accent, #2240C9)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              opacity: 0.85,
              background: 'rgba(237,234,227,0.7)',
              padding: '1px 4px',
            }}
          >
            ← {config.label}
          </span>
        </Html>
      )}
    </mesh>
  )
}

function FlashMesh({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const ref = useRef<THREE.Group>(null)
  const materials = useRef<THREE.MeshBasicMaterial[]>([])

  useFrame(() => {
    const p = progressRef.current
    const isComplete = p >= 0.97
    materials.current.forEach((mat) => {
      mat.wireframe = !isComplete
      if (isComplete) {
        mat.color.set('#2240C9')
        mat.opacity = 0.25
        mat.transparent = true
      } else {
        mat.color.set('#141414')
        mat.opacity = 1
        mat.transparent = false
      }
    })
  })

  return (
    <group ref={ref}>
      {PIECES.map((cfg, i) => {
        const geo = cfg.geometry()
        return (
          <mesh key={cfg.id + '-flash'} rotation={cfg.rotation ?? [0, 0, 0]} position={cfg.assembledPos}>
            <primitive object={geo} attach="geometry" />
            <meshBasicMaterial
              ref={(mat) => {
                if (mat) materials.current[i] = mat
              }}
              color="#141414"
              wireframe
            />
          </mesh>
        )
      })}
    </group>
  )
}

function Scene({
  progressRef,
  isMobile,
}: {
  progressRef: MutableRefObject<number>
  isMobile: boolean
}) {
  const { gl } = useThree()

  // Cap pixel ratio on mobile
  if (isMobile) {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 4]} intensity={0.4} />

      {/* Piezas con wireframe y animación de ensamblaje */}
      {PIECES.map((cfg, i) => (
        <Piece
          key={cfg.id}
          config={cfg}
          index={i}
          total={PIECES.length}
          progressRef={progressRef}
          showLabels={!isMobile}
        />
      ))}

      {/* Capa de flash en cianotipo al completar */}
      <FlashMesh progressRef={progressRef} />

      {!isMobile && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate
          autoRotate
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI * 0.6}
          minPolarAngle={Math.PI * 0.3}
        />
      )}
    </>
  )
}

interface AssemblySceneProps {
  progressRef: MutableRefObject<number>
  isMobile: boolean
}

export function AssemblyScene({ progressRef, isMobile }: AssemblySceneProps) {
  return (
    <Canvas
      camera={{ position: [4, 3, 6], fov: 45 }}
      style={{ background: 'transparent' }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene progressRef={progressRef} isMobile={isMobile} />
    </Canvas>
  )
}
