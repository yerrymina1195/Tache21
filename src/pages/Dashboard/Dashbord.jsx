import React, {useEffect, useState} from 'react'
import './Dashboard.css';


import FormInscrip from './FormInscrip';
import { GiTeacher } from "react-icons/gi";
import { PiStudentLight } from "react-icons/pi"
import { BiUser } from "react-icons/bi";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs
} from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

const Dashbord = () => {


  const [nombreUser, setnombreUser] = useState(0);
  const [nombreEleves, setNombreEleves] = useState(0);
  const [nombreCoachs, setNombreCoachs] = useState(0);
  const [numberOfCourses, setNumberOfCourses] = useState(0);
  const [livraison, setLivraison] = useState(0);
  const usersCollection = collection(db, 'users');
  useEffect(() => {
    

    // Récupérer la référence de la collection "cours"
    
    // Récupérer les documents de la collection et compter le nombre
    getDocs(usersCollection).then(querySnapshot => {
      const count = querySnapshot.size;
      setnombreUser(count);
    });

    // Référence à la collection "users"
    
    // Filtrer les élèves en fonction du statut "eleve"
    const coachsQuery = query(usersCollection, where('statut', '==', 'coach'));
    const elevesQuery = query(usersCollection, where('statut', '==', 'eleve'));

    const unsubscribeCoachs = onSnapshot(coachsQuery, (snapshot) => {
      const coachsData = snapshot.docs.map(doc => doc.data());
      setNombreCoachs(coachsData.length);
    });

    const unsubscribeEleves = onSnapshot(elevesQuery, (snapshot) => {
      const elevesData = snapshot.docs.map(doc => doc.data());
      setNombreEleves(elevesData.length);
    });

    // Récupérer la référence de la collection "cours"
    const coursesRef = collection(db, 'cours');
    // Récupérer les documents de la collection et compter le nombre
    getDocs(coursesRef).then(querySnapshot => {
      const count = querySnapshot.size;
      setNumberOfCourses(count);
    });

    // Récupérer la référence de la collection "cours"
    const livraisonRef = collection(db, 'livraisons');
    // Récupérer les documents de la collection et compter le nombre
    getDocs(livraisonRef).then(querySnapshot => {
      const count = querySnapshot.size;
      setLivraison(count);
    });


    return () => {

      unsubscribeCoachs();
      unsubscribeEleves();
    };// eslint-disable-next-line 
  }, []);
  console.log(nombreUser)
  console.log(nombreCoachs);
  console.log(nombreEleves);
  console.log(numberOfCourses);
  console.log(livraison);

  return (
    <div className=' mt-4'>
      <div className="flex flex-wrap justify-center ">
        <div className="flex m-3 w-full flex-wrap  gap-5 items-center">
          {/* Carte 1 */}
          <div className="bg-[#ffff] justify-between items-center flex h-44 dark:text-gray-200 drop-shadow-[0_15px_15px_grey] dar:drop-shadow-[0_15px_15px_white]  flex-1 basis-[100px] dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
            <button
              type="button"
              style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              <BiUser />
            </button>
            <p className=" mb-0 ">
              <span className="text-lg font-semibold">{nombreUser}</span>
            </p>
            <p className=" mb-0 text-sm text-gray-400 ">Utilisateurs</p>
          </div>
          {/* CARTE 2 */}
          <div className="bg-[#ffff] justify-between items-center flex h-44 dark:text-gray-200 drop-shadow-[0_15px_15px_grey] dar:drop-shadow-[0_15px_15px_white] flex-1 basis-[100px] dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
            <button
              type="button"
              style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              <GiTeacher />
            </button>
            <p className=" mb-0 ">
              <span className="text-lg font-semibold">{nombreCoachs}</span>
            </p>
            <p className=" mb-0 text-sm text-gray-400 ">Coachs</p>
          </div>
          {/* CARTE 3 */}
          <div className="bg-[#ffff] justify-between items-center flex h-44 dark:text-gray-200 drop-shadow-[0_15px_15px_grey] dar:drop-shadow-[0_15px_15px_white] flex-1 basis-[100px] dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
            <button
              type="button"
              style={{ color: "rgb(255, 244, 229)", backgroundColor: "rgb(254, 201, 15)" }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              <PiStudentLight />
            </button>
            <p className=" mb-0 ">
              <span className="text-lg font-semibold">{nombreEleves}</span>
            </p>
            <p className=" mb-0 text-sm text-gray-400">Elèves</p>
          </div>
          {/* Carte 4 */}
          <div className="bg-[#ffff] justify-between  items-center flex h-44 dark:text-gray-200 drop-shadow-[0_15px_15px_grey] dar:drop-shadow-[0_15px_15px_white] flex-1 basis-[100px] dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
            <button
              type="button"
              style={{ color: "rgb(228, 106, 118)", backgroundColor: "rgb(255, 244, 229)" }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              <LiaBookSolid />
            </button>
            <p className=" mb-0 ">
              <span className="text-lg font-semibold">{numberOfCourses}</span>
            </p>
            <p className=" mb-0 text-sm text-gray-400  ">Cours</p>
          </div>
          {/* Carte 5 */}
          <div className="bg-[#ffff] justify-between items-center flex h-44 dark:text-gray-200  basis-[230px] dark:bg-secondary-dark-bg md:w-56 drop-shadow-[0_15px_15px_grey] dar:drop-shadow-[0_15px_15px_white] p-4 pt-9 rounded-2xl ">
            <button
              type="button"
              style={{ color: "rgb(0, 194, 146)", backgroundColor: "rgb(235, 250, 242)" }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              <AiOutlineDeliveredProcedure />
            </button>
            <p className=" mb-0 ">
              <span className="text-lg font-semibold">{livraison}</span>
            </p>
            <p className=" mb-0 text-sm text-gray-400  ">Livraisons</p>
          </div>
        </div>


      </div>
      <div className="container p-0 mt-5">
        <FormInscrip />
      </div>
    </div>
     
  );
};

export default Dashbord;
