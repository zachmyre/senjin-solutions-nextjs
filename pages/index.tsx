import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import PageHead from '../components/header/PageHead';
import Header from '../components/header/Header';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';

//https://tailwindui.com/#components

const Home: NextPage = () => {
  return (
    <div className='bg-gray-900 sm:w-full sm:h-full md:w-100 md:h-100'>
      <PageHead title="Senjin Solutions"
      content="IT Consulting to provide real world solutions for your business. Senjin Solutions specializes in upgrading business infrastructure with the latest and most optimized technology to fit your business model." />
      <Header />
      <main>
        <Hero />
        <Features />
      </main>

      <footer className={styles.footer}>
        Powered by Senjin Solutions
      </footer>
    </div>
  )
}

export default Home
