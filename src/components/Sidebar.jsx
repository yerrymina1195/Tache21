import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/need";
import logo from "../data/logo.png";
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();
    const handleCloseSideBar = () => {
      if (activeMenu !== undefined && screenSize <= 900) {
        setActiveMenu(false);
      }
    };
    const activeLink='link-active';
    const normaleLink='link-normal';

  return (
    <div className="fixed-top custom-sidebar bg-white  ">
      <div className="custom-container">
        <div className="d-flex justify-content-between align-items-center pb-4 pt-3 px-1">
          <Link to="/" className="text-decoration-none ">
            <img src={logo} alt="" srcset="" className="custom-size" />{" "}
            <span className="rest"> e-learning</span>
          </Link>
          <button
            style={{ color: "pink" }}
            className="button-x btn btn-outline fs-4 d-block d-lg-none"
            onClick={() => setActiveMenu(!activeMenu)}

          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className=' '>
        {links.map((item) => (
              <div key={item.title} className="">
                <p className="  custom-text-link-h">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) => (isActive ? activeLink : normaleLink)}
                   
                  >
                    {link.icon}<span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
             
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
