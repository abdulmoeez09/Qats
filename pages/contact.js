import React, {useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelopeOpen,faHome} from '@fortawesome/free-solid-svg-icons'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextAreaAutosize'
import { Button } from '@mui/material'
import MapContainer from '../components/MapContainer'
import Head from 'next/head'
import emailjs from 'emailjs-com'


const Contact = () => {

  const [isEmailSent, setIsEmailSent] = useState(false);
  function sendEmail (e){
  // e.preventDefault();
   emailjs.sendForm('service_s1p7eio','template_531d3tw',e.target,'hSQrYHjQpqtCUHum8').then(res=>{
    console.log(res)
    setIsEmailSent(true);
    alert('Email Sent')
   }).catch(err=>{
    console.log(err)
   })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to QATS</title>
        <meta name="description" content="Technical Services Site" />
      </Head>
      <div className={styles.header}>
      <Image src='/img/contact-us.png'  alt='' width={1600} height={460} objectFit='fill' className={styles.img}  />
       <h1 className={styles.heading}>CONTACT US</h1>
      </div>
      <div className={styles.Map}><MapContainer/></div>
        <div className={styles.items}>
          <div className={styles.left}>
          <div className={styles.fontIconContainer}>
              <div className={styles.fontItems}>
              <FontAwesomeIcon icon={faHome} className={styles.Icon}/>
              <span className={styles.address}>Ahmed Akber Building ,Nadd Al Hamar-Dubai,UAE</span>
              </div>
              <div className={styles.fontItems}> <FontAwesomeIcon icon={faPhone} className={styles.Icon}/>
              <span className={styles.phone}>+971 58 587 0067</span>
              </div>
              <div className={styles.fontItems}><FontAwesomeIcon icon={faEnvelopeOpen} className={styles.Icon}/>
              <span className={styles.email}> enquiry@qats.ae</span>
              </div>
              </div>
          </div>
          <div className={styles.right}>
            
              <form onSubmit={sendEmail} className={styles.input}>
              <TextField className={styles.item} id="outlined-basic" label="Name" variant="outlined" name="n-name" style={{width: 300 }}/>
               <TextField className={styles.item} id="outlined-basic" label="Subject" variant="outlined" name="n-subject"  style={{width: 300}}/>
               <TextField type = 'email' className={styles.item} id="outlined-basic" label="Email" variant="outlined" name="n-email" style={{width: 300}}/>
              <TextareaAutosize className={styles.item}
          maxRows={5}
         aria-label="maximum height"
           placeholder="Write your message.."
         defaultValue=""
         style={{ width: 290 , height:150}}
         name="n-message"
            /> 
             <Button type='submit' value='send' className={styles.button} variant="contained" color="success"> Submit</Button>
              </form>
           </div>
           </div>
     </div>
  )
}

export default Contact