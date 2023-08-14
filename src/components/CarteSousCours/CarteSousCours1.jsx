import {React, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { cardDataPro } from "../../data/need";

import { BiEditAlt, BiArchive } from "react-icons/bi";

const Card = ({ title, descrip }) => {
    return (
      <div className="col-md-4 mb-5">
        <div className="card border-0 shadow carteCours ">
          <a href="https://youtu.be/u5W2NWItytc?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO" target="_blank" rel="noopener noreferrer">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/u5W2NWItytc?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </a>
          <div className="card-body">
            <a href="#" className="text-decoration-none text-black titre">
              <h5 className="card-title group-hover:text-red-600">{title}</h5>
            </a>
            <p className="card-text">{descrip}</p>
            <div className="row">
              <div className="col d-flex align-items-center titre hover:scale-[1.1]">
                <BiEditAlt className="text-warning fs-3" />
                Modifier
              </div>
              <div className="col d-flex align-items-center titre hover:scale-[1.1]">
                <BiArchive className="text-warning fs-3" />
                Archiver
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
const CarteSousCours = () => {
  const chunkedData = [];
  const chunkSize = 3;

  for (let i = 0; i < cardDataPro.length; i += chunkSize) {
    chunkedData.push(cardDataPro.slice(i, i + chunkSize));
  }

  return (
    <div className="container p-5">
      {chunkedData.map((chunk, rowIndex) => (
        <div className="row" key={rowIndex}>
          {chunk.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              descrip={data.descrip}
              image={data.image}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CarteSousCours;
