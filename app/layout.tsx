import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Barlow_Condensed } from 'next/font/google'
import { PHONE_RAW, EMAIL, SITE_URL } from '@/lib/constants'
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
  title: 'Licencias de Actividad en Pedro Muñoz — José Ángel Martín, Ingeniero Industrial',
  description:
    'Ingeniero industrial colegiado en Pedro Muñoz (Ciudad Real). Tramitación de licencias de actividad, proyectos de energía solar, baja tensión y puntos de recarga VE en Castilla-La Mancha.',
  keywords: [
    'licencia de actividad Pedro Muñoz',
    'licencia de apertura Ciudad Real',
    'ingeniero industrial Pedro Muñoz',
    'licencia actividad Castilla La Mancha',
    'declaración responsable apertura',
    'licencia apertura Alcázar de San Juan',
    'licencia apertura Tomelloso',
    'licencia apertura Campo de Criptana',
    'energía solar Pedro Muñoz',
    'instalación fotovoltaica Ciudad Real',
  ],
  authors: [{ name: 'José Ángel Martín' }],
  openGraph: {
    title: 'Licencias de Actividad en Pedro Muñoz — José Ángel Martín',
    description: 'Tramitación integral de licencias de actividad en Pedro Muñoz y comarca (Ciudad Real). Ingeniero industrial colegiado.',
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#EDEAE3',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'José Ángel Martín — Ingeniero Industrial',
  description:
    'Ingeniero industrial colegiado especializado en licencias de actividad en Pedro Muñoz y comarca (Ciudad Real, Castilla-La Mancha). También: energía solar, baja tensión, puntos de recarga VE.',
  url: SITE_URL,
  telephone: `+${PHONE_RAW}`,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pedro Muñoz',
    addressRegion: 'Castilla-La Mancha',
    postalCode: '13620',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '39.4167',
    longitude: '-2.9500',
  },
  areaServed: [
    'Pedro Muñoz',
    'Alcázar de San Juan',
    'Campo de Criptana',
    'Tomelloso',
    'Socuéllamos',
    'Argamasilla de Alba',
    'Herencia',
    'Mota del Cuervo',
    'Ciudad Real',
  ],
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de ingeniería industrial',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Licencias de actividad y apertura' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Declaración responsable de apertura' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Instalaciones solares fotovoltaicas' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Proyectos de baja tensión' },
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${ibmPlexMono.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
