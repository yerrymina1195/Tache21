import React,{useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import makhan from '../data/makhan.png';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import Notifications from './Notification';

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="button-x btn btn-outline"
    >
      <span
        style={{ background: '' }}
        className="dot-badge"
      />
      {icon}
    </button>
 
);
const NavButtonproblem = ({ customFunc, icon, color, dotColor }) => (
  
    <button
      type="button"
     
      style={{ color }}
      className="button-x btn btn-outline"
    >
      <span
        style={{ background: '' }}
        className="dot-badge"
      />
      {icon}
    </button>
)
const Navbar = () => {


    const { activeMenu, setActiveMenu, isClicked, handleClick,  setScreenSize, screenSize } = useStateContext();

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
    <div className='d-flex postion-relative p-2 py-4  w-100 bg-white justify-content-between px-md-2'>
      <div className=' Bgr'>
    <NavButton color={'blue'} customFunc={handleActiveMenu} icon={<AiOutlineMenu/>} className='ms-5 bg-danger'/>
      </div>
      <div className='d-flex algn-items-center'>
        <div onClick={()=>handleClick('notification')} >

      <NavButtonproblem title="Notification" dotColor="rgb(254, 201, 15)"  color={'blue'} icon={<RiNotification3Line />} />
        </div>
      <div
            className="d-flex align-items-center p-1 "
            onClick={() => {}}
          >
            <img
              className="custom-circle"
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
      </div>
      {isClicked.notification&&(<Notifications/>)}
      
    </div>
  )
}

export default Navbar
