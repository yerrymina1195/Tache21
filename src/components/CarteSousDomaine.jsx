import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import imgCours from "../medias/téléchargement.jpeg";
import { Button } from "../components";
const Card = ({ title, descrip, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card border-0 shadow carteCours">
        <a href="#">
          <img
            src={imgCours}
            className="card-img-top h-auto w-100%"
            alt="..."
          />
        </a>
        <div className="card-body">
          <a href="#" className="text-decoration-none text-black titre">
            <h5 className="card-title">{title}</h5>
          </a>
          <p className="card-text">{descrip}</p>
          <hr className="mt-5" />
          <Button text={'Modifier'} 
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%" />

          {/* <a href="#" className="btn btn-primary ms-4">
            Archiver
          </a> */}
        </div>
      </div>
    </div>
  );
};

const CarteSousCours = () => {
  const cardData = [
    {
      title: "Card title1",
      descrip:
        "Lorem ipsum1",
    },
    {
      title: "Card title2",
      descrip: "Lorem ipsum2",
    },
    {
      title: "Card title3",
      descrip: "Lorem ipsum3",
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
