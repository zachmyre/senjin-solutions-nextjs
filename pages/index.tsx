import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import PageHead from "../components/header/PageHead";
import Header from "../components/header/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Message from "../components/home/Message";
import Contact from "../components/home/Contact";

//https://tailwindui.com/#components

const Home: NextPage = () => {
  return (
    <div className="bg-gray-900 sm:w-full sm:h-full md:w-100 md:h-100 max-w-7xl mx-auto">
      <PageHead
        title="Senjin Solutions"
        content="IT Consulting to provide real world solutions for your business. Senjin Solutions specializes in upgrading business infrastructure with the latest and most optimized technology to fit your business model."
      />
      <Header />
      <main className="space-y-16">
        <Hero />
        <Features />
        <Message />
        <Contact />
      </main>

      <footer className={styles.footer}>Powered by Senjin Solutions</footer>
    </div>
  );
};

export default Home;
