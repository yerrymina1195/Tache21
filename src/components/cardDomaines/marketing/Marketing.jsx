import React from "react";
import INITIATION from "../../../data/marketing/3.png";
import etudeDeMarche from "../../../data/marketing/4.png";
import Sousdomaine from "../sousdomaine/Sousdomaine";

const Marketing = () => {
  const sousdomaines = [
    {
      name: "marketing",
      title: "INITIATION",
      image: INITIATION
      ,
    },
    {
      name: "marketi  ng",
      title: "ETUDE DE MARCHE",
      image: etudeDeMarche
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
