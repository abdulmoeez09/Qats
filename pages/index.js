import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Featured} from '../components/Featured'
import {HomePage} from '../components/HomePage'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to QATS</title>
        <meta name="description" content="Technical Services Site" />
      </Head>
      <Featured />
      <HomePage />

    </div>
  )
}
