import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { cardDataMarketing } from "../../data/need";
import { BsPencilSquare, BsArchiveFill } from "react-icons/bs";

const Card = ({ title, descrip, videoUrl }) => {
  return (
    <div className="domaine dark:bg-secondary-dark-bg dark:text-gray-200 ">
      <div className="card mx-md-5 border-0 shadow ">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <iframe
            width="100%"
            height="400"
            src={videoUrl.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            className="rounded-top"
          ></iframe>
        </a>
        <div className="card-body dark:bg-main-dark-bg dark:text-gray-200 dark:drop-shadow-[0_8px_0px_rgba(255,255,255,0.25)]">
          <a href="/" className="text-decoration-none text-black titre">
            <h5 className="card-title rest2 dark:text-[#ffff]">{title}</h5>
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
  // eslint-disable-next-line
  const [videoData, setVideoData] = useState(cardDataMarketing);

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
