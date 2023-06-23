import React from 'react'
import styles from '../styles/HomePage.module.css'

const ProjectCounters = () => {
  return (
    <div className={styles.projectcounter}>
<div className={styles.row}>
  <div className={styles.column}>
    <div className={styles.card}>
     
      <h3 className={styles.head}>100+</h3>
      <p className={styles.para}>Projects Completed</p>
    </div>
  </div>

  <div className={styles.column}>
    <div className={styles.card}>
     
      <h3 className={styles.head}>20+</h3>
      <p className={styles.para}>On Going Projects</p>
    </div>
  </div>
  
  <div className={styles.column}>
    <div className={styles.card}>
      <h3 className={styles.head}>150+</h3>
      <p className={styles.para}>Happy Clients</p>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default ProjectCounters