import React from 'react'
import CardCours from '../components/cardCours/CardCours'
import javaScript from "../data/js.png"
import react from "../data/react.png"
import angular from "../data/angulare.png"
import htmlCss from "../data/HTML&CSS.png"
import python from "../data/téléchargement.png"
import nodeJs from "../data/NodeJS.png"

const Cours = () => {
  return (
    <div className="bg-white m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl"  >
      <h1 className='p-5 text-center font-bold text-5xl'>Les Modules</h1>
      <div className='container'>
        <div className="columns-2 flex justify-between">
          <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-1/4 border border-slate-500 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 sm:text-sm" placeholder="Rechercher..." type="text" name="search" />
          <button className='rounded-md text-white font-semibold bg-orange-700 px-5 py-2'>Ajouter un cours</button>
        </div>
      </div>
      <div className="container my-10">
        <div className="columns-2 md:columns-3 flex justify-around">
          <div className="">
            <a href="#">
              <CardCours img={javaScript} title={'JavaScript'} dure={"6h"} niveau={"facile"} />
            </a>
          </div>
          <div className="">
            <a href="#">
              <CardCours img={react} title={'React'} />
            </a>
          </div>
          <div className="">
            <a href="#">
              <CardCours img={angular} title={'Angular'} />
            </a>
          </div>
          <div className="">
            <a href="#">
              <CardCours img={htmlCss} title={'Html & CSS'} />
            </a>
          </div>
          <div className="">
            <a href="#">
              <CardCours img={python} title={'Python'} />
            </a>
          </div>
          <div className="">
            <a href="#">
              <CardCours img={nodeJs} title={'Node JS'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cours
