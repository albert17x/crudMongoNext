import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mongo-Student-Agenda',
  description: 'Generated by create Vercel-Albert',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=' h-screen'>
          {/* componente NavBar */}
          <NavBar />

          {/* page.js pagina principal */}
          <div className=' mx-auto p-1'>
            {children}
          </div>
        </div>

      </body>
    </html>
  )
}
