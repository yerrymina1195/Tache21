import React from 'react';
import htmlcss from "../../../data/programmation/HTML&CSS.png";
import nodejs from "../../../data/programmation/NodeJS.png";
import angulare from "../../../data/programmation/angulare.png";
import js from "../../../data/programmation/js.png";
import react from "../../../data/programmation/react.png";
import python from "../../../data/programmation/téléchargement.png";
import { Link, Outlet } from 'react-router-dom';
import Sousdomaine from '../sousdomaine/Sousdomaine';

const Programmation = () => {

  const sousdomaines = [
    {
      title: "HTML & CSS",
      image: htmlcss
    },
    {
      title: "Node js",
      image: nodejs
    },
    {
      title: "Angulare",
      image: angulare
    },
    {
      title: "JavaScript",
      image: js
    },
    {
      title: "React js",
      image: react
    },
    {
      title: "Python",
      image: python
    }
  ]

  return (
    <div>
      <h1 className='fs-1 text-center my-5 text-black'>
        contenue de la partie programmation
      </h1>
      <div className="container">
        <div className="row row-gap-5">
          {sousdomaines.map(sousdomaine => (
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Sousdomaine
                className=''
                img={sousdomaine.image}
                title={sousdomaine.title}
              />
            </div>
          ))}
          <Outlet />
        </div>
      </div>
    </div >
  )
}

export default Programmation