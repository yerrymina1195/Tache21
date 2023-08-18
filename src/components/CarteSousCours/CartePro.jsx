import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { cardDataPro } from "../../data/need";
import { BsPencilSquare, BsArchiveFill } from "react-icons/bs";

const Card = ({ title, descrip, videoUrl }) => {
  return (
    <div className="domaine">
      <div className="card mx-md-5 border-0 shadow">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <iframe
            width="100%"
            height="400"
            src={videoUrl.replace("watch?v=","embed/")}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            className="rounded-top"
          ></iframe>
        </a>
        <div className="card-body">
          <a href="#" className="text-decoration-none text-black titre">
            <h5 className="card-title">{title}</h5>
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
  const [videoData, setVideoData] = useState(cardDataPro);

  const chunkedData = [];
  const chunkSize = 3;

  for (let i = 0; i < videoData.length; i += chunkSize) {
    chunkedData.push(videoData.slice(i, i + chunkSize));
  }

  return (
    <div className="container">
      {chunkedData.map((chunk, rowIndex) => (
        <div className="row" key={rowIndex}>
          {chunk.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              descrip={data.descrip}
              image={data.image}
              videoUrl={data.videoUrl}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CarteSousCours;
