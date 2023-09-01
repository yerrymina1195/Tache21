import React, { useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Notification, UserProfil } from '.';
import { useStateContext } from '../contexts/ContextProvider';
// import {
//   collection,
//   serverTimestamp, 
//   addDoc
// } from "firebase/firestore";
// import { db} from "../data/../Firebase/Firebase";


const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, user, handleClick, isClicked, setScreenSize, screenSize ,notif} = useStateContext();


  const NavButton = ({ customFunc, icon, color, dotColor }) => (

    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {notif?.length>0 ?<span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      /> : "" }
      {icon}
    </button>
  
  );
 



  // const sendNotif = async () => {
  //   try {
  //     if (user) {
  //       const notificationDocRef = collection(db, "notifications");
  //       const data0 = {
  //         idcours: "dev",
  //         notifiepar: user?.id,
  //         notifieA: user?.coachSelf,
  //         date: serverTimestamp(),
  //         vue: false
  //       };
  //       await addDoc(notificationDocRef, data0);
  //       console.log("Notification ajoutée avec succès !");
  //     }
  //   } catch (error) {
  //     console.error("Erreur lors de l'ajout de la notification :", error);
  //   }
   
  // };

// useEffect(() => {

//   const senotifier = async () => {
    

//     const querySnapshot = await getDocs(
//       query(collection(db, "notifications"), where("notifieA", "==", user?.coachSelf))
//     );
  
//        setRecup(querySnapshot.docs
//       .map((doc) => ({ ...doc.data(), id: doc.id })));
      
  

//     console.log(recup);
//     if (recup?.length > 0) {
//       alert('superieure')
//     } else{
//       alert('inferieure')
//     }
    
//   }
  
  


//   return () => {
//     senotifier()
//   }
// }, []);


// useEffect(() => {
//   getNotification();
// }, []);

// const getNotification = () => {
//   const refNotif = query(
//     collection(db, "notifications"),
//     where("notifieA", "==", user?.coachSelf)
//   );
//   let data = [];
//   onSnapshot(refNotif, (item) => {
//     item.forEach((i) => {
     
     
//         data.push(i.data());
//         setRecup(data);
//       });
//     });
//     if (recup?.length > 0) {
//              alert('superieure')
//           } else{
//           alert('inferieure')
//       }
  
// };






  



  useEffect(() => {
    const handleResize = () => {
      // console.log(window.innerWidth);
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
    <div className="flex justify-between  p-2 md:ml-6 md:mr-6 relative  w-full">
{/* <button onClick={sendNotif}>erdtfgzuhji</button> */}
      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />

      <div className="flex">
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)"  customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        <div
          className="flex align-items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('userProfil')}
        >
          <img
            className="rounded-full w-8 h-8"
            src={user?.url ? user.url
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
            alt="user-profile"
          />
          <p className='mb-0 '>
            <span className="text-gray-400 mb-0  text-14">Hi,</span>{' '}
            <span className="text-gray-400 mb-0  font-bold ml-1 text-14">
              {user.prenom}
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
