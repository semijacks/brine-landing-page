const Footer = () => {
  return (
    <footer className='pb-24 max-w-6xl mx-auto gap-x-52 px-8 hidden lg:flex'>
      <div>
        <h2 className='font-modernAntiqua text-5xl text-white uppercase'>
          Brine
        </h2>
      </div>
      <div className='flex gap-x-32'>
        <div className='flex flex-col gap-y-5'>
          <h3 className='font-exoSemiBold text-2xl text-white'>Contact Us</h3>
          <ul className='font-exoMedium text-lg text-white leading-10'>
            <li>About Us</li>
            <li>Join Us</li>
            <li>Media Kit</li>
            <li>Brine Affiliate Program</li>
            <li>Bug Bounty</li>
            <li>Technical Support</li>
          </ul>
        </div>
        <div className='flex flex-col gap-y-5'>
          <h3 className='font-exoSemiBold text-2xl text-white'>Service</h3>
          <ul className='font-exoMedium text-lg text-white leading-10'>
            <li>Support Center</li>
            <li>FAQ</li>
            <li>Identity Verification</li>
            <li>Brine Blog</li>
          </ul>
        </div>
        <div className='flex flex-col gap-y-5'>
          <h3 className='font-exoSemiBold text-2xl text-white'>Learn</h3>
          <ul className='font-exoMedium text-lg text-white leading-10'>
            <li>Browse crypto prices</li>
            <li>Tips & tutorials</li>
            <li>Market updates</li>
            <li>What is a blockchain?</li>
            <li>How to setup a crypto wallet</li>
            <li>How to send crypto</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
