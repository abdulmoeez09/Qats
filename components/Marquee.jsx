import React from 'react'
import Image from 'next/image'
import styles from '../styles/HomePage.module.css'
const Marquee = () => {
  return (
    <div className={styles.marquee}>
    <h1 className={styles.heading}>Our Valued Clients</h1>
    <br />
  <ul className={styles.marqueecontent}>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/017.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/002.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/003.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/004.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/005.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/006.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/007.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/008.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/009.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/010.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/011.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/012.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/013.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/014.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/015.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/016.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/001.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/018.jpg" width="120" height="80" alt="Natural" /></li>
<li className={styles.marqueeitem}><Image className={styles.image} src="/img/019.jpg" width="120" height="80" alt="Natural" /></li>

</ul>
  </div>
  )
}

export default Marquee