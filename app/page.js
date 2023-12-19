// import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"

import { SiHomebridge } from "react-icons/si";
export default function Home() {
  return (
    <main className={styles.main}>
      {/* top */}
     <Link href="/dashbboard">
     <div className={styles.top}>
        <h1>Dash <span>/</span></h1>
      </div>
     </Link>
      

      {/* center  */}
      <div className={styles.center}>
        <div className={styles.icon}>
          <SiHomebridge />
          <h1>Dashboard </h1>
          <div>&gt;</div>
        </div>

        proceed + login btns
        </div>

      footer = github + made by

    </main>
  )
}
