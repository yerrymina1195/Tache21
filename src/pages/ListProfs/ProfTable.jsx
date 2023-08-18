import React from "react";
import img from "../../data/avatar.jpg";
import { BiEditAlt, BiArchive } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ProfTable = () => (
  <div>
    <div className="table-responsive mt-5">
      <table class="table table-hover ms-3">
        <thead>
          <tr className="mb-3">
            <th scope="col">Photo</th>
            <th scope="col">Prenom</th>
            <th scope="col">Nom</th>
            <th scope="col">Tel</th>
            <th scope="col">Email</th>
            <th scope="col">Domaine</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <img src={img} alt="image" className="img" />
            <td>Rama</td>
            <td>Fall</td>
            <td>776226593</td>
            <td>ramafall@gmail.com</td>
            <td>Programmation</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>Mama</td>
            <td>Fall</td>
            <td>77878655</td>
            <td>mama@gmail.com</td>
            <td>Programmation</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>latyr</td>
            <td>sene</td>
            <td>765439800</td>
            <td>latyr@gmail.com</td>
            <td>design</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>mouhamed</td>
            <td>niang</td>
            <td>707653421</td>
            <td>niang@gmail.com</td>
            <td>marketing</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>mahan</td>
            <td>diaho</td>
            <td>777777777</td>
            <td>diaho@gmail.com</td>
            <td>desin</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>fatou</td>
            <td>Fall</td>
            <td>786543208</td>
            <td>fall@gmail.com</td>
            <td>Programmation</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>baba</td>
            <td>thiam</td>
            <td>765432123</td>
            <td>baba@gmail.com</td>
            <td>design</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>astou</td>
            <td>sall</td>
            <td>789654321</td>
            <td>astou@gmail.com</td>
            <td>marketing</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>abou</td>
            <td>ly</td>
            <td>708976543</td>
            <td>abou@gmail.com</td>
            <td>design</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>mouhamed</td>
            <td>loum</td>
            <td>776543234</td>
            <td>loum@gmail.com</td>
            <td>Programmation</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>faby</td>
            <td>diagne</td>
            <td>789087656</td>
            <td>faby@gmail.com</td>
            <td>marketing</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>absa</td>
            <td>diop</td>
            <td>765432123</td>
            <td>absa@gmail.com</td>
            <td>Programmation</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>abib</td>
            <td>lo</td>
            <td>765435678</td>
            <td>abib@gmail.com</td>
            <td>design</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>fama</td>
            <td>sy</td>
            <td>765432340</td>
            <td>fama@gmail.com</td>
            <td>marketing</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>samba</td>
            <td>Fall</td>
            <td>786540908</td>
            <td>samba@gmail.com</td>
            <td>design</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>awa</td>
            <td>lo</td>
            <td>765439807</td>
            <td>awa@gmail.com</td>
            <td>Programmation</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>nini</td>
            <td>sene</td>
            <td>767676776</td>
            <td>nini@gmail.com</td>
            <td>marketing</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>mass</td>
            <td>ly</td>
            <td>709876543</td>
            <td>mass@gmail.com</td>
            <td>design</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>fatou</td>
            <td>laye</td>
            <td>776540903</td>
            <td>laye@gmail.com</td>
            <td>Programmation</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>penda</td>
            <td>dia</td>
            <td>775432312</td>
            <td>dia@gmail.com</td>
            <td>marketing</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>badara</td>
            <td>Fall</td>
            <td>786545673</td>
            <td>badara@gmail.com</td>
            <td>design</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
          <tr>
            <img src={img} alt="image" className="img" />
            <td>yacine</td>
            <td>diop</td>
            <td>765430987</td>
            <td>yacine@gmail.com</td>
            <td>Programmation</td>
            <td>
            <td >
              <BiEditAlt className="me-4 icons1" />
            </td>
            <td >
              <BiArchive className="me-4 icons2" />
            </td>
            <td>
              <FaDeleteLeft className="icons3" />
            </td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="mt-3 d-flex float-right">
      <div className="px-3">
      <MdKeyboardDoubleArrowLeft className="preve rounded px-1" /></div>
      <span className="">1</span>
      <div className="ps-3">
      <MdKeyboardDoubleArrowRight className="preve rounded px-1" />
      </div>
      </div>
  </div>
);

export default ProfTable;
