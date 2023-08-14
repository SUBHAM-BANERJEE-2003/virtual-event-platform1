import './globals.css'
import { Tektur } from 'next/font/google'
import Header from "@/app/components/Header"

const tektur = Tektur({
  weight :'400',
  subsets : ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Meetings',
  description: 'Meetings',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={tektur.className}>
      <body>
        <Header/>
        {children} 
        </body>
    </html>
  )
}