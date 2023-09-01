import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import  ButtonDeconnexion  from "./ButtonDeconnexon";
// import { userProfileData } from '../data/need';
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';

const UserProfil = () => {
  const { currentColor ,handleLogout ,user} = useStateContext();
  const navigate = useNavigate();

  const deconnexion = () => {
    handleLogout()
      .then(() => {
        // Déconnexion réussie
        navigate("/")
        console.log('Signed out successfully');
      })
      .catch((error) => {
        // Gestion des erreurs
        console.error('Error', error);
      });
  };

  return (
    <div className="nav-item  shadow absolute right-1 top-16 bg-[#ffff] dark:bg-[#42464D] p-8 rounded-lg w-96 LOGIQ">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-3 items-center mt-6 border-color border-b-1 pb-4">
        <img
          className="rounded-full h-24 w-24"
          src={user?.url ? user.url
            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold mb-0 text-xl dark:text-gray-200"> {user?.prenom} {user?.nom} </p>
          <p className="text-gray-500 mb-0  text-sm dark:text-gray-400">  {user?.statut}   </p>
          <p className="text-gray-500 mb-0  text-sm font-semibold dark:text-gray-400"> {user?.email} </p>
        </div>
      </div>
  
      <div className="mt-3">
        <ButtonDeconnexion
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          onClick={deconnexion}
        />
      </div>
    </div>

  );
};

export default UserProfil;
