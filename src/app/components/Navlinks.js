import styles from "@/app/styles/navlinks.module.css"
import Link from "next/link"
const Navlinks = () => {
  return (
    <nav className={styles.Navlinks}>
      <ul className={styles.ul}>
        <li className={styles.li}>
            <div className={styles.dropdown}>
             <button className={styles.dropbtn}>Product</button>
             <div className={styles.dropdowncontent}>
            <Link href="/product" className={styles.a}>List 1</Link>
            <Link href="/product" className={styles.a}>List 2</Link>
            <Link href="/product" className={styles.a}>List 3</Link>
            </div>
            </div>
        </li>
        <li className={styles.li}>
            <Link href="/discover" className={styles.a}>
                Discover
            </Link>
        </li>
        <li className={styles.li}>
            <Link href="/about" className={styles.a}>
                About Us
            </Link>
        </li>
        <li className={styles.li}>
            <Link href="/pricing" className={styles.a}>
                Pricing
            </Link>
        </li>
        <div className={styles.login}>
            <ul ><li className={styles.li}>
            <Link href="/login" className={styles.a}>
                Sign In
            </Link>
        </li>
        <li className={styles.li}>
            <button className={styles.button}>Sign Up</button>
        </li>
        </ul>
        </div>
      </ul>
    </nav>
  )
}

export default Navlinks
