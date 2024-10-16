import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header/Header'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({  children,}: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}






      </body>

    </html>
  )
}
