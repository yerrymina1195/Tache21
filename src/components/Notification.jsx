import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/need';
import { useStateContext } from '../contexts/ContextProvider';
import {
  collection,
  getDocs,
  query,
  where,
  serverTimestamp, 
  addDoc
} from "firebase/firestore";
import { db} from "../data/../Firebase/Firebase";




const Notification = () => {
  const { currentColor, user } = useStateContext();
  const [recup, setRecup] = useState([]);
 

  const sendNotif = async () => {
    try {
      if (user) {
        const notificationDocRef = collection(db, "notifications");
        const data0={
          idCours: "dev",
          idEleve: user?.id,
          idProfesseur: "Mohamed",
          date: serverTimestamp(),
          vue: false
        }
        await addDoc(notificationDocRef, data0);
        console.log("Notification ajoutée avec succès !");
        setRecup(data0);
        console.log(recup)
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de la notification :", error);
    }
  };
  
console.log({recup});

const tableRecup = [];
      tableRecup.push(recup)
      
console.log(tableRecup);

//  const senotifier = async () => {
//   const fieldName = "idProfesseur";
//   const fieldValue = "makhan";

//   console.log(`Fetching notifications for ${fieldName} equal to ${fieldValue}`);

//   const querySnapshot = await getDocs(
//     query(collection(db, "notifications"), where(fieldName, "==", fieldValue))
//   );

//   const data = querySnapshot.docs
//     .map((doc) => ({ ...doc.data(), id: doc.id }));

//   console.log(`Filtered notifications for ${fieldName} equal to ${fieldValue}:`, data);
// }



  const senotifier = async () => {
    

    const querySnapshot = await getDocs(
      query(collection(db, "notifications"), where("idProfesseur", "==", "Mohamed"))
    );
  
    const data = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
      
    console.log(data);

  }

  useEffect(() => {
    console.log("Valeur de recup mise à jour :", recup);

    // Vous pouvez effectuer d'autres actions en fonction de la valeur de recup ici

  }, [recup]);





  


 const ClickNotifier = () => {
  sendNotif();
  senotifier();
};

  return (
    <div className=" nav-item absolute right-5 md:right-40 top-16 bg-[#ffff] dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme "> 5 New</button>
        </div>
        {/* <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" /> */}
        <button onClick={ClickNotifier} >cliquer pour voir les notifications</button>
      </div>
      <div className=" ">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color ">
            <img className="rounded-full h-10 w-10" src={item.image} alt={item.message} />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="See all notifications" borderRadius="10px" width="full" />
        </div>
      </div> 
    </div>
  );
};

export default Notification;
