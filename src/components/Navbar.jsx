import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Notification, UserProfil } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import makhan from '../data/makhan.png';

const NavButton = ({ customFunc, icon, color, dotColor }) => (

  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>

);
const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setScreenSize(window.innerWidth)
    };


    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between  p-2 md:ml-6 md:mr-6 relative w-full">

      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />

      <div className="flex">
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        <div
          className="flex align-items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('userProfil')}
        >
          <img
            className="rounded-full w-8 h-8"
            src={makhan}
            alt="user-profile"
          />
          <p className='mb-0 '>
            <span className="text-gray-400 mb-0  text-14">Hi,</span>{' '}
            <span className="text-gray-400 mb-0  font-bold ml-1 text-14">
              Makhan
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>



        {isClicked.notification && (<Notification />)}
        {isClicked.userProfil && (<UserProfil />)}
      </div>
    </div>
  );
};

export default Navbar
