import React from 'react'
import styles from '../styles/Earthing.module.css'
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Head from 'next/head';

const Earthing = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to QATS</title>
        <meta name="description" content="Technical Services Site" />
      </Head>
      <div className={styles.items}>
    <Image src='/img/1.jpg' alt='' className={styles.img} width={1600} height={460} objectFit='fill' />
    <h1 className={styles.title}>Earthing & Lightening Protection System</h1>
    </div>
    <div className={styles.items2}>
      <div className={styles.item1}>
      <Image src='/img/2.jpg' alt='' width={700} height={300} objectFit='contain' />
      <p className={styles.paragraph1}><b>Key Services we are offering in Earthing & lightening Protection Systems.</b> </p>
      <p className={styles.header}>Earthing System Installation, Testing & Commissioning.<br />
                      Lightening Protection System Installation, Testing & Commissioning.<br />
                  Testing & Commissioning of Existance E & LPS (Quartly,Semi Anually and Anually).<br />
                  Maintainance of Existance E & LPS (Quartly,Semi Anually and Anually).</p>
      <p className={styles.paragraph}>
        <b>Why Earthing System is most Important in any structure??</b><br /><br />

Earthing system is the safety valve of any electrical system that provides low resistance path for fault dissipation. It keeps the voltage at low levels during fault conditions to save valuable life and high value assets. This study identifies the irregularities of the present earthing system in an industry and provide executable solutions to overcome the earthing related issues. This will enable the industry O&M to achieve required plant safety and reliability.<br /><br />
<b>Reference Standards: We are following the following standards for Earthing & LPS Installations.</b><br /><br />

Earthing: BS 7430, LPS: 62305.<br /><br />
BS 7671:2008+A3:2015: Requirements for Electrical installation. Performance requirements for earthing these low voltage installations are defined in the IET (institution of engineering and technology) wiring regulations.<br /><br />
BS EN 62305-3:2011: Protection against lightning. Physical damage to structures and life hazard.<br /><br />
BS EN 62305-4:2011: Protection against lightning. Electrical and electronic systems.<br /><br />
DEWA: Regulations for electrical installations – 2017 Edition.<br /><br />

<b>Losses due to improper Earthing.</b><br /><br />

1.Loss of life, livestock & assets due to shock or stress.<br />
2.Sparking or flash in un-connected components due to uneven voltage distribution.<br />
3.Burning of electronic cards due to high fault current.<br />
4.Failure or delayed operation of protection systems.<br />
5.Increases equipment ageing and reduces performance.<br /><br />

<b>Solutions We Provide</b><br /><br />

1.Health Assessment of earthing system and its integrity.<br />
2.Survey, Design, Install, Test & Commission appropriate earthing system as personal & international standards.<br />
3.Improve operation of protection system during fault conditions.<br />
4.Assess and rejuvenate old earthing system.<br /><br />

<b>Why Lightening protection System is most Important in any structure??</b><br /><br />

Lightning is an electrostatic discharge between cloud to cloud and cloud to ground during a thunder storm. Lightning Protection System (LPS) channels high energy through defined path and dissipate it instantaneously. This study helps to identify weakness in the present channel system and help the industry to implement corrections and achieve required safety during lightning strikes.<br /><br />

<b>Losses due to Improper Lightning Protection System</b><br /><br />

1. Loss of life, livestock & assets due to shock or stress.<br />

2. Fire hazard.<br />

3. Insulation breakdown.<br />

4. Loss of electronic equipment’s.<br />

5. Loss of inflammable & explosive assets.<br /><br />

<b>Solutions We Provide</b><br /><br />

1.Health Assessment of Lightning Protection System & its integrity with the earthing system.<br />
2.Risk analysis of direct & indirect lightning strikes.<br />
3.Design, Installation, Testing & commission appropriate.<br />
4.Lightning Protection System as per national & international standards.<br />
5.Study and incorporate appropriate protection system in data, telecom and power circuits.<br /><br />

Our company policy focuses on the point of customer satisfaction by providing timely services and understanding the needs of their businesses. In this competitive market, we ensure to keep our customers business up & running by managing their land transport within UAE and across GCC countries. Our aim is to provide timely delivery while keeping the highest standards of QHSE for our team & clients. 
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
          <Typography gutterBottom variant="h6" component="div" style={{color:'#d1411e'}} className={styles.message}>
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
    Ensuring the highest quality of services, increasing technical and technological efficiency and boosting the workload in QAMAR ASEEL TECHNICAL SERVICES LLC and partner companies.<br /><br /><b>Our Main Services are</b>:<br /><br />


Providing high quality Earthing & LPS installation & maintainance services to all of our clients.<br />
Invest in our employees to provide better service and company growth.<br /><br />
Worry about environment according to latest industry standards.<br />
Safety as top priority in assuring safe work procedures.<br />
Investing in technology to provide fast, accurate and cost-effective service.<br />
Living up to highest industry standards.
 </p>   
        <p className={styles.services}>
        <p className={styles.Headingservices}>Our Key Services:</p>
        <p className={styles.service}>Earthing System.</p>
        <p className={styles.service}>Lightening Protection System.</p>
        <p className={styles.service}>Maintainance of Earthing & LPS.</p>
        <p className={styles.service}>Earthing & LPS Materials Supply.</p>
        </p>
        </div>
        </div>
 )
}
export default Earthing
