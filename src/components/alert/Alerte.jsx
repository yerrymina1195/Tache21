import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../alert/Alerte.css'; 

const Alerte = () => {
  const notify = () => {
    toast.success('Supprimé avec succès', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <button onClick={notify}>Afficher la notification</button>
      <ToastContainer
        progressClassName="my-toast-progress-bar" 
      />
    </div>
  );
};

export default Alerte;
