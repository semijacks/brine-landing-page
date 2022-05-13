import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Hero from '../components/hero';

const Home: NextPage = () => {
  return (
    <div className='min-h-screen px-12'>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
