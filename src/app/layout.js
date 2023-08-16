import './globals.css'
import { Tektur } from 'next/font/google'
import Header from "@/app/components/Header"
import Head from 'next/head'
import Link from 'next/link'
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";
config.autoAddCss=false;
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
    <>
    <Head>
      <Link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    </Head>
    <html lang="en" className={tektur.className}>
      <body>
        <Header/>
        {children} 
        </body>
    </html>
    </>
  )
}