import React, { useState, useEffect } from 'react'
import './DashboardCoach.css';
import { UserData } from '../../data/need';
import { BarChart } from "../../components";
import { PiStudentLight } from "react-icons/pi"
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { db } from "../../Firebase/Firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs
} from "firebase/firestore";


const DashbordCoach = () => {
  // eslint-disable-next-line
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Men",
        data: UserData.map((data) => data.userBoy),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
        ],
      },
      {
        label: "Users Girl",
        data: UserData.map((data) => data.userGirl),
        backgroundColor: ["red"],
      },
    ],
  });
  console.log(userData);
  const [nombreEleves, setNombreEleves] = useState(0);
  const [numberOfCourses, setNumberOfCourses] = useState(0);
  const [livraison, setLivraison] = useState(0);

  const usersCollection = collection(db, 'users');
  useEffect(() => {
    

    // Référence à la collection "users"
    // Filtrer les élèves en fonction du statut "eleve"
    const elevesQuery = query(usersCollection, where('statut', '==', 'eleve'));
    const livraisonRef = collection(db, 'livraisons');

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
    // Récupérer les documents de la collection et compter le nombre
    getDocs(livraisonRef).then(querySnapshot => {
      const count = querySnapshot.size;
      setLivraison(count);
    });


    return () => {
      unsubscribeEleves();
    };
     //eslint-disable-next-line
  }, []);
  console.log(nombreEleves);
  console.log(numberOfCourses);
  console.log(livraison);


  return (
    <div className=' container p-md-5 ' >
      <div className="flex flex-wrap justify-center ">
        <div className="flex m-3 w-full flex-wrap justify-center gap-5 items-center">
          {/* CARTE 3 */}
          <div className="bg-[#ffff] shadow justify-between items-center flex h-44 dark:text-gray-200 flex-1 basis-[100px] dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
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
          <div className="bg-[#ffff] shadow justify-between items-center flex h-44 dark:text-gray-200 flex-1 basis-[100px] dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
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
          <div className="bg-[#ffff] shadow justify-between items-center flex h-44 dark:text-gray-200 flex-1 basis-[100px] dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
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
        <div className=' container mt-5 w-full flex-1 basis-[100px]'>
          <h1 className='mt-5 text-center'>CHART</h1>
          <div className="row">
          <BarChart chartData={userData} className='w-100' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbordCoach;
