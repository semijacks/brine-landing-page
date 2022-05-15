import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Hero from '../components/hero';
import MainContent from '../components/main-content';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <link
          rel='preload'
          href='/fonts/Exo/Exo-Bold.woff2'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/Exo/Exo-Medium.woff2'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/Exo/Exo-Regular.woff2'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/Exo/Exo-SemiBold.woff2'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/Modern_Antiqua/ModernAntiqua-Regular.woff2'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/images/hero-img.svg'
          as='svg'
          crossOrigin=''
        />
      </Head>
      <div className='mb-10 md:mb-40 px-5'>
        <Header />
        <Hero />
      </div>
      <MainContent />
      <div className='bg-green-700'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
