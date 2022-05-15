import Image from 'next/image';
import {
  downloadImg,
  transactionImg,
  securityImg,
  cryptoFeedImg,
  walletImg,
  paymentsImg,
  createAccountImg,
  ayuPose,
  darmaPose,
  onlinePayment,
  playstore,
  appstore,
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
      <div className='flex justify-center pb-0 md:pb-32'>
        <Image
          className='shadow-2xl'
          src={cryptoFeedImg}
          width={1272}
          height={627}
          alt={'crypto-feed image'}
        />
      </div>

      {/* slide1 */}
      <section className='flex flex-col-reverse md:flex-row max-w-6xl mx-auto gap-y-16 md:gap-x-16 justify-between md:pt-32'>
        <Image
          src={walletImg}
          width={402}
          height={639}
          alt={'crypto-feed image'}
        />
        <div className='flex flex-col  mt-20 md:mt-40'>
          <h1 className='text-white font-exoBold text-5xl max-w-xl'>
            Deposit Crypto Instantly
          </h1>
          <h3 className='text-white font-exoRegular text-2xl max-w-xl mt-4'>
            Get your first $50 of Bitcoin, Ethereum, Binance Coin and many other
            cryptocurrencies
          </h3>
        </div>
      </section>

      {/* slide2 */}
      <section className='flex flex-col md:flex-row max-w-6xl mx-auto gap-y-16 md:gap-x-16 justify-between pt-10 md:pt-32'>
        <div className='flex flex-col md:mt-40'>
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
      </section>

      {/* slide3 */}
      <section className='flex flex-col-reverse md:flex-row max-w-6xl mx-auto gap-y-16 md:gap-x-16 justify-between  md:pt-32'>
        <Image
          src={createAccountImg}
          width={402}
          height={639}
          alt={'crypto-feed image'}
        />
        <div className='flex flex-col mt-10 md:mt-40'>
          <h1 className='text-white font-exoBold text-5xl max-w-xl'>
            Secure & Private
          </h1>
          <h3 className='text-white font-exoRegular text-2xl max-w-xl mt-4'>
            Only you can access your wallet. We don’t collect any personal data.
          </h3>
        </div>
      </section>

      {/* steps section */}
      <section className='flex flex-col max-w-6xl mx-auto mt-10 md:mt-32 pb-10 md:pb-40'>
        <div className='flex flex-col items-center'>
          <h1 className='text-white font-exoBold text-5xl'>
            Get started in 3 easy steps
          </h1>
          <h3 className='mt-5 text-white font-exoRegular max-w-xl text-center text-2xl'>
            It only takes a few minutes to get you started on a world of
            seamless payments. .
          </h3>
        </div>

        <div className='mt-24 flex flex-col lg:flex-row md:gap-x-5 gap-y-5 px-8 max-w-6xl'>
          <div className='bg-purple-700 md:py-8 py-8 px-2 md:px-0 flex flex-col items-center justify-center rounded-lg'>
            <Image
              src={ayuPose}
              width={367}
              height={277}
              alt='ayu-pose-image'
            />
            <p className='mt-5 text-white font-exoSemiBold text-2xl text-center'>
              Download Brine Wallet
            </p>
          </div>

          <div className='bg-purple-700  md:py-8 py-8 px-2 md:px-0 flex flex-col items-center justify-center'>
            <Image
              src={darmaPose}
              width={367}
              height={277}
              alt='darma-pose-image'
            />
            <p className='mt-5 text-white font-exoSemiBold text-2xl text-center'>
              Create an account
            </p>
          </div>

          <div className='bg-purple-700 md:py-8 py-8 px-2 md:px-0 flex flex-col items-center justify-center'>
            <Image
              src={onlinePayment}
              width={367}
              height={277}
              alt='online-payment-image'
            />
            <p className='mt-5 text-white font-exoSemiBold text-2xl text-center'>
              Deposit crypto and make payments
            </p>
          </div>
        </div>
      </section>

      {/* download app section */}
      <section className='flex flex-col max-w-6xl mx-auto items-center pb-10 md:pb-40'>
        <h1 className='font-exoBold  text-5xl text-white'>
          Get Brine Wallet app now!
        </h1>
        <h3 className='mt-5 font-exoRegular text-2xl text-white'>
          The most trusted crypto wallet
        </h3>
        <div className='mt-10 flex gap-x-4'>
          <Image
            className='hover:cursor-pointer'
            src={playstore}
            width={182}
            height={54}
            alt='online-payment-image'
          />
          <Image
            className='hover:cursor-pointer'
            src={appstore}
            width={163}
            height={54}
            alt='online-payment-image'
          />
        </div>
      </section>
    </div>
  );
};

export default MainContent;
