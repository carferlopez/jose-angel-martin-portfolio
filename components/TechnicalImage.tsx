'use client'
import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'

type TechnicalImageProps = ImageProps & { label?: string }

export function TechnicalImage({ src, alt, label, className, ...props }: TechnicalImageProps) {
  const [error, setError] = useState(false)
  const name = label ?? (typeof src === 'string' ? (src.split('/').pop() ?? 'asset') : alt)

  if (error) {
    return <TechnicalPlaceholder label={name} className={className} />
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      {...props}
      onError={() => setError(true)}
      unoptimized={typeof src === 'string' && src.endsWith('.svg')}
    />
  )
}

export function TechnicalPlaceholder({
  label = 'asset',
  className = '',
}: {
  label?: string
  className?: string
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: '#EDEAE3' }}
      aria-label={`Imagen no disponible: ${label}`}
    >
      <svg
        viewBox="0 0 800 540"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="800" height="540" fill="#EDEAE3" />
        {/* Outer frame */}
        <rect x="1" y="1" width="798" height="538" fill="none" stroke="#141414" strokeWidth="0.8" opacity="0.3" />
        {/* Inner dashed border */}
        <rect x="20" y="20" width="760" height="500" fill="none" stroke="#141414" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.25" />
        {/* Corner marks */}
        <line x1="0" y1="20" x2="12" y2="20" stroke="#141414" strokeWidth="1" opacity="0.45" />
        <line x1="20" y1="0" x2="20" y2="12" stroke="#141414" strokeWidth="1" opacity="0.45" />
        <line x1="788" y1="20" x2="800" y2="20" stroke="#141414" strokeWidth="1" opacity="0.45" />
        <line x1="780" y1="0" x2="780" y2="12" stroke="#141414" strokeWidth="1" opacity="0.45" />
        <line x1="0" y1="520" x2="12" y2="520" stroke="#141414" strokeWidth="1" opacity="0.45" />
        <line x1="20" y1="528" x2="20" y2="540" stroke="#141414" strokeWidth="1" opacity="0.45" />
        <line x1="788" y1="520" x2="800" y2="520" stroke="#141414" strokeWidth="1" opacity="0.45" />
        <line x1="780" y1="528" x2="780" y2="540" stroke="#141414" strokeWidth="1" opacity="0.45" />
        {/* Center cross */}
        <line x1="380" y1="260" x2="420" y2="260" stroke="#141414" strokeWidth="0.8" opacity="0.3" />
        <line x1="400" y1="240" x2="400" y2="280" stroke="#141414" strokeWidth="0.8" opacity="0.3" />
        {/* Circle at center */}
        <circle cx="400" cy="260" r="3" fill="none" stroke="#141414" strokeWidth="0.6" opacity="0.25" />
        {/* Label */}
        <text
          x="400" y="310"
          textAnchor="middle"
          fontFamily="'IBM Plex Mono', monospace"
          fontSize="13"
          fill="#141414"
          opacity="0.45"
          letterSpacing="2"
        >
          {String(label).toUpperCase()}
        </text>
        <text
          x="400" y="328"
          textAnchor="middle"
          fontFamily="'IBM Plex Mono', monospace"
          fontSize="9"
          fill="#141414"
          opacity="0.25"
          letterSpacing="1"
        >
          // SIN IMAGEN ASIGNADA
        </text>
        {/* Dimension lines */}
        <line x1="40" y1="500" x2="760" y2="500" stroke="#2240C9" strokeWidth="0.5" opacity="0.2" />
        <line x1="40" y1="495" x2="40" y2="505" stroke="#2240C9" strokeWidth="0.5" opacity="0.2" />
        <line x1="760" y1="495" x2="760" y2="505" stroke="#2240C9" strokeWidth="0.5" opacity="0.2" />
        <text x="400" y="518" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="8" fill="#2240C9" opacity="0.3">800 × 540</text>
      </svg>
    </div>
  )
}
