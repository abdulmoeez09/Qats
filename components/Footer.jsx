import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelopeOpen,faHome} from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
            <Image src='img/logo.jpeg' alt='' width={150} height={150} className={styles.img}/>
          </div>
          <div className={styles.item}>
          <div className={styles.card}>
            <h3 className={styles.motto}>
            QAMAR ASEEL TECHNICAL SERVICES LLC
            </h3>
            <p className={styles.text}>
            QAMAR ASEEL TECHNICAL SERVICES LLC was incorporated with the vision to contribute professional Services
            to the ever-expanding market in the Middle East. 
            <br /><br />
            Copyright © 2022 All rights reserved <b>QAMAR ASEEL TECHNICAL SERVICES LLC</b>
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.fontIconContainer}>
              <div className={styles.fontItems}> <FontAwesomeIcon icon={faPhone} className={styles.Icon}/>
              <span className={styles.phone}>+971 58 587 0067</span>
              </div>
              <div className={styles.fontItems}><FontAwesomeIcon icon={faEnvelopeOpen} className={styles.Icon}/>
              <span className={styles.email}> enquiry@qats.ae</span>
              </div>
              <div className={styles.fontItems}><FontAwesomeIcon icon={faHome} className={styles.Icon}/>
              <span className={styles.address}>Ahmed Akber Building ,Nadd Al Hamar-Dubai,UAE</span>
              </div>
           </div>
         
        </div>
        </div>
        </div>
           )
}

