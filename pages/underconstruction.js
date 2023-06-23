import React from 'react'
import styles from '../styles/UnderConstruction.module.css'
import Image from 'next/image'
import Head from 'next/head'

const UnderConstruction = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to QATS</title>
        <meta name="description" content="Technical Services Site" />
      </Head>
      <section><div className={styles.featured}>
    <Image src='/img/Under-bg.jpg' alt='' width={1600} height={460} objectFit='cover' className={styles.bgImg}/>
    <h1 className={styles.title}>Under Construction Projects </h1>
    </div></section>
    <section>
      <div>
        <h1 className={styles.heading}>Ongoing Projects</h1>
   <p className={styles.paragraph}>Who are in extremely love with eco friendly system.</p>
    </div>
    </section>
    <section>
    <div className={styles.items}>
      <div className={styles.item1}>
      <Image src='/img/UC1.jpeg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Midfield Terminal Building</h2>
      <p className={styles.paragraph1}>Testing & Commissioning of Lightning Protection System </p>
      <br /><br />
      <Image src='/img/UC3.jpeg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}> Deira Water Front Development</h2>
      <p className={styles.paragraph1}>Testing & Commissioning of Lightning Protection System </p>
      <br /><br />
      <Image src='/img/UC5.jpeg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}> Global Village</h2>
      <p className={styles.paragraph1}>Installation , Testing & Commissioning of Lightning Protection System </p>
      <br /><br />
      </div>
      <div className={styles.item2}>
      <Image src='/img/UC2.jpeg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Victoria International School Khorfakkan</h2>
      <p className={styles.paragraph1}>Installation of Lightning Protection System </p>
      <br /><br />
      <Image src='/img/UC4.jpeg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Bab Al Shams Resort</h2>
      <p className={styles.paragraph1}>Earthing System Installation, Testing & Commissioning</p>
      <br /><br />
      <Image src='/img/EP12.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Rawadat Abu Dhabi</h2>
      <p className={styles.paragraph1}>Electrical work- Cable Pulling and Maintainance works of Earthing & LPS</p>
      <br /><br />
      </div>
      </div>
    </section>
   
    </div>
  )
}

export default UnderConstruction