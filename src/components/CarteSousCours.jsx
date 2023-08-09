import {React, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
// import imgCours from "../medias/téléchargement.jpeg";
// import ButtonSousCour from "./ButtonSousCours";
import { BiEditAlt, BiArchive } from "react-icons/bi";

const Card = ({ title, descrip }) => {
    return (
      <div className="col-md-4 mb-5">
        <div className="card border-0 shadow carteCours hover:scale-[1.1]">
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
              <div className="col d-flex align-items-center titre">
                <BiEditAlt className="text-warning" />
                Modifier
              </div>
              <div className="col d-flex align-items-center titre">
                <BiArchive className="text-warning" />
                Archiver
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  


  
const CarteSousCours = () => {
  const cardData = [
    {
      title: "Titre Cours 1",
      descrip:
        "Lorem ipsum1 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },
    {
      title: "Titre Cours 2",
      descrip:
        "Lorem ipsum2 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },
    {
      title: "Titre Cours 3",
      descrip:
        "Lorem ipsum3 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },
    {
      title: "Titre Cours 4",
      descrip:
        "Lorem ipsum4 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },
    {
      title: "Titre Cours 5",
      descrip:
        "Lorem ipsum5 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },
    {
      title: "Titre Cours 6",
      descrip:
        "Lorem ipsum6 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },
    // Ajoutez d'autres objets de données ici
  ];

  const chunkedData = [];
  const chunkSize = 3;

  for (let i = 0; i < cardData.length; i += chunkSize) {
    chunkedData.push(cardData.slice(i, i + chunkSize));
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
