import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import image from "../../public/shradha.png"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.mainOne}>
<div className={styles.mainOneImage}><Image src={image} fill alt='shradha' /></div>
      </div>
      <div className={styles.mainTwo}>

      </div>
    </div>
  )
}
