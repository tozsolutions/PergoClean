import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'PergoClean - Pergola RollingRoof Profesyonel Temizlik',
    template: '%s | PergoClean',
  },
  description:
    'Pergola RollingRoof BioClimatic CamTavan ZipPerde Tente profesyonel temizlik hizmeti. %85-90 oranında ilk günkü temizliğine kavuşturuyoruz. Minimum maliyet, maksimum sonuç.',
  keywords: [
    'pergola temizliği ankara',
    'zip perde temizliği ankara',
    'cam tavan temizliği ankara',
    'bioclimatic pergola temizliği',
    'rolling roof temizliği',
    'tente temizliği ankara',
    'pergola led değişimi',
    'pergola kumaş temizliği',
  ],
  authors: [{ name: 'PergoClean' }],
  creator: 'PergoClean',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteConfig.url,
    title: 'PergoClean - Pergola RollingRoof Profesyonel Temizlik',
    description:
      'Pergola RollingRoof BioClimatic CamTavan ZipPerde Tente profesyonel temizlik hizmeti. %85-90 oranında ilk günkü temizliğine kavuşturuyoruz.',
    siteName: 'PergoClean',
    images: [
      {
        url: '/assets/images/hero/pergola-hero.svg',
        width: 1200,
        height: 630,
        alt: 'PergoClean - Pergola Temizlik Hizmeti',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PergoClean - Pergola RollingRoof Profesyonel Temizlik',
    description:
      'Pergola RollingRoof BioClimatic CamTavan ZipPerde Tente profesyonel temizlik hizmeti.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  metadataBase: new URL(siteConfig.url),
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Timko İş Merkezi, Macun Mahallesi 177. Cadde V8 Kat 1',
    addressLocality: 'Yenimahalle',
    addressRegion: 'Ankara',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '39.9334',
    longitude: '32.8597',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: siteConfig.openingHours.days,
    opens: siteConfig.openingHours.opens,
    closes: siteConfig.openingHours.closes,
  },
  sameAs: [
    siteConfig.links.instagram,
    siteConfig.links.tiktok,
    siteConfig.links.youtube,
    siteConfig.links.pinterest,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PTZDW59FXV"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PTZDW59FXV', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
