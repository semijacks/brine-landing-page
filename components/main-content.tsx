import Image from 'next/image';
import {
  downloadImg,
  transactionImg,
  securityImg,
  cryptoFeedImg,
  walletImg,
  paymentsImg,
  createAccountImg,
} from '../public/images';

const MainContent = () => {
  return (
    <div className='bg-green-700 px-5'>
      {/* quick links */}
      <div className='flex flex-col lg:flex-row pt-10 gap-x-20 lg:justify-center items-center gap-y-4 pb-16'>
        <div className='flex items-center gap-x-5'>
          <Image src={downloadImg} width={45} height={45} alt='deposit-icon' />
          <p className='font-exoSemiBold text-base lg:text-2xl text-white'>
            Deposit Crypto Instantly
          </p>
        </div>
        <div className='flex items-center gap-x-5'>
          <Image
            src={transactionImg}
            width={46}
            height={47}
            alt='deposit-icon'
          />
          <p className='font-exoSemiBold text-base lg:text-2xl text-white'>
            Transact & Exchange Tokens
          </p>
        </div>
        <div className='flex items-center gap-x-5'>
          <Image src={securityImg} width={38} height={47} alt='deposit-icon' />
          <p className='font-exoSemiBold text-base lg:text-2xl text-white'>
            Secure & Private
          </p>
        </div>
      </div>

      {/* crypto feed */}
      <div className='flex justify-center pb-32'>
        <Image
          className='shadow-2xl'
          src={cryptoFeedImg}
          width={1272}
          height={627}
          alt={'crypto-feed image'}
        />
      </div>

      {/* slide1 */}
      <div className='flex flex-col md:flex-row max-w-6xl m-auto gap-x-16 justify-between pt-32'>
        <Image
          src={walletImg}
          width={402}
          height={639}
          alt={'crypto-feed image'}
        />
        <div className='flex flex-col mt-40'>
          <h1 className='text-white font-exoBold text-5xl max-w-xl'>
            Deposit Crypto Instantly
          </h1>
          <h3 className='text-white font-exoRegular text-2xl max-w-xl mt-4'>
            Get your first $50 of Bitcoin, Ethereum, Binance Coin and many other
            cryptocurrencies
          </h3>
        </div>
      </div>

      {/* slide2 */}
      <div className='flex flex-col md:flex-row max-w-6xl m-auto gap-x-16 justify-between pt-32'>
        <div className='flex flex-col mt-40'>
          <h1 className='text-white font-exoBold text-5xl max-w-xl'>
            Transact & Exchange Tokens
          </h1>
          <h3 className='text-white font-exoRegular text-2xl max-w-xl mt-4'>
            Buy and sell popular digital currencies, keep track of them in the
            one place.
          </h3>
        </div>
        <Image
          src={paymentsImg}
          width={402}
          height={639}
          alt={'crypto-feed image'}
        />
      </div>

      {/* slide3 */}
      <div className='flex flex-col md:flex-row max-w-6xl m-auto gap-x-16 justify-between pt-32'>
        <Image
          src={createAccountImg}
          width={402}
          height={639}
          alt={'crypto-feed image'}
        />
        <div className='flex flex-col mt-40'>
          <h1 className='text-white font-exoBold text-5xl max-w-xl'>
            Secure & Private
          </h1>
          <h3 className='text-white font-exoRegular text-2xl max-w-xl mt-4'>
            Only you can access your wallet. We don’t collect any personal data.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
