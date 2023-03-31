import Image from 'next/image'
import styles from './page.module.css'
import image from "../../public/shradha.png"

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
              <p className={styles.mainContainerItemOneHolderItemDesign1Text}>Web 3</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, eius voluptatibus! Architecto sed voluptate esse tenetur cum itaque vero reprehenderit deleniti, dolores cupiditate harum non accusamus? Necessitatibus beatae earum aliquid?</p>
            </div>

            <div className={styles.mainContainerItemTwoHolderContentButton}>
              <button className={styles.button1}>github</button>
              <button className={styles.button2}>LinkedIn</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
