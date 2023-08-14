import React, { useState } from "react";
import { dashData, UserData } from "../data/need";
import { BarChart } from "../components";

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
    <div className=" mt-4 ">
      <div className="flex flex-wrap bg-gray-100 lg:flex-nowrap justify-center ">
        <div className="flex m-3 w-full  flex-wrap justify-center gap-5 items-center">
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

          <div className="py-20 flex justify-center w-full flex-1 basis-[100px]">
            <BarChart chartData={userData} />
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Dashbord;
