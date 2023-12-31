import React from 'react'
import Image from 'next/image'
import styles from '../styles/Featured.module.css'
import {useState} from 'react'
export const Featured = () => {
  const[index,setIndex]=useState(0)
  const images = [
    '/img/bg-1.jpeg',
    '/img/bg-2.jpeg',
   '/img/bg-3.jpeg',
  ];
  const handleArrow = (direction) =>{
    if(direction === 'l'){
    setIndex(index !== 0 ? index - 1 :2)
    }
    if(direction === 'r'){
      setIndex(index !== 2 ? index + 1 :0)
      }
  }
  // console.log(index)
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left:0}}>
      <Image src='/img/arrowl.png' alt='' layout='fill' objectFit='contain' onClick={()=>handleArrow('l')}/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
       {images.map((img,i)=>(
           <div className={styles.imgContainer} key={i}>
         <Image src={img}  alt='' layout='fill' objectFit='fill'/>
         </div>
        ))}
      
      </div>
      <div className={styles.arrowContainer} style={{right:0}}>
      <Image src='/img/arrowr.png' alt='' layout='fill' objectFit='contain' onClick={()=>handleArrow('r') }/>
      </div>
      </div>
  )
}
