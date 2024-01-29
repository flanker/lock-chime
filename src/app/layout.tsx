import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LockChime',
  description: 'The place you can find your lock chime',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
