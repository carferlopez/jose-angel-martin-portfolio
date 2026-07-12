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
  title: 'Ingeniería y Consultoría de Compras — Pepe Martín Ramírez',
  description:
    'Pepe Martín Ramírez, Ingeniero Técnico Eléctrico y Consultor de Compras. Licencias de actividad, proyectos eléctricos, eficiencia energética y optimización de compras en Pedro Muñoz, La Mancha y toda España.',
  keywords: [
    'licencia de actividad Pedro Muñoz',
    'licencia de apertura Ciudad Real',
    'ingeniero técnico eléctrico',
    'consultoría de compras',
    'optimización de compras',
    'reducción de costes compras',
    'sourcing de proveedores',
    'interim management compras',
    'licencia apertura La Mancha',
    'instalación fotovoltaica Pedro Muñoz',
    'puntos de recarga vehículo eléctrico',
  ],
  authors: [{ name: 'Pepe Martín Ramírez' }],
  openGraph: {
    title: 'Ingeniería y Consultoría de Compras — Pepe Martín Ramírez',
    description: 'Pepe Martín Ramírez, Ingeniero Técnico Eléctrico y Consultor de Compras. Licencias de actividad, proyectos de instalaciones y dirección de compras.',
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Pepe Martín Ramírez — Záncara Ohm',
  description:
    'Pepe Martín Ramírez, Ingeniero Técnico Eléctrico y Consultor de Compras con base en Pedro Muñoz (Ciudad Real). Licencias de actividad, proyectos eléctricos, autoconsumo fotovoltaico y optimización de departamentos de compras.',
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
    latitude: '39.4011',
    longitude: '-2.9519',
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
    'Castilla-La Mancha',
    'España',
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
    name: 'Servicios de Ingeniería y Consultoría de Compras',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Licencias de actividad y apertura' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Proyectos eléctricos de baja tensión y fotovoltaica' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Consultoría y optimización de departamentos de compras' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Dirección de compras externa (Interim Management)' },
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
