import React from 'react'
import './Dashboard.css';
import { dashData } from '../../data/need';


import FormInscrip from './FormInscrip';

const Dashbord = () => {
 

  return (
    <div className=' mt-4'>
      <div className="flex flex-wrap justify-center ">
        <div className="flex  m-3 w-full flex-wrap justify-center gap-5 items-center">
          {dashData.map((item) => (
            <div
              key={item.title}
              className="bg-[#ffff] shadow justify-between items-center flex h-44 dark:text-gray-200 flex-1 basis-[100px] dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
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
        <div className="container p-0 mt-5">
          <FormInscrip/>
        </div>
        </div>
    </div>
  );
};

export default Dashbord;
