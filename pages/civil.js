import React from 'react'
import styles from '../styles/Civil.module.css'
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Head from 'next/head';

const Civil = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to QATS</title>
        <meta name="description" content="Technical Services Site" />
      </Head>
      <div className={styles.items}>
    <Image src='/img/bg-civil.jpg' alt='' width={1600} height={460} objectFit='fill' className={styles.bgImg}/>
    <h1 className={styles.title}>Civil & MEP Contracting</h1>
    </div>
    <div className={styles.items2}>
      <div className={styles.item1}>
      <Image src='/img/Civil1.jpg' alt='' width={845} height={380} objectFit='contain' />
      <p className={styles.paragraph1}><b>Construction & General Contracting </b> </p>
      <h2 className={styles.header}>QAMAR ASEEL TECHNICAL SERVICES LLC</h2>
      <p className={styles.paragraph}> To become a prominent diversified business group by working closely with our client to understand their needs with an aim to provide practical services, products and solutions that are qualitative, valuable & cost effective, through talented individuals, we are rising as one of the leading Construction company in Dubai.

Our commitment towards our service is reflected in our impressive client portfolio which includes Corporate, Commercial, Retail, Government, Healthcare, Hospitality, Educational and Residential sectors. Our sustainability strategy remains squarely focused on the innovation, service and results we provide our customers. Our approach is to take a holistic view of the environmental, economic and social impact of our offerings. We consider how each solution increases efficiency, minimizes use of natural resources and improves safety.  
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

1) General contracting.<br />

 Civil Contracting (“Designing and planning of all Civil works”).<br />

 MEP Contracting (“Designing and planning of all Mechenical and Electrical works”).<br />

 Earthing & Lightening Protection system Installation, Testing , Commissioning & Maintainance.<br />

2) Building Maintenance Services (“All interior designing and maintenance.”).<br />

3) Solar Panels installation.<br />

4) Substation installation and commissioning.<br />

5) Steel fabrication/ machine shop.<br />

6) Networking and telecommunication.<br />

7) Glass & Aluminum installation of Buildings and Villas. 
 </p>   
        <p className={styles.services}>
        <p className={styles.Headingservices}>Our Key Services:</p>
        <p className={styles.service}>Civil Contracting.</p>
        <p className={styles.service}>Electrical Contracting.</p>
        <p className={styles.service}>Mechenical & Plumbing Contracting.</p>
        <p className={styles.service}>Building Maintainance Services.</p>
        <p className={styles.service}>Solar panels Installation and Maintainance.</p>
        <p className={styles.service}>Earthing & LPS.</p>
        <p className={styles.service}>Oil & Gas.</p>
        </p>
        </div>
        </div>
 )
}

export default Civil