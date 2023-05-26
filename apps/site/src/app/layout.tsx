import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import './globals.css'
import { Alata, Poppins } from 'next/font/google'
import Script from 'next/script'

import { env } from '../config/env'
import { siteConfig } from '../config/site'

const { description, themeColor, applicationName, canonicalUrl } = siteConfig

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  description,
  themeColor,
  applicationName,
  metadataBase: new URL(canonicalUrl),
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
  variable: '--font-poppins',
})
const alata = Alata({
  subsets: ['latin'],
  variable: '--font-alata',
  weight: ['400'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${poppins.variable} ${alata.variable}`}>
      <head>
        <meta name="msapplication-TileColor" content="#393D47" />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${env.NEXT_PUBLIC_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </head>
      <body>
        <main className="bg-gray200">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
