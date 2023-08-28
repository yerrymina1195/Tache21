import React, { useEffect, useState } from "react";
import Domaine from "../components/cardDomaines/Domaine";
import ButtonReutilisable from "../components/ButtonReutilisable";
import { db } from "../Firebase/Firebase";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  getDocs,
  query,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { useStateContext } from "../contexts/ContextProvider";
const Cours = () => {
  const [newDomaine, setNewDomaine] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [domains, setDomains] = useState([]);
  const domaineCollectionRef = collection(db, "domains");
  const { isClicked, handleClick, setIsClicked, initialState } =
    useStateContext();
  // function pour que le formulaire n'accepte pas des chiffres
  const handleInputChange = (event) => {
    const newValue = event.target.value.replace(/[0-9]/g, ""); // Filtrer les chiffres
    setNewDomaine(newValue);
  };
  //function create domaine
  const createDomaine = async () => {
    if (newDomaine === "") {
      setError("Veuillez vérifier le champs et remplir de bon valeur");
      return;
    }
    try {
      addDoc(domaineCollectionRef, { title: newDomaine });
      setNewDomaine("");
      setError("");
      alert("domaine " + newDomaine + " ajouter");
    } catch (error) {
      console.error("Erreur lors de la creation :", error);
    }
  };
  // Modifier domaine
  const editDomaine = async (id, title) => {
    setNewDomaine(title);
    setId(id);
  };
  const updateDomaine = async () => {
    if (newDomaine === "") {
      setError("Veuillez vérifier le champs et remplir de bon valeur");
      return;
    }
    try {
      const updateDomain = doc(db, "domains", id);
      updateDoc(updateDomain, { title: newDomaine });
      setNewDomaine("");
      setError("");
      alert("domaine " + newDomaine + " mise à jour");
    } catch (error) {
      console.error("Erreur lors de la creation :", error);
    }
  };
  // delete doc
  const deleteDomaine = async (id) => {
    const deleteDomain = doc(db, "domains", id);
    await deleteDoc(deleteDomain);
    alert("domaine supprimer");
  };

  useEffect(() => {
    const q = query(collection(db, "domains"));
    onSnapshot(q, (querySnapshot) => {
      const domains = [];
      querySnapshot.forEach((doc) => {
        domains.push(doc.data().title);
      });
      const getDomaines = async () => {
        const data = await getDocs(domaineCollectionRef);
        setDomains(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getDomaines();
    });
  }, [domaineCollectionRef]);
  // const q = query(collection(db, "domains"));
  // useEffect(() => {
  //   const recupdomain= onSnapshot(q, (querySnapshot) => {
  //     const Data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
  //       setDomains(Data);
  //   });
  //   return () => {
  //    recupdomain();
  //   };
  // }, [domaineCollectionRef]);

  return (
    <div>
      <div className="bg-[#ffff] dark:bg-secondary-dark-bg text-[#000] dark:text-gray-200 p-5 rounded-3xl domaine">
        <div className="container ">
          <div className="row d-flex align-items-center mt-5">
            <div className="col-md-6 col-sm-12">
              <h1 className="">Les Domaines</h1>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
              {/* button modal */}
              
              <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <ButtonReutilisable
                  text={"Ajouter un domaine"}
                  onClick={() => handleClick("ajouState")}
                />
              </div>
                
              {/* button modal */}
              {/* Modal */}
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        Ajout de domaine
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => setIsClicked(initialState)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div class="form-floating mb-3">
                        {isClicked.ajouState && (
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Nom du domaine"
                            value={newDomaine}
                            onChange={handleInputChange}
                          />
                        )}
                        {isClicked.modifState && (
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Modifier le domaine"
                            value={newDomaine}
                            onChange={(e) => setNewDomaine(e.target.value)}
                          />
                        )}
                        {/* <label for="floatingInput">Nom du domaine</label> */}
                      </div>
                      {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                    <div className="modal-footer">
                      {isClicked.ajouState && (
                        <ButtonReutilisable
                          text={"Ajouter"}
                          onClick={createDomaine}
                          id="ajouter"
                        />
                      )}
                      {isClicked.modifState && (
                        <ButtonReutilisable
                          text={"Modifier"}
                          onClick={updateDomaine}
                          id="modifier"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5 bg-[#ffff] dark:bg-secondary-dark-bg text-[#ffff] dark:text-gray-200">
          <div className="row row-gap-3">
            {domains.map((domain) => (
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <Domaine
                  title={domain.title}
                  onClick={() => {
                    handleClick("modifState");
                    editDomaine(domain.id, domain.title);
                  }}
                  click={() => deleteDomaine(domain.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cours;
