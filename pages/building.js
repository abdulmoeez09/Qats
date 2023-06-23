import React from 'react'
import styles from '../styles/Building.module.css'
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Head from 'next/head'

const Building = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to QATS</title>
        <meta name="description" content="Technical Services Site" />
      </Head>
      <div className={styles.items}>
    <Image src='/img/Building-bg.png' alt='' width={1600} height={460} objectFit='cover' className={styles.bgImg}/>
    <h1 className={styles.title}>Building Maintainance Services </h1>
    </div>
    <div className={styles.items2}>
      <div className={styles.item1}>
      <Image src='/img/Building1.jpg' alt='' width={845} height={380} objectFit='contain' />
      <p className={styles.paragraph}><b>Building Maintainance</b> </p>
      <h2 className={styles.header}>QAMAR ASEEL TECHNICAL SERVICES LLC</h2>
      <p className={styles.paragraph1}>  Building maintenance if neglected will lead to decay and degrade having harmful effects and threaten safety of both occupants and building finish. It is very important for property owners to plan for periodic programmers of daily, weekly, monthly, half yearly and annual inspections; and same plan should be revised and updated after each inspection. It is impossible to produce buildings which are maintenance-free, but maintenance work can be minimized by good design and proper workmanship carried out by skilled experts or competent craftsmen using suitable codes of installation, requisite building materials and methods.

The service we offer is designed to suit your needs, be it a permanent on-site presence, a mobile maintenance service or a combination of both. It can cover planned preventative maintenance as well as responsive emergency cover. Our Help Desk is operational 24 hours a day, 365 days a year, providing technical & responsive support. We have developed a specialist team in predictive maintenance and risk management techniques aimed at providing alternative strategies for customers in the management of their assets. 
   </p>
   </div>
   <div className={styles.item2}>
        <Card sx={{ maxWidth:345 }}>
      <CardActionArea className={styles.actionarea}>
        <CardMedia
          component="img"
          height="200"
          image="/img/Boss.jpg"
          alt=""
          className={styles.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{color:'#d1411e'}} className={styles.message}>
          Director's Message
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:'Darkgray'}} className={styles.drmessage}>
          Since its foundation in 2014, QAMAR ASEEL TECHNICAL SERVICES has always maintained a policy of expansion and development in times of rapid economic growth. Thanks to the resilience of its forward looking vision and a robust adaptation to an ever changing economic environment, QAMAR ASEEL TECHNICAL SERVICES has maintained stable growth and is in a condition of strength with which to enter a new era of expansion. We have great faith in the future of the UAE and we look forward to participating in its continuing success.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
 </div>
    <div className={styles.items3}>
      
    <p className={styles.note}>
We offer a wide range of services such as:<br /><br />

1) AC Repairing & Maintainance. <br /><br />
2) Earthing & LPS Testing and Maintainance.<br /><br />
3) Plumbing Maintainance Works .<br /><br />
4) Civil Maintainance Works.<br /><br />
5) Solar PV System Maintainance Works.
 </p>   
        <p className={styles.services}>
        <p className={styles.Headingservices}>Our Key Services:</p>
        <p className={styles.service}>AC Repairing & Maintainance Works.</p>
        <p className={styles.service}>Earthing & LPS Testing and Maintainance Works.</p>
        <p className={styles.service}>Electrical Repairs & Maintainance Works.</p>
        <p className={styles.service}>Plumbing Maintainance Works.</p>
        <p className={styles.service}>Tiles, Paint, Block & Plaster Maintainance Works.</p>
        </p>
        </div>
        </div>
 )
}

export default Building