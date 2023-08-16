import React from "react";
import { Link } from "react-router-dom";
import nodejs from "../../../data/NodeJS.png";
import htmlcss from "../../../data/HTML&CSS.png";
import Sousdomaine from "../sousdomaine/Sousdomaine";

const Marketing = () => {
  const sousdomaines = [
    {
      name: "marketing",
      title: "INITIATION",
      image: nodejs,
    },
    {
      name: "marketing",
      title: "ETUDE DE MARCHE",
      image: htmlcss,
    },
  ];
  return (
    <div>
      <h1 className="fs-1 text-center my-5 text-black">
        contenue de la partie Marketing
      </h1>
      <div className="container">
        <div className="row row-gap-5">
          {sousdomaines.map((sousdomaine) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Sousdomaine
                links={`${sousdomaine.title}`}
                img={sousdomaine.image}
                title={sousdomaine.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketing;
