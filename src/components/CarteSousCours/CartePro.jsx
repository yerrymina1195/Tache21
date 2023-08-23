import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { cardDataPro } from "../../data/need";
import { BsPencilSquare, BsArchiveFill } from "react-icons/bs";
import TitreCarte from "./TitreCarte";
import { db } from "../../Firebase/Firebase";
import {
  addDoc,
  collection,
} from "firebase/firestore";

const Card = ({ title, descrip, videoUrl }) => {
  return (
    <div className="domaine">
      <div className="card mx-md-5 border-0 drop-shadow-lg dark:bg-main-dark-bg dark:text-gray-200 dark:drop-shadow-[0_8px_0px_rgba(255,255,255,0.25)]">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <iframe
            width="100%"
            height="400"
            src={videoUrl.replace("watch?v=", "embed/")}
            title="YouTube video player"
            allowFullScreen
            className="rounded-top"
          ></iframe>
        </a>
        <div className="card-body ">
          <a href={videoUrl} className="text-decoration-none text-black titre">
            <h5 className="card-title dark:text-[#ffff]">{title}</h5>
          </a>
          <p className="card-text">{descrip}</p>
          <div className="row btn-domaine">
            <div className="col-6">
              <button type="button" class="btn ">
                <BsPencilSquare />
              </button>
              <button type="button" class="btn mx-md-3">
                <BsArchiveFill />
              </button>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarteSousCours = () => {
  const [videoData] = useState(cardDataPro);

  const chunkedData = [];
  const chunkSize = 3;

  for (let i = 0; i < videoData.length; i += chunkSize) {
    chunkedData.push(videoData.slice(i, i + chunkSize));
  }
  // crud
  const [newTitle, setNewTitle] = useState("");
  const [newDescrip, setNewDescrip] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState("");
  // const [cours, setCours] = useState([]);
  const coursCollectionRef = collection(db, "cours");

  const createCours = async () => {
    addDoc(coursCollectionRef, {
      title: newTitle,
      descrip: newDescrip,
      videoUrl: newVideoUrl,
    });
    setNewTitle("");
    setNewDescrip("");
    setNewVideoUrl("");
    alert("Cours " + newTitle + " ajouter");
  };

  return (
    <div className="container">
      <TitreCarte
        titreCours={"HTML5 / CSS3"}
        onClick={createCours}
        valueTitle={newTitle}
        valueDescrip={newDescrip}
        valueUrl={newVideoUrl}
      />

      {chunkedData.map((chunk, rowIndex) => (
        <div className="row" key={rowIndex}>
          {chunk.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              descrip={data.descrip}
              videoUrl={data.videoUrl}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CarteSousCours;
