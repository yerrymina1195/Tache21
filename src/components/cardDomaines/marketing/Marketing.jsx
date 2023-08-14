import React from "react";
import htmlcss from "../../../data/programmation/HTML&CSS.png";
import nodejs from "../../../data/programmation/NodeJS.png";
import angulare from "../../../data/programmation/angulare.png";
import js from "../../../data/programmation/js.png";
import react from "../../../data/programmation/react.png";
import python from "../../../data/programmation/téléchargement.png";
import { Link } from "react-router-dom";
import Sousdomaine from "../sousdomaine/Sousdomaine";

const Marketing = () => {
  const sousdomaines = [
    {
        name: "marketing",
        title: "HTML & CSS",
        image: htmlcss,
      },
      {
        name: "marketing",
        title: "Node js",
        image: nodejs,
      },
      {
        name: "marketing",
        title: "Angulare",
        image: angulare,
      },
      {
        name: "marketing",
        title: "JavaScript",
        image: js,
      },
      {
        name: "marketing",
        title: "React js",
        image: react,
      },
      {
        name: "marketing",
        title: "Python",
        image: python,
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
              <Link
                to={`/cours/${sousdomaine.name}/${sousdomaine.title}`}
                className="text-decoration-none"
              >
                <Sousdomaine
                  className=""
                  img={sousdomaine.image}
                  title={sousdomaine.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketing;
