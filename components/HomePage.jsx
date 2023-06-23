import React from 'react'
import styles from '../styles/HomePage.module.css'
import {Cards} from '../components/Cards'
import { Grid } from '@mui/material'
import Marquee from './Marquee'
import ProjectCounters from './ProjectCounters'

export const HomePage = () => {
  return (
    <div className={styles.container}>
       <div className={styles.item}>
        <Grid item xs={12} sm={6} md={4}>
        <Cards />  
        </Grid>
       </div>
       <div className={styles.item}>
        <ProjectCounters />
       </div>
       <div className={styles.item}>
        <Marquee />
       </div>
      
   </div>
  )
}
