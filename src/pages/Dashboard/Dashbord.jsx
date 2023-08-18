import React, { useState } from 'react'
import './Dashboard.css';
import { dashData, UserData } from '../../data/need';
import { BarChart } from "../../components";
import img from "../../data/Capture0.png";
import makhan from "../../data/makhan.png";


const Dashbord = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userBoy),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
      {
        label: "Users lost",
        data: UserData.map((data) => data.userGirl),
        backgroundColor: ["red"],
      },
    ],
  });
  const [userData2, setUserData2] = useState(false);

  console.log(userData);

  return (
    <div className=' mt-4'>
      <div className="flex flex-wrap justify-center ">
        <div className="flex m-3 w-full flex-wrap justify-center gap-5 items-center">
          {dashData.map((item) => (
            <div
              key={item.title}
              className="bg-white justify-between items-center flex h-44 dark:text-gray-200 flex-1 basis-[100px] dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
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

          <div className='py-20 flex justify-center w-full flex-1 basis-[100px]'>
            <BarChart chartData={userData} />
          </div>
        </div>
        {/* Dashboard Eleve */}
        <h1 className='text-dark text-center'>Dashboard Elève</h1>
        {/* Carte */}
        <div className="container">
          {/* <div className="row">
          {dashEleve.map((item) => (
        <div className="col-md-4 w-100">
            <div key={item.title} className="bg-white card justify-between items-center  rounded">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="fs-3 opacity-0.9 rounded-circle  p-4"
              >
                {item.icon}
              </button>
              <p className=" mb-0">
                <span className="fs-4 font-semibold">{item.amount}</span>
              </p>
              <p className=" mb-0 fs-6 text-secondary ">{item.title}</p>
            </div>
        </div>
          ))}
          </div> */}


        </div>

        <div className="container mt-3">
          <div className="row">
            {/* Barre de Recherche */}
            <div>
              <form>
                <input type="text" className='form-control shadow-none' placeholder='Recherchez une livraison' />
              </form>
            </div>
            <div className="col-12">
              <div className='d-flex flex-row align-items-center'>
                <div className='image p-1'>
                  <img src={makhan} alt="makhan" className='img-fluid rounded-circle' />
                </div>
                <div className='mt-3 ms-3'>
                  <h4 className='fs-5'>Makhan Diakho</h4>
                </div>
                <div className='mt-4 ms-5'>
                  <p className='text-secondary fs-6 mt-1'>12 août 2023, 12h30</p>
                </div>
              </div>

              <div className='mt-3 ms-3'>
                <h4 className='text-couleur2'>Tâche n° 1</h4>
              </div>
              <div className='mt-3 ms-3'>
                <img src={img} alt="img" className='img-fluid mx-auto' />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashbord;
