import React, { useEffect, useState } from "react";
import Teste from "./teste";
import ButtonReutilisable from "../ButtonReutilisable";
import { db } from "../../Firebase/Firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  onSnapshot,
  deleteDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useStateContext } from "../../contexts/ContextProvider";

const TesteOne = () => {
  // crud
  const [newTitle, setNewTitle] = useState("");
  const [newDescrip, setNewDescrip] = useState("");
  const [newDure, setNewDure] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [cours, setCours] = useState([]);
  const coursCollectionRef = collection(db, "cours");
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [newDomaine] = useState("");
  const [newSousDomaine] = useState("");
  const { isClicked, handleClick, setIsClicked, initialState, user } =
    useStateContext();

  // create cours
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
        domains: newDomaine,
        sousDomains: newSousDomaine,
        createBy: user?.prenom,
      });
      setNewTitle("");
      setNewDure("");
      setNewDescrip("");
      setNewVideoUrl("");
      setError("");
      alert("Cours " + newTitle + " ajouter");
    } catch (error) {
      console.error("Erreur lors de la creation :", error);
    }
  };
  // modifier cours
  const editCours = async (id, title, videoUrl, dure, descrip) => {
    setNewVideoUrl(videoUrl);
    setNewDure(dure);
    setNewTitle(title);
    setNewDescrip(descrip);
    setId(id);
  };
  const updateCours = async () => {
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
      const updateCour = doc(db, "cours", id);
      updateDoc(updateCour, {
        title: newTitle,
        dure: newDure,
        descrip: newDescrip,
        videoUrl: newVideoUrl,
        timeStamp: serverTimestamp(),
        domains: newDomaine,
        sousDomains: newSousDomaine,
      });
      setNewTitle("");
      setNewDure("");
      setNewDescrip("");
      setNewVideoUrl("");
      setError("");
      alert("domaine " + newTitle + " mise à jour");
    } catch (error) {
      console.error("Erreur lors de la creation :", error);
    }
  };
  // delete cours
  const deleteCours = async (id) => {
    const deleteCours = doc(db, "cours", id);
    await deleteDoc(deleteCours);
    alert("domaine supprimer");
  };

  useEffect(() => {
    const q = query(collection(db, "cours"));
    onSnapshot(q, (querySnapshot) => {
      const cours = [];
      querySnapshot.forEach((doc) => {
        cours.push(doc.data().title);
      });
      const getCours = async () => {
        const data = await getDocs(coursCollectionRef);
        setCours(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getCours();
    });
  }, [coursCollectionRef]);

  return (
    <div>
      <div className="bg-[#ffff] dark:bg-secondary-dark-bg text-[#000] dark:text-gray-200 p-5 rounded-3xl domaine">
        <div className="container ">
          <div className="row d-flex align-items-center mt-5">
            <div className="col-md-6 col-sm-12">
              <h1 className="capitalize">html & css</h1>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
              {/* button modal */}
              <div
                data-bs-toggle="modal"
                className="text-center"
                data-bs-target="#staticBackdrop"
              >
                <ButtonReutilisable
                  text={"Ajouter un cours"}
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
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        Ajout de cours
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
                            type="url"
                            placeholder="Url de la video"
                            class="form-control"
                            id="floatingInput"
                            onChange={(e) => setNewVideoUrl(e.target.value)}
                          />
                        )}
                        {isClicked.modifState && (
                          <input
                            type="url"
                            placeholder="Url de la video"
                            class="form-control"
                            id="floatingInput"
                            onChange={(e) => setNewVideoUrl(e.target.value)}
                          />
                        )}
                        <label for="floatingInput">Url de la video</label>
                      </div>
                      {error && <p style={{ color: "red" }}>{error}</p>}
                      <div class="form-floating mb-3">
                        {isClicked.ajouState && (
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Titre du cours"
                            onChange={(e) => setNewTitle(e.target.value)}
                          />
                        )}
                        {isClicked.modifState && (
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Titre du cours"
                            onChange={(e) => setNewTitle(e.target.value)}
                          />
                        )}
                        <label for="floatingInput">Titre du cours</label>
                      </div>
                      {error && <p style={{ color: "red" }}>{error}</p>}
                      <div class="form-floating mb-3">
                        {isClicked.ajouState && (
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Durée du cours"
                            onChange={(e) => setNewDure(e.target.value)}
                          />
                        )}
                        {isClicked.modifState && (
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Durée du cours"
                            onChange={(e) => setNewDure(e.target.value)}
                          />
                        )}
                        <label for="floatingInput">Durée du cours</label>
                      </div>
                      {error && <p style={{ color: "red" }}>{error}</p>}
                      <div class="form-floating mb-3">
                        {isClicked.ajouState && (
                          <textarea
                            class="form-control"
                            id="floatingInput"
                            placeholder="description du cours"
                            cols="30"
                            rows="100"
                            onChange={(e) => setNewDescrip(e.target.value)}
                          ></textarea>
                        )}
                        {isClicked.modifState && (
                          <textarea
                            class="form-control"
                            id="floatingInput"
                            placeholder="description du cours"
                            cols="30"
                            rows="100"
                            onChange={(e) => setNewDescrip(e.target.value)}
                          ></textarea>
                        )}

                        <label for="floatingInput">description du cours</label>
                      </div>
                      {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                    <div className="modal-footer">
                      {isClicked.ajouState && (
                        <ButtonReutilisable
                          text={"Ajouter"}
                          onClick={createCours}
                          id="ajouter"
                        />
                      )}
                      {isClicked.modifState && (
                        <ButtonReutilisable
                          text={"Modifier"}
                          onClick={updateCours}
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
            {cours.map((cour) => (
              <div className="col-12">
                <Teste
                  title={cour.title}
                  dure={cour.dure}
                  descrip={cour.descrip}
                  videoUrl={cour.videoUrl}
                  onClick={() => {
                    handleClick("modifState");
                    editCours(
                      cour.id,
                      cour.title,
                      cour.dure,
                      cour.descrip,
                      cour.videoUrl
                    );
                  }}
                  click={() => deleteCours(cour.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TesteOne;
