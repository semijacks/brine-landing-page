import Image from 'next/image';
import { heroImg } from '../public/images';

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row max-w-screen-2xl m-auto md:justify-between'>
      <div>
        <div className=' mt-28 '>
          <h1 className='font-exoBold text-green-700 text-4xl lg:text-6xl'>
            A New World of Payments with Cryptocurrencies
          </h1>
          <h3 className='font-exoMedium text-green-600  text-base lg:text-2xl mt-8 md:max-w-lg'>
            Buy, store, exchange & earn crypto
            <br />
            Join 10 million+ people using Brine Wallet.
          </h3>
        </div>
        <div className='mt-12 flex flex-col md:flex-row gap-x-3 md:items-center'>
          <input
            className='border-2 px-5 py-3 rounded-md active:border-green-600'
            type='text'
            placeholder='Email Address'
          />
          <button className='font-exoBold mt-5 md:mt-0 px-4 py-3 rounded-lg bg-green-700 text-white text-xl shadow-md active:border-green-700 outline-none'>
            Create Account
          </button>
        </div>
      </div>
      <div className='mt-14 md:mt-0'>
        <Image
          className=''
          src={heroImg}
          width={490}
          height={674}
          alt='hero-img'
        />
      </div>
    </section>
  );
};

export default Hero;
