import React from "react";
import canva from "../../../data/designs/1.png";
import figma from "../../../data/designs/2.png";
import Sousdomaine from "../sousdomaine/Sousdomaine";

const Design = () => {
  const sousdomaines = [
    {
      name: "design",
      title: "canva",
      image: canva,
    },
    {
      name: "design",
      title: "figma",
      image: figma,
    },
  ];
  return (
    <div>
      <h1 className="fs-1 text-center my-5 text-black">
        contenue de la partie Design
      </h1>
      <div className="container">
        <div className="row row-gap-5">
          {sousdomaines.map((sousdomaine) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Sousdomaine
                links={`/cours/${sousdomaine.name}/${sousdomaine.title}`}
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

export default Design;
