import React from 'react'
import styles from '../styles/Executed.module.css'
import Image from 'next/image'
import Head from 'next/head'

const Executed = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to QATS</title>
        <meta name="description" content="Technical Services Site" />
      </Head>
      <section><div className={styles.featured}>
    <Image src='/img/Under-bg.jpg' alt='' width={1600} height={460} objectFit='cover' className={styles.bgImg}/>
    <h1 className={styles.title}>Executed Projects </h1>
    </div></section>
    <section>
      <div>
        <h1 className={styles.heading}>Latest Finished Projects</h1>
   <p className={styles.paragraph}>Who are in extremely love with eco friendly system.</p>
    </div>
    </section>
    <section>
    <div className={styles.items}>
      <div className={styles.item1}>
      <Image src='/img/EP1.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Villas, Yas Island</h2>
      <p className={styles.paragraph1}>Interior Decoration & MEP </p>
      <br /><br />
      <Image src='/img/EP2.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>DAMAC tower by Paramount Hotel</h2>
      <p className={styles.paragraph1}>Finishing work</p>
      <br /><br />
      <Image src='/img/EP3.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Khalifa University</h2>
      <p className={styles.paragraph1}>Civil , E & L , Testing & Commessioning and MEP Works </p>
      <br /><br />
      <Image src='/img/EP4.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>DIFC</h2>
      <p className={styles.paragraph1}>Electrical work-Cable Pulling & Maintainance works of Earthing&LPS</p>
      <br /><br />
      <Image src='/img/EP9.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Electrical Cable pulling Works Route 2020 Works </h2>
      <p className={styles.paragraph1}>Cable Trays and Cable Pulling over Via Ducts Electrical Cable pulling Works. </p>
      <br /><br />
      <Image src='/img/EP10.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>NHT Metro Stattion Car Park E & LPS Works </h2>
      <p className={styles.paragraph1}>Earthing & Lightening Protection System Designing,<br />Installation, Testing & Commissiong.</p>
      <br /><br />
      <Image src='/img/EP11.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Royal Pearl Residance</h2>
      <p className={styles.paragraph1}>Earthing & Lightening Protection System Installation, <br />Testing & Commessioning works and MEP Works </p>
      <br /><br />
      <Image src='/img/EP12.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Rawadat Abu Dhabi</h2>
      <p className={styles.paragraph1}>Electrical work- Cable Pulling and Maintainance works of Earthing & LPS</p>
      <br /><br />
      </div>
      <div className={styles.item2}>
      <Image src='/img/EP5.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Shams Meera Residentioa Tower, Alreem Island</h2>
      <p className={styles.paragraph1}>Civil & Electrical Works in 2 x G+27 Towers</p>
      <br /><br />
      <Image src='/img/EP6.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Sheikh Khalifa Central Hospital</h2>
      <p className={styles.paragraph1}>E & L ,Testing & Commissioning , Interior decoration and Electrical Works</p>
      <br /><br />
      <Image src='/img/EP7.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>DP world Warehouse</h2>
      <p className={styles.paragraph1}>E & L, Testing & Commissioning works of 4 x Sport Sheds</p>
      <br /><br />
      <Image src='/img/EP8.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Deira Waterfront</h2>
      <p className={styles.paragraph1}>MEP work</p>
      <br /><br />
      <Image src='/img/EP13.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Museum of Future</h2>
      <p className={styles.paragraph1}>Drainage Works and Earthing & LPS Works. </p>
      <br /><br />
      <Image src='/img/EP14.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Expo 2020</h2>
      <p className={styles.paragraph1}>Electrical work- Cable Pulling and Maintainance works of <br />Earthing & LPS Expo Village with Arabia Contracting. </p>
      <br /><br />
      <Image src='/img/EP15.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Al Taef Star</h2>
      <p className={styles.paragraph1}>Al Taef Star Transport By Heavy Trucks Ware House<br /> Construction of Al Taef Star Yard DIC</p>
      <br /><br />
      <Image src='/img/EP16.jpg' alt='' width={420} height={300} objectFit='contain' />
      <h2 className={styles.heading1}>Al Futtaim Automotive Showrooms DIP</h2>
      <p className={styles.paragraph1}>Earthing&Lightening Protection System Installation, Testing & Commissioning<br /> works Electrical works HVAC Installation Works Plumbing Works </p>
      <br /><br />
      </div>
      </div>
    </section>
   
    </div>
  )
}

export default Executed