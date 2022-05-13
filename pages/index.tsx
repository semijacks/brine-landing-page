import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Hero from '../components/hero';

const Home: NextPage = () => {
  return (
    <div className='min-h-screen px-12'>
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
      </Head>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
