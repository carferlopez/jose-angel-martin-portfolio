import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-technical',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'José Ángel Martín — Ingeniero Industrial · Pedro Muñoz',
  description:
    'Ingeniero industrial especializado en licencias de actividad, energía solar fotovoltaica, proyectos de baja tensión y puntos de recarga de vehículo eléctrico en Pedro Muñoz (Ciudad Real) y comarca.',
  keywords: [
    'ingeniero industrial',
    'licencias de actividad',
    'energía solar',
    'baja tensión',
    'punto recarga eléctrico',
    'Pedro Muñoz',
    'Ciudad Real',
    'Castilla-La Mancha',
  ],
  authors: [{ name: 'José Ángel Martín' }],
  openGraph: {
    title: 'José Ángel Martín — Ingeniero Industrial',
    description: 'Licencias de actividad · Energía solar · Baja tensión · Recarga VE',
    type: 'website',
    locale: 'es_ES',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#EDEAE3',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${ibmPlexMono.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  )
}
