import Image from 'next/image'
import styles from './page.module.css'
import image from "../../public/shradhass.png"

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.mainContainerItemOne}>
          <div className={styles.mainContainerItemOneHeader}>
            <h1>Shradha.</h1>
          </div>
          <div className={styles.mainContainerItemOneHolder}>
            <div className={styles.mainContainerItemOneHolderItem}>
              <p className={styles.mainContainerItemOneHolderItemText}>Developer</p>
              <Image src={image} quality={100} alt='shradha' style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>

            <div className={styles.mainContainerItemOneHolderItemDesign1}>

              <p className={styles.mainContainerItemOneHolderItemDesign1Text}>ui/ux</p>
              <p className={styles.mainContainerItemOneHolderItemDesign1Text}>Google Cloud expert</p>
              <p className={styles.mainContainerItemOneHolderItemDesign1Text}>GDSC UI/UX Lead</p>
            </div>


          </div>

        </div>
        <div className={styles.mainContainerItemTwo}>
          <div className={styles.mainContainerItemTwoHolder}>
            <div className={styles.mainContainerItemTwoHolderDesign1}>
            </div>
            <div className={styles.mainContainerItemTwoHolderDesign2}>
            </div>
            <div className={styles.mainContainerItemTwoHolderBg}>
            </div>



            {/* content */}
            <div className={styles.mainContainerItemTwoHolderContent}>
              <h3>Hello I{"'"}M</h3>
              <h2>Shradha Gurjar</h2>
              <p>A passionate developer and a devoted open source contributor. As the GDSC UI/UX team lead, I am honored to serve and guide my team towards creating remarkable user experiences.

                One of my greatest joys in life is sharing my knowledge and experience with others. It brings me immense satisfaction to see others grow and succeed, and I believe that knowledge is best when shared.</p>
            </div>

            <div className={styles.mainContainerItemTwoHolderContentButton}>
              <a href='https://github.com/shradhagurjar27' target='_blank' ><button className={styles.button1}>github</button></a>
              <a href='https://www.linkedin.com/in/shradha-gurjar-976b05247/' target='_blank'><button className={styles.button2}>LinkedIn</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
