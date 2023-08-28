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
  serverTimestamp,
} from "firebase/firestore";
import { useStateContext } from "../contexts/ContextProvider";
const Cours = () => {
  const [newDomaine, setNewDomaine] = useState("");
  const [newSousDomaine, setNewSousDomaine] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescrip, setNewDescrip] = useState("");
  const [newDure, setNewDure] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [domains, setDomains] = useState([]);
  const domaineCollectionRef = collection(db, "domains");
  const sousDomaineCollectionRef = collection(db, "sousDomains");
  const coursCollectionRef = collection(db, "cours");

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
      const docRef = await addDoc(domaineCollectionRef, {
        title: newDomaine,
        timeStamp: serverTimestamp(),
      });

      await updateDoc(doc(domaineCollectionRef, docRef.id), { id: docRef.id });
    } catch (error) {
      console.error("Erreur lors de la creation :", error);
    }
  };
  // function create sous-domaines
  const createSousDomaines = async () => {
    if (newSousDomaine === "") {
      setError("Veuillez vérifier le champs et remplir de bon valeur");
      return;
    }
    try {
      const docRef = await addDoc(sousDomaineCollectionRef, {
        title: newSousDomaine,
        domaine: newDomaine,
        timeStamp: serverTimestamp(),
      });
      await updateDoc(doc(sousDomaineCollectionRef, docRef.id), {
        id: docRef.id,
      });
    } catch (error) {
      console.error("Erreur lors de la creation :", error);
    }
  };

  const createCours = async () => {
    if (
      newTitle === "" ||
      newDure === "" ||
      newDescrip === "" ||
      newVideoUrl === ""
    ) {
      setError("Veuillez vérifier le champs et remplir de bon valeur");
      return;
    }
    try {
      addDoc(coursCollectionRef, {
        title: newTitle,
        dure: newDure,
        descrip: newDescrip,
        videoUrl: newVideoUrl,
        timeStamp: serverTimestamp(),
        domaine: newDomaine,
        sousDomaine: newSousDomaine,
      });
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

  function addAll() {
    createDomaine();
    createSousDomaines();
    createCours();
    setNewSousDomaine("");
    setError("");
    setNewTitle("");
    setNewDure("");
    setNewDescrip("");
    setNewVideoUrl("");
    setNewDomaine("");
    alert("domaine " + newDomaine + " ajouter");
    alert("sous domaine " + newSousDomaine + " ajouter");
    alert("Cours " + newTitle + " ajouter");
  }

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
              <div
                data-bs-toggle="modal"
                className="text-center"
                data-bs-target="#staticBackdrop"
              >
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
                            id="floatingInput"
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
                        <label for="floatingInput">Nom du domaine</label>
                      </div>

                      {isClicked.ajouState && (
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            value={newSousDomaine}
                            onChange={(e) => setNewSousDomaine(e.target.value)}
                            placeholder="Nom du sous-domaine"
                          />
                          <label for="floatingInput">Nom du sous-domaine</label>
                        </div>
                      )}
                      {isClicked.ajouState && (
                        <div class="form-floating mb-3">
                          <input
                            type="url"
                            class="form-control"
                            id="floatingInput"
                            onChange={(e) => setNewVideoUrl(e.target.value)}
                            placeholder="lien dun cours"
                          />
                          <label for="floatingInput">lien du cours</label>
                          {error && <p style={{ color: "red" }}>{error}</p>}
                        </div>
                      )}
                      {isClicked.ajouState && (
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Titre du cours"
                            onChange={(e) => setNewTitle(e.target.value)}
                          />
                          <label for="floatingInput">Titre du cours</label>
                        </div>
                      )}
                      {isClicked.ajouState && (
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="dure du cours"
                            onChange={(e) => setNewDure(e.target.value)}
                          />
                          <label for="floatingInput">dure du cours</label>
                        </div>
                      )}
                      {isClicked.ajouState && (
                        <div class="form-floating mb-3">
                          <textarea
                            name=""
                            id="floatingInput"
                            class="form-control"
                            cols="30"
                            placeholder="description du cours"
                            rows="30"
                            onChange={(e) => setNewDescrip(e.target.value)}
                          ></textarea>
                          <label for="floatingInput">
                            description du cours
                          </label>
                        </div>
                      )}
                    </div>
                    <div className="modal-footer">
                      {isClicked.ajouState && (
                        <ButtonReutilisable
                          text={"Ajouter"}
                          onClick={() => {
                            addAll();
                          }}
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
