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
    <div className="bg-[#ffff]  dark:bg-main-dark-bg   text-[#ffff] dark:text-gray-200m-5 p-5 rounded-3xl domaine">

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

export default Design;
