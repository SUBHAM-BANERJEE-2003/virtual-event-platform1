import React from 'react'
import styles from "@/app/styles/navbar.module.css"
import Navlinks from "@/app/components/Navlinks"
import Link from 'next/link'
import Image from 'next/image'
const header = () => {
  return (
    <header className={styles.headcontainer}>
          <Link href="/">
            <Image src={"/MEETINGS.png"} alt={"mylogo"} width={150} height={90}/>
          </Link>
          <Navlinks/>
    </header>
  )
}

export default header
