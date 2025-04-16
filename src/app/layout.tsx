import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '../app/components/Navbar/page'
import Footer from '@/app/components/Footer/page'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'MSP',
  description: 'Generated by MSP'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
