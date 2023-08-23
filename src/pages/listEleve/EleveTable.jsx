import React, { useState, useEffect } from 'react';
import img from "../../data/avatar2.jpg";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiEditAlt, BiArchive } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
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




function EleveTable() {
  const [users, setUsers] = useState([]);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [domaine, setDomaine] = useState("");
  const [status, setStatus] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);



  // recuperation
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs.map((doc) => doc.data(), doc.id);
    setUsers(data);
  };
  console.log(users);
  // supprime

  const handleDelete = async (id) => {

    await deleteDoc(doc(db, "users", id));
    fetchData()
    alert("Utilisateur supprimé avec succés !!!")
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   {
  //     if (isEditing) {
  //       const updatedUsers = [...users];
  //       const editedUser = updatedUsers[editIndex];
  //       editedUser.prenom = prenom;
  //       editedUser.nom = nom;
  //       editedUser.email = email;
  //       editedUser.domaine = domaine;
  //       editedUser.status = status;
  //       setUsers(updatedUsers);
  //     } else {
  //       setUsers((prevUsers) => [
  //         ...prevUsers,
  //         {
  //           prenom,
  //           nom,
  //           email,
  //           domaine,
  //           status,
  //           completed: false,
  //         },
  //       ]);
  //     }

  //     setPrenom("");
  //     setNom("");
  //     setEmail("");
  //     setStatus("");
  //     setDomaine("");


  //   }
  // };



  // const handleEdit = (index) => {
  //   const user = users[index];
  //   setPrenom(user.prenom);
  //   setNom(user.nom);
  //   setEmail(user.email);
  //   setDomaine(user.domaine);
  //   setStatus(user.status);
  //   setIsEditing(true);
  //   setEditIndex(index);
  // };


  async function getUserDetails(id) {
    const userRef = doc(db, "users", id);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      console.log("Document donnees:", docSnap.data(), docSnap.id);
      setShowModal(true);
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div>
      <div>
        <h1 className="listEleve text-center mb-5">Liste des eleves</h1>
        <div className='container'>



        </div>
        <div>
          <input
            className="form-control me-2 w-50 mx-auto  search"
            type="search"
            placeholder="recherche"
            aria-label="Search"
          ></input>

        </div>

        <div className="table-responsive mt-5">
          <table class="table table-hover bg-white ms-3">
            <thead>
              <tr className="mb-3">
                <th scope="col">Photo</th>
                <th scope="col">Prenom</th>
                <th scope="col">Nom</th>
                <th scope="col">Tel</th>
                <th scope="col">Email</th>
                <th scope="col">Coach</th>
                <th scope="col">Domaine</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((datas, index) => (
                <tr key={index}>
                  <td>{<img src={img} className="img" alt="User Avatar" />}</td>
                  <td>{datas.prenom}</td>
                  <td>{datas.nom}</td>
                  <td>{datas.telephone}</td>
                  <td>{datas.email}</td>
                  <td>{datas.statut}</td>
                  <td>{datas.domaine}</td>
                  <td>
                    <td>

                      <BiEditAlt
                        onClick={() => getUserDetails(datas.id)}
                        className="me-4 icons1"
                      />
                    </td>
                    <td>
                      <BiArchive className="me-4 icons2" />
                    </td>
                    <td>
                      <FaDeleteLeft
                        onClick={() => handleDelete(datas.id)}
                        className="icons3"
                      />
                    </td>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 d-flex float-right">
          <div className="px-3">
            <MdKeyboardDoubleArrowLeft className="preve rounded px-1" />
          </div>
          <span className="">1</span>
          <div className="ps-3">
            <MdKeyboardDoubleArrowRight className="preve rounded px-1" />
          </div>
        </div>
        <div
            className="modal fade mt-[100px] "
            id="exampleModale"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            show={showModal}
            onHide={handleCloseModal}
          >
            <div className="modal-dialog ">
              <div className="modal-content ">
                <div className="modal-header ">
                  <h1 className="modal-title fs-5 " id="exampleModalLabel">
                    Voir les details de l eleve
                  </h1>
                  <button
                    type="button"
                    className="btn-close text-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >ooooooooo</button>
                </div>
                <div className="modal-body ">
                <tbody>
              {users.map((datas, index) => (
                <tr key={index}>
                  <td>{<img src={img} className="img" alt="User Avatar" />}</td>
                  <td>{datas.prenom}</td>
                  <td>{datas.nom}</td>
                  <td>{datas.telephone}</td>
                  <td>{datas.email}</td>
                  <td>{datas.statut}</td>
                  <td>{datas.domaine}</td>
                </tr>
              ))}
            </tbody>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default EleveTable;



