import React, { useState, useEffect } from 'react'
// import '../Dashboard/Dashbord.css';
import { Link } from "react-router-dom";
import { dashDataEleves } from '../../data/need';
import {
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import './DashboardCoach.css';




const DashbordEleve = () => {
  const [livraison, setLivraison] = useState([]);
  useEffect(() => {
    const livraisonsCollectionRef = collection(db, 'livraisons');
    const q = query(livraisonsCollectionRef);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const livraisonsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setLivraison(livraisonsData);
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <div className=' container p-5' >
      <div className="flex  flex-wrap justify-center ">
        <div className="flex m-3 w-full flex-wrap justify-center gap-5 items-center">
          {dashDataEleves.map((item) => (
            <div
              key={item.title}
              className="bg-white shadow justify-between items-center flex h-44 dark:text-gray-200 flex-1 basis-[100px] dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className=" mb-0 ">
                <span className="text-lg font-semibold">{item.amount}</span>
              </p>
              <p className=" mb-0 text-sm text-gray-400  ">{item.title}</p>
            </div>
          ))}


        </div>

        <div className="container mt-5">

        <h1 className='text-center'>Livraisons</h1>
          <div className='row g-5 my-3'>
            {livraison.map((cour) => (
              <div className="col-md-4" key={cour.id}>
                <div className="card shadow h-100 d-flex flex-column p-3">
                  <div className="card-header bg-transparent text-white my-2">
                    <h4>{cour.tache}</h4>
                  </div>
                  <div className="card-body">
                    <p className="fw-bold">{cour.cours}</p>
                    <p>{cour.description}</p> <hr />
                    <img src={cour.imageUrl} alt="Capture d'écran" className='img-fluid mx-auto w-100 image-cartes' />    <hr /> 
                    <Link to={cour.lien} target="_blank" className='fs-6 text-decoration-none text-dark'> {cour.lien}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashbordEleve;
