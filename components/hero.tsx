import Image from 'next/image';
import { heroImg } from '../public/images';

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row md:px-32 justify-between'>
      <div>
        <div className=' mt-28 '>
          <h1 className='font-exoBold text-green-700 text-6xl'>
            A New World of Payments with Cryptocurrencies
          </h1>
          <h3 className='font-exoMedium text-green-600 text-2xl mt-8 md:max-w-lg'>
            Buy, store, exchange & earn crypto
            <br />
            Join 10 million+ people using Brine Wallet.
          </h3>
        </div>
        <div className='mt-12 flex flex-col md:flex-row gap-x-3 sha'>
          <input
            className='border-2 px-5 py-3 rounded-md active:border-green-600'
            type='text'
            placeholder='Email Address'
          />
          <button className='font-exoBold px-4 py-1 rounded-lg bg-green-700 text-white text-xl shadow-md active:border-green-700 outline-none'>
            Create Account
          </button>
        </div>
      </div>
      <div className=''>
        <Image src={heroImg} width={490} height={674} alt='hero-img' />
      </div>
    </section>
  );
};

export default Hero;
