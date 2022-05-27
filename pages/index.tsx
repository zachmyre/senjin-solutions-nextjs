import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import PageHead from '../components/header/PageHead';
import Header from '../components/header/Header';
import Hero from '../components/home/Hero';

//https://tailwindui.com/#components

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <PageHead title="Senjin Solutions"
      content="IT Consulting to provide real world solutions for your business. Senjin Solutions specializes in upgrading business infrastructure with the latest and most optimized technology to fit your business model." />
      <Header />
      <main>
        <Hero />
      </main>

      <footer className={styles.footer}>
        Powered by Senjin Solutions
      </footer>
    </div>
  )
}

export default Home
