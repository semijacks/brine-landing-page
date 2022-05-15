const Header = () => {
  return (
    <header className='hidden lg:flex justify-between py-5 items-center px-12'>
      <div className='flex gap-x-20 items-center'>
        <div>
          <h1 className='uppercase font-modernAntiqua text-4xl text-green-700'>
            Brine
          </h1>
        </div>
        <nav>
          <ul className=' flex font-exoRegular gap-x-7 items-center text-base'>
            <li>Buy Crypto</li>
            <li>Assets</li>
            <li>Download</li>
            <li>Learn More</li>
          </ul>
        </nav>
      </div>
      <div className='flex gap-x-5 items-center'>
        <button className='font-exoMedium text-lg'>Create Account</button>
        <button className='font-exoBold px-4 py-2 rounded-lg bg-green-700 text-white text-xl shadow-md'>
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
