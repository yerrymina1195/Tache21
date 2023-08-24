import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../data/avatar2.jpg";
import './Eleve.css';
import { BiEditAlt } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  where
} from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getDoc } from "firebase/firestore";
import ModifierEleve from "./ModifierEleve"

function EleveTable() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [domaine, setDomaine] = useState("");
  const [address, setAdress] = useState("");
  const [mdp, setMdp] = useState("");
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs
    .map((doc) => doc.data(), doc.id)
    .filter((users) => users.statut === "eleve");
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", id));
    fetchData();
    alert("Utilisateur supprimé avec succès !!!");
  };

  // const getUserDetails = async (id) => {
  //   const userRef = doc(db, "users", id);
  //   const docSnap = await getDoc(userRef);
  //   if (docSnap.exists()) {
  //     console.log("Document données:", docSnap.data(), docSnap.id);
  //     setShowModal(true);
  //   } else {
  //     console.log("No such document!");
  //   }
  // };
  async function getUserDetails(id) {
    const userRef = doc(db, "users", id);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      console.log("Document donnees:", docSnap.data(), docSnap.id);
      setSelectedUserDetails(docSnap.data());

      console.log("ppppp" + docSnap.data());
    } else {
      console.log("No such document!");
    }
  }


  const totalPages = users ? Math.ceil(users.length / rowsPerPage) : 0;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const filteredData = users.filter(
    (item) =>
      item.nom.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.prenom.toLowerCase().includes(searchValue.toLowerCase())
  );
  const visibleData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setCurrentPage(1);
  };

  const [selectedDetails, setSelectedDetails] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    domaine: "",
    address: "",
    mdp: "",
  });

  const handleEdit = () => {
    const updatedUserDetails = {
      prenom: prenom,
      nom: nom,
      telephone: telephone,
      email: email,
      domaine: domaine,
      address: address,
    };
    setSelectedDetails(updatedUserDetails);
  };


  return (
    <div>
      <div className="container mt-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <h3 className="listEleve">LISTE DES ELEVES</h3>
          </div>
          <div className="col-md-6 text-lg-end text-md-end text-sm-start">
            <input
              type="search"
              className="form-control shadow-none"
              placeholder="Rechercher..."
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="table-responsive overflow-hidden rounded-3 mt-5">
          <table class="table table-light table-hover">
            <thead>
              <tr className="mb-3">
                <th scope="col">Profil</th>
                <th scope="col">Prenom</th>
                <th scope="col">Nom</th>
                <th scope="col">Telephone</th>
                <th scope="col">Email</th>
                <th scope="col">Coach</th>
                <th scope="col">Domaine</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((datas, index) => (
                <tr key={index}>
                  <td>
                    {<img src={img} className="img" alt="User Avatar" />}
                  </td>
                  <td>{datas.prenom}</td>
                  <td>{datas.nom}</td>
                  <td>{datas.telephone}</td>
                  <td>{datas.email}</td>
                  <td>{datas.statut}</td>
                  <td>{datas.domaine}</td>
                  <td>

                    <div className="row">
                      <div className="col">
                        <button className="btn me-3 btn-sm prev">
                          <TbListDetails className="text-white" onClick={() => getUserDetails(datas.id)}  data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        </button>
                        <button className=" me-3 btn btn-sm prev">
                          <BiEditAlt className=" text-white"  data-bs-toggle="modal" data-bs-target="#exampleModale"/> </button>
                        <button className="btn  me-3 btn-sm prev">
                          <AiFillDelete className="text-white" onClick={() => handleDelete(datas.id)} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* PAGINATION */}
        <div className="mt-3 row">
          <div className="col-md-6"> <nav aria-label="Page navigation">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <a
                  className="page-link shadow-none text-decoration-none text-black"
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Pre
                </a>
              </li>
              {Array.from({ length: totalPages }).map((_, index) => (
                <li
                  key={index}
                  className={`page-item text-decoration-none ${index + 1 === currentPage ? "active" : ""
                    }`}
                >
                  <a
                    className="page-link color1 text-decoration-none shadow-none text-black"
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li
                className={`page-item ${currentPage === totalPages ? "disabled" : ""
                  }`}
              >
                <a
                  className="page-link shadow-none text-decoration-none text-black"
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Suiv
                </a>
              </li>
            </ul>
          </nav>
          </div>

          <div className="col-md-5 ms-md-5 ms-sm-0 ms-lg-5 text-lg-end text-md-end text-sm-start">
            <div className="dropdown">
              <button
                className="btn text-black dropdown-toggle"
                type="button"
                id="dropdown-rows-per-page"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ligne(s) / Page: {rowsPerPage}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdown-rows-per-page">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleRowsPerPageChange(1)}
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleRowsPerPageChange(5)}
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleRowsPerPageChange(10)}
                  >
                    10
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleRowsPerPageChange(15)}
                  >
                    15
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


      
      
        {/* MODAL DETAILS */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">les details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {selectedUserDetails && (
                  <div>
                    <p className='d-flex'>
                      <strong>Photo:</strong>
                      <img src={img} alt="User Photo" className="img mx-auto" />
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Prenom:</strong>
                      <div className='mx-auto'>
                        {selectedUserDetails.prenom}
                      </div>
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Nom:</strong>
                      <span className='mx-auto'>
                        {selectedUserDetails.nom}
                      </span>
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Telephone:</strong>
                      <span className="mx-auto">
                        {selectedUserDetails.telephone}
                      </span>
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Email:</strong>
                      <span className="mx-auto">
                        {selectedUserDetails.email}
                      </span>
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Coach:</strong>
                      <span className="mx-auto">
                        {selectedUserDetails.statut}
                      </span>
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Domaine:</strong>
                      <span className="mx-auto">
                        {selectedUserDetails.domaine}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>









  {/* MODAL modifier */}
  <div class="modal fade" id="exampleModale" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">les details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
                 <ModifierEleve />
            </div>
          </div>
        </div>









      </div>
    </div>
  );
}

export default EleveTable;
