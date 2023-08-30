import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from "../Firebase/Firebase"
import { signOut } from "firebase/auth"
const StateContext = createContext();

const initialState = {
  userProfil: false,
  notification: false,
  modifState:false,
  ajoutState:false,
};

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
  const [notif, setNotif] = useState([]);
  const [certifie, setCertifie] = useState([]);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#f6b339');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const updatenotif = (frfr) => {
   
    setNotif(frfr);
  
  }; 

  const updatecertifie = (frfr) => {
   
    setCertifie(frfr);
  
  }; 

  const updateUser = (userData) => {
    if (typeof(userData) === 'undefined') {
      return alert(`n'existe pas ce user`)
    }
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };
  const handleLogout = async () => {
    try {
      await signOut(auth); 
      updateUser(null);
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, handleLogout, setThemeSettings,user,updateUser,notif,updatenotif,certifie,updatecertifie}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
