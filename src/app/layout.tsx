import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const oriya = localFont({
  src: [
    {
      path: '../assets/fonts/oriya-mn.ttf',
      style: 'normal',
    }
  ],
  variable: '--font-oriya',
})

export const metadata: Metadata = {
  title: 'Andres Molina',
  description: 'A personal website for Andres Molina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oriya.variable}>
        {children}
        </body>
    </html>
  )
}
