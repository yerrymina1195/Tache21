
import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateContext } from "../contexts/ContextProvider";
import {Outlet} from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Navbar, Sidebar, ThemeSetting } from "../components";

const Layout= () => {

  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);
  return (
    
    <div className={currentMode === 'Dark' ? 'dark' : ''} >
     
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>

            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}

              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-[#ffff] dark:bg-secondary-dark-bg ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static sticky-top shadow-sm bg-main-bg dark:drop-shadow-[0_15px_15px_rgba(255,255,255,0.25)] dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div className="pt-3 pb-5">
              {themeSettings && <ThemeSetting />}
              <Outlet />
             
            </div>
          </div>
        </div>
    </div>
  );
};

export default Layout;