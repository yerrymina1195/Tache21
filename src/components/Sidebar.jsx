import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from 'react-icons/md';
import { links } from "../data/need";
import logo from "../data/logo.png";
import { useStateContext } from '../contexts/ContextProvider';
const Sidebar = () => {
  console.log(links);
  const { currentColor, activeMenu, setActiveMenu, screenSize,user } = useStateContext();
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  // console.log( user);
  const activeLink = 'flex items-center gap-1 text-decoration-none pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-1 text-decoration-none pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>

      
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-decoration-none dark:text-white text-slate-900">
              <img src={logo} alt=""  className='w-[70px] h-auto' /> <span className='rest'>  e-learning</span>
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              style={{ color: currentColor }}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel />
            </button>
          </div>
          <div className='mt-10 '>
            {links.map((item) => (
              
              // Vérifier si le rôle de l'utilisateur est autorisé à voir ces liens
              item?.statut?.includes(user?.statut) && (
                <div key={item.title}>
                  <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    // Vérifier si le rôle de l'utilisateur est autorisé à voir ce lien
                    link?.statut?.includes(user?.statut) && (
                      <NavLink
                        to={`/${link.link}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : '',
                        })}
                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                      >
                        {link.icon}<span className="capitalize ">{link.name}</span>
                      </NavLink>
                    )
                   
                  ))}
                </div>
              )
            ))}
          </div>
          {/* <div className='mt-10 '>
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400  dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.link}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}<span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}

          </div> */}
        </>
      )}
    </div>
  )
}

export default Sidebar
