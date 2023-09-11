import React,{useEffect} from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import {BsEyeFill } from "react-icons/bs";
import { useStateContext } from '../contexts/ContextProvider';
import { db } from "../Firebase/Firebase";
import {
  updateDoc,
  doc,
  where,
  collection,
  query,onSnapshot
} from "firebase/firestore";





const Notification = () => {

  const { currentColor, notif, updatenotif, user } = useStateContext();
  useEffect(() => {
    getNotification();
    // eslint-disable-next-line
  }, []);
  
  const getNotification = () => {
    const refNotif = query(
      collection(db, "notifications"),
      where("notifieA", "==", user.id),
      where("vu", "==", false) 
    );
    let data = [];
    onSnapshot(refNotif, (item) => {
      item.forEach((i) => {
       
       
          data.push(i.data());
          
          updatenotif(data)
        });
      });
    
  };
  const updateNotifs = async (id) => {
   
    try {
      const updateVue = doc(db, "notifications", id);
      updateDoc(updateVue, {
        vu:true
      });
      const updatedRef = query(
        collection(db, "notifications"),
        where("notifieA", "==", user.id),
        where("vu", "==", false) 
      );
      let data = [];
      onSnapshot(updatedRef, (item) => {
        data = item.docs.map((doc) => doc.data());
        updatenotif(data);
      });
      alert("notification  lu");
    } catch (error) {
      console.log("erreur :", error);
    }
   
  };
console.log(notif);
// const lireNotif= (d)=>{
//   alert(d)
// }


  return (
    <div className=" nav-item absolute right-3 md:right-40 top-16 bg-[#ffff] dark:bg-[#42464D] p-8 rounded-lg w-96 LOGIQ">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme "> 5 New</button>
        </div>
        <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
      </div>
      <div className=" overflow-scroll  ">
      {notif?.map((item, index) => (
  <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color ">
    <img className="rounded-full h-10 w-10" src={item.imageUrl} alt={item.title} />
    <div>
      <p className="font-semibold dark:text-gray-200 mb-0">{item.prenom}</p>
      
        <p className="text-gray-500 text-sm dark:text-gray-400  mb-0">{item.message}</p>
     
        <a href={item.lien}>lien vers: {item.lien}</a>
    
    <button className='text-danger d-flex align-items-center justify-content-center' onClick={()=>updateNotifs(item.id)}> marqué lu<span className='ms-1'><BsEyeFill /></span></button>
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
