import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TeakMirror113',
  description: 'Ansh Sonkusare AKA TeakMirror113',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-white`}> 
      {/* <Navbar/>  */}
      {children}</body>

    </html>
  )
}