import React from 'react'
import styles from '../styles/Solar.module.css'
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Head from 'next/head';

const Solar = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to QATS</title>
        <meta name="description" content="Technical Services Site" />
      </Head>
      <div className={styles.items}>
    <Image src='/img/Solar-bg.jpg' alt='' width={1600} height={460} objectFit='cover' className={styles.bgImg}/>
    <h1 className={styles.title}>Solar PV System Installation  </h1>
    </div>
    <div className={styles.items2}>
      <div className={styles.item1}>
      <Image src='/img/Solar1.jpg' alt='' width={845} height={380} objectFit='contain' />
      <p className={styles.paragraph1}><b>Solar PV Systems Installation, Testing & Commissioning </b> </p>
      <h2 className={styles.header}>QAMAR ASEEL TECHNICAL SERVICES LLC</h2>
      <p className={styles.paragraph}> The Solar PV initiative is one of the three Smart Dubai initiatives to be implemented by DEWA. Dewa encourages house holds & business to install PV solar Panels connected to grid.

DEWA’s Shams Dubai is part of the Distributed Renewable Resources Generation (DRRG) program, an initiative to encourage household and building owners to install PV panels to generate electricity, and connect them to DEWA’s grid solar program. DEWA will only accept solar PV connection applications made through one of the companies on the DEWA Approved Solar Contractors list , this is in order to ensure they comply with high standards of quality and safety and have only qualified professionals engaged in Solar PV related activities. Based on current installed capacity of rooftop projects in Dubai, QAMAR ASEEL TECHNICAL SERVICES LLC is among the most active solar contractors on the DEWA Approved Solar Contractors list.

After initially focusing on installation, QATS has developed its capabilities to become a leading Solar EPC contractor in the UAE. QATS's experience and unique capabilities allow us to take on challenging solar power projects from the initial stages of design and conception, to installation and maintenance service phase As an EPC contractor, QATS has executed many EPC solar projects with prestigious clients such as Expo 2020 Indonesia Pavilion, MBRHE 5000 Villas solar project, Singapore Pavilion etc. The projects executed by QATS are both Off Grid & On-grid Solar Power Systems connected to the Dewa grid in Dubai.

A part from installation, QATS have developed its department for periodic inspection & maintenance of Solar PV plants / system to ensure that the PV System installed is working efficiently without any losses. 
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
    Benefits of solar PV Technology for Consumers:<br /><br />

 Reduce Electricity Bills. It Requires an initial investment, and system will pay back the installment in approx. 3-4 years.<br /><br />

 Increase in value of Property.<br /><br />

 Reduce carbon footprints.<br /><br />

 Ensure sustainable future for the planet.
 </p>   
        <p className={styles.services}>
        <p className={styles.Headingservices}>Our Key Services:</p>
        <p className={styles.service}>Customer Management.</p>
        <p className={styles.service}>Design & Analytics.</p>
        <p className={styles.service}>Operations.</p>
        <p className={styles.service}>Solar PV System Maintenance & Servicing.</p>
        </p>
        </div>
        </div>
 )
}

export default Solar