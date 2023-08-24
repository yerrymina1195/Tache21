import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../data/avatar.jpg";
import { BiEditAlt, BiArchive } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";


const tabData = [
  {
    profil: <img src={img} alt="Mama" className="img" />,
    nom: 'Gadiaga',
    prenom: 'Mama',
    telephone: '776700066',
    email: 'mama237@gmail.com',
    domaine: 'Programmation',
  },
  {
  profil: <img src={img} alt="Makhan" className="img" />,
  nom: 'Diakho',
  prenom: 'Makhan',
  telephone: '776828326',
  email: 'diakho@gmail.com',
  domaine: 'Programmation',
},
{
  profil: <img src={img} alt="Faye" className="img" />,
  nom: 'Faye',
  prenom: 'Diakho',
  telephone: '770846728',
  email: 'faye62@gmail.com',
  domaine: 'Marketing',
},
{
  profil: <img src={img} alt="Absa" className="img" />,
  nom: 'Ndiaye',
  prenom: 'Absa',
  telephone: '706828326',
  email: 'ndiaye@gmail.com',
  domaine: 'Design',
},
{
  profil: <img src={img} alt="Beye" className="img" />,
  nom: 'Fallou',
  prenom: 'Beye',
  telephone: '753283803',
  email: 'fallou92@gmail.com',
  domaine: 'Design',
},
{
  profil: <img src={img} alt="Fanta" className="img" />,
  nom: 'Mbaye',
  prenom: 'Fanta',
  telephone: '763652602',
  email: 'fantambaye.com',
  domaine: 'Programmation',
},
{
  profil: <img src={img} alt="Gadiaga" className="img" />,
  nom: 'Gadiaga',
  prenom: 'Mama',
  telephone: '776700066',
  email: 'mama237@gmail.com',
  domaine: 'Programmation',
},
{
  profil: <img src={img} alt="imag2" className="img" />,
  nom: 'Diakho',
  prenom: 'Makhan',
  telephone: '776828326',
  email: 'diakho@gmail.com',
  domaine: 'Programmation',
},
{
  profil: <img src={img} alt="image3" className="img" />,
  nom: 'Faye',
  prenom: 'Diakho',
  telephone: '770846728',
  email: 'faye62@gmail.com',
  domaine: 'Marketing',
},
{
  profil: <img src={img} alt="image4" className="img" />,
  nom: 'Ndiaye',
  prenom: 'Absa',
  telephone: '706828326',
  email: 'ndiaye@gmail.com',
  domaine: 'Design',
},
{
  profil: <img src={img} alt="image5" className="img" />,
  nom: 'Fallou',
  prenom: 'Beye',
  telephone: '753283803',
  email: 'fallou92@gmail.com',
  domaine: 'Design',
},
{
  profil: <img src={img} alt="image6" className="img" />,
  nom: 'Mbaye',
  prenom: 'Fanta',
  telephone: '763652602',
  email: 'fantambaye.com',
  domaine: 'Programmation',
},
{
  profil: <img src={img} alt="image7" className="img" />,
  nom: 'Gadiaga',
  prenom: 'Mama',
  telephone: '776700066',
  email: 'mama237@gmail.com',
  domaine: 'Programmation',
},
{
  profil: <img src={img} alt="image8" className="img" />,
  nom: 'Diakho',
  prenom: 'Makhan',
  telephone: '776828326',
  email: 'diakho@gmail.com',
  domaine: 'Programmation',
},
{
  profil: <img src={img} alt="image9" className="img" />,
  nom: 'Faye',
  prenom: 'Diakho',
  telephone: '770846728',
  email: 'faye62@gmail.com',
  domaine: 'Marketing',
},
{
  profil: <img src={img} alt="image11" className="img" />,
  nom: 'Ndiaye',
  prenom: 'Absa',
  telephone: '706828326',
  email: 'ndiaye@gmail.com',
  domaine: 'Design',
},
{
  profil: <img src={img} alt="image12" className="img" />,
  nom: 'Fallou',
  prenom: 'Beye',
  telephone: '753283803',
  email: 'fallou92@gmail.com',
  domaine: 'Design',
},
{
  profil: <img src={img} alt="image13" className="img" />,
  nom: 'Mbaye',
  prenom: 'Fanta',
  telephone: '763652602',
  email: 'fantambaye.com',
  domaine: 'Programmation',
},

];

const tabColumns = {
  profil: 'Profil',
  nom: 'Nom',
  prenom: 'Prenom',
  telephone: 'Telephone',
  email: 'Email',
  domaine: 'Domaine',
  actions: 'Actions',
};

const ProfTable = ({ data = tabData, columns = tabColumns }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");

  const totalPages = data ? Math.ceil(data.length / rowsPerPage) : 0;
  const startIndex = (currentPage - 1) * rowsPerPage;  
  const filteredData = data.filter(
    (item) =>
      item.nom.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.prenom.toLowerCase().includes(searchValue.toLowerCase())
  );

  const visibleData = filteredData.slice(
    startIndex,
    startIndex + rowsPerPage
  );
  

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
    setCurrentPage(1); 
  };
  

  return (
    <div className="container mt-4">
   <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <h3 className="listEleve">Liste des coachs</h3>
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
      <div className="table-responsive overflow-hidden mt-5">
        <table class="table table-light table-hover">
          <thead className="">
            <tr>
              {Object.values(columns).map((columnTitle, index) => (
                <th key={index}>{columnTitle}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            
            {visibleData.map((item, index) => (
              <tr key={index}>
                {Object.keys(columns).map((columnKey, columnIndex) => (
                  <td key={columnIndex}>
                    {columnKey === "actions" ? (
                      <div>
                        <div className="row">
                          <div className="col">
                            <button className="btn me-3 btn-sm prev">
                              <BiEditAlt className="text-white" />
                            </button>
                            <button className=" me-3 btn btn-sm prev">
                              <BiArchive className=" text-white" /> </button>
                            <button className="btn  me-3 btn-sm prev">
                              <AiFillDelete className="text-white" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      item[columnKey]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 row">
       <div className="col-md-6"> <nav aria-label="Page navigation">
          <ul className="pagination">
            <li
              className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
            >
              <a
                className="page-link shadow-none text-decoration-none text-black"
                href="/"
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
                  href="/"
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
                href="/"
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
            Ligne(s)/Page: {rowsPerPage}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdown-rows-per-page">
            <li>
              <a
                className="dropdown-item"
                href="/"
                onClick={() => handleRowsPerPageChange(1)}
              >
                1
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/"
                onClick={() => handleRowsPerPageChange(5)}
              >
                5
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/"
                onClick={() => handleRowsPerPageChange(10)}
              >
                10
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/"
                onClick={() => handleRowsPerPageChange(15)}
              >
                15
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfTable;

