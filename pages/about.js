import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import Head from 'next/head'

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to QATS</title>
        <meta name="description" content="Technical Services Site" />
      </Head>
      <div className={styles.item}> 
      <Image src='/img/about.jpeg'  alt='' width={1600} height={460} objectFit='fill' className={styles.img}  />
       <h1 className={styles.heading}>ABOUT US</h1>
      </div>
      <div className={styles.items}>
      <h1 className={styles.title}>QAMAR ASEEL TECHNICAL SERVICES</h1>
      <p className={styles.text}><b className={styles.bold}>QAMAR ASEEL TECHNICAL SERVICES</b>  is a professional Civil and turnkey MEP Contracting Company in Dubai offering services include Mechanical, Electrical, Plumbing, Fire Fighting, Solar System Installation, Earthing-Lightning protection and Specialized Systems to all over United Arab Emirates. Since 2014, QATS has been serving the MEP needs of the industry in UAE. Whether state of the art supply & installation or process of execution, our services resonate with perfection in every aspect. Our company focuses on offering tailor made services that help you achieve your premeditated goals without delay. Our Services are a perfect blend of cost-effectiveness, top-notch quality that’s in par with industry standards and time bound MEP Engineering that is perfectly matched with our state of art infrastructures. Our Project Management team is proficiently managed by trained, experienced and skilled Project Manager who assume sole responsibility for satisfactorily completion of the project. We believe in working closely with our clients to make sure every detail of the project is taken care of. Our Goal is customer satisfaction. Our services are result oriented and process driven. We strive constantly to upgrade our technology to be in par with modern developments and provide our clients with best solutions. Our long-term business association with our clients is a result of our customer friendly MEP Services combined with efficient project management and wide range of options with flexibility.</p>
    </div>
    </div>
  )
}

export default About