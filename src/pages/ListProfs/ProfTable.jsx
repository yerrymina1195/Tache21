import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../data/avatar2.jpg";
import { BiEditAlt } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import 'firebase/compat/firestore';
import { getDoc } from "firebase/firestore";
import LabelInput from '../parametres/LabelInput';
import ButtonReutilisable from '../../components/ButtonReutilisable';


function ProfTable() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const [selectedDetails, setSelectedDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((user) => user.statut === "coach");
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", id));
    fetchData();
    alert("Utilisateur supprimé avec succès !!!");
  };

  async function getUserDetails(id) {
    const userRef = doc(db, "users", id);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      setSelectedDetails(docSnap.data());
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

  const handleEdit = async () => {
    try {
      if (!selectedDetails) {
        console.log("Selected Details is null");
        return;
      }

      const userRef = doc(db, "users", selectedDetails.id);
      await updateDoc(userRef, selectedDetails);

    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <h3 className="listProf">LISTE DES ProfS</h3>
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
          <table className="table table-light table-hover">
            <thead>
              <tr className="mb-3">
                <th scope="col">Profil</th>
                <th scope="col">Prenom</th>
                <th scope="col">Nom</th>
                <th scope="col">Telephone</th>
                <th scope="col">Email</th>
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
                  
                  <td>{datas.domaine}</td>
                  <td>

                    <div className="row">
                      <div className="col">
                        <button className="btn me-3 btn-sm prev">
                          <TbListDetails className="text-white" onClick={() => getUserDetails(datas.id)} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                        </button>
                        <button
                  className="btn me-3 btn-sm prev"
                  onClick={() => getUserDetails(datas.id)} data-bs-toggle="modal" data-bs-target="#exampleModale" // Appel de openEditModal avec l'ID de l'utilisateuer
                >
                  <BiEditAlt className=" text-white" />
                </button>
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
                <button type='button'  className="page-link shadow-none text-decoration-none text-black"
                  onClick={() => handlePageChange(currentPage - 1)}>Pre</button>
              </li>
              {Array.from({ length: totalPages }).map((_, index) => (
                <li
                  key={index}
                  className={`page-item text-decoration-none ${index + 1 === currentPage ? "active" : ""
                    }`}
                >
                  <button type='button'   className="page-link color1 text-decoration-none shadow-none text-black"
                    onClick={() => handlePageChange(index + 1)}> {index + 1}</button>
                   
                </li>
              ))}
              <li
                className={`page-item ${currentPage === totalPages ? "disabled" : ""
                  }`}
              >
                <button type='button'  className="page-link shadow-none text-decoration-none text-black"
                  onClick={() => handlePageChange(currentPage + 1)}>Suiv</button>
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
                  <button type='button'  className="dropdown-item"
                    onClick={() => handleRowsPerPageChange(1)}>1</button>
                </li>
                <li>
                  <button type='button'  className="dropdown-item"
                    onClick={() => handleRowsPerPageChange(5)}>5</button>
                </li>
                <li>
                  <button type='button' className="dropdown-item"
                    onClick={() => handleRowsPerPageChange(10)}>10</button>
                </li>
                <li>
                <button type='button' className="dropdown-item"
                    onClick={() => handleRowsPerPageChange(15)}>15</button>
                </li>
              </ul>
            </div>
          </div>
        </div>




        {/* MODAL DETAILS */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">les details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {selectedDetails && (
                  <div>
                    <p className='d-flex'>
                      <strong>Photo:</strong>
                      <img src={img} alt="Userphoto" className="img mx-auto" />
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Prenom:</strong>
                      <div className='mx-auto'>
                        {selectedDetails.prenom}
                      </div>
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Nom:</strong>
                      <span className='mx-auto'>
                        {selectedDetails.nom}
                      </span>
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Telephone:</strong>
                      <span className="mx-auto">
                        {selectedDetails.telephone}
                      </span>
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Email:</strong>
                      <span className="mx-auto">
                        {selectedDetails.email}
                      </span>
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Coach:</strong>
                      <span className="mx-auto">
                        {selectedDetails.statut}
                      </span>
                    </p>
                    <hr />
                    <p className='d-flex'>
                      <strong>Domaine:</strong>
                      <span className="mx-auto">
                        {selectedDetails.domaine}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>









        {/* MODAL modifier */}
        <div className="modal fade" id="exampleModale" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">les details</h5>
              </div>
              <div>
                <div className="container-xl px-4 mt-4">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card">
                        <div className="card-header  dark:bg-secondary-dark-bg text-white dark:text-gray-200">Modifier un Prof</div>

                        <div className="card-body bg-[#ffff] dark:bg-secondary-dark-bg text-[#ffff] dark:text-gray-200">
                          <form>
                            <div className="row gx-3 mb-3">
                              <div className="col-md-6">
                                <LabelInput id="inputLatestName" label="Prenom" type="text"
                                  name="prenom"
                                  value={selectedDetails?.prenom || ""}
                                  onChange={(e) => setSelectedDetails({ ...selectedDetails, prenom: e.target.value })}


                                />
                                
                              </div>
                              <div className="col-md-6">
                                <LabelInput id="inputFirstName" label="Nom" placeholder="Gadiaga" type="text"
                                  name="nom"
                                  value={selectedDetails?.nom || ""}
                                  onChange={(e) => setSelectedDetails({ ...selectedDetails, nom: e.target.value })}
                                />
                               
                              </div>
                            </div>

                            <div className="row gx-3 mb-3">
                              <div className="col-md-6">
                                <LabelInput id="inputEmailAddress" label="Adresse email" placeholder="example@gmail.com" type="email"
                                  name="email"
                                  onChange={(e) => setSelectedDetails({ ...selectedDetails, email: e.target.value })}
                                  value={selectedDetails?.email || ""}

                                />
                                
                              </div>
                              <div className="col-md-6">
                                <LabelInput id="inputPhone" label="Numero telephone" placeholder="77 670 00 66" type="tel"
                                  name="telephone"
                                  onChange={(e) => setSelectedDetails({ ...selectedDetails, telephone: e.target.value })}
                                  value={selectedDetails?.telephone || ""}

                                />
                               
                              </div>
                            </div>

                            <div className="row gx-3 mb-3">
                              <div className="col-md-6">
                                <LabelInput id="mdp" label="Mot de pass" placeholder="mot de pass" type="password"
                                  name="mdp"
                                  onChange={(e) => setSelectedDetails({ ...selectedDetails, mdp: e.target.value })}
                                  value={selectedDetails?.mdp || ""}

                                />
                        
                              </div>
                              <div className="col-md-6">
                                <LabelInput id="inputDomicile" label="Adresse de domicile" placeholder="Colobane Parc Amazout" type="text"
                                  name="address"
                                  onChange={(e) => setSelectedDetails({ ...selectedDetails, address: e.target.value })}
                                  value={selectedDetails?.address || ""}

                                />
                             
                              </div>
                            </div>
                            {/* <div class="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="select">Rôle</label>
                                            <select className="form-select shadow-none" aria-label="Default select example"
                                                name="statut"
                                                onChange={handelchange}
                                                value={statut}
                                                >
                                                <option selected >Choisir un rôle</option>
                                                <option value="Admin">Admin</option>
                                                <option value="Coach">Coach</option>
                                                <option value="Elève">Elève</option>
                                            </select>
                                            <p className="text-danger">{errors.statut}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="select">Domaine à suivre</label>
                                            <select className="form-select shadow-none" aria-label="Default select example"
                                                name="domaine"
                                                onChange={handelchange}
                                                value={domaine}
                                                >
                                                <option selected >Choisir un domaine</option>
                                                <option value="Programmation">Programmation</option>
                                                <option value="Design">Design</option>
                                                <option value="Marketing Digital">Marketing Digital</option>
                                            </select>
                                            <p className="text-danger">{errors.domaine}</p>
                                        </div>

                                    </div> */}
                            {/* <div className='text-center'>
                                        <ButtonReutilisable text='' onClick={onSubmit} />
                                    </div> */}
                            <div className='text-center'>
                              <ButtonReutilisable text='Modifier' onClick={handleEdit} />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>









      </div>
    </div>
  );
}

export default ProfTable;

