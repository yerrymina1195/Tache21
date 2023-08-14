import {React, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { cardDataDesign } from "../../data/need";
import { BiEditAlt, BiArchive } from "react-icons/bi";

  
  const Card = ({ title, descrip, videoUrl }) => {
    return (
      <div className="col-md-4 mb-5">
        <div className="card border-0 shadow carteCours ">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            <iframe
              width="100%"
              height="200"
              src={videoUrl.replace("watch?v=", "embed/")}
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
    const [videoData, setVideoData] = useState(cardDataDesign); 
  
    const chunkedData = [];
    const chunkSize = 3;
  
    for (let i = 0; i < videoData.length; i += chunkSize) {
      chunkedData.push(videoData.slice(i, i + chunkSize));
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
                videoUrl={data.videoUrl} 
              />
            ))}
          </div>
        ))}
      </div>
    );
  };
  

export default CarteSousCours;
