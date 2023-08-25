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
} from "firebase/firestore";

const TesteOne = () => {
  // crud
  const [newTitle, setNewTitle] = useState("");
  const [newDescrip, setNewDescrip] = useState("");
  const [newDure, setNewDure] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [cours, setCours] = useState([]);
  const coursCollectionRef = collection(db, "cours");
  const [error, setError] = useState("");

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
        dure: Number(newDure),
        descrip: newDescrip,
        videoUrl: newVideoUrl,
      });

      alert("Cours " + newTitle + " ajouter");
    } catch (error) {
      console.error("Erreur lors de la creation :", error);
    }
    setNewTitle("");
    setNewDure("");
    setNewDescrip("");
    setNewVideoUrl("");
    setError("");
  };

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
                <ButtonReutilisable text={"Ajouter un cours"} />
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
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div class="form-floating mb-3">
                        <input
                          type="url"
                          placeholder="Url de la video"
                          class="form-control"
                          id="floatingInput"
                          onChange={(e) => setNewVideoUrl(e.target.value)}
                        />
                        <label for="floatingInput">Url de la video</label>
                      </div>
                      {error && <p style={{ color: "red" }}>{error}</p>}
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
                      {error && <p style={{ color: "red" }}>{error}</p>}
                      <div class="form-floating mb-3">
                        <input
                          type="number"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Durée du cours"
                          onChange={(e) => setNewDure(e.target.value)}
                        />
                        <label for="floatingInput">Durée du cours</label>
                      </div>
                      {error && <p style={{ color: "red" }}>{error}</p>}
                      <div class="form-floating mb-3">
                        <textarea
                          class="form-control"
                          id="floatingInput"
                          placeholder="description du cours"
                          cols="30"
                          rows="100"
                          onChange={(e) => setNewDescrip(e.target.value)}
                        ></textarea>
                        <label for="floatingInput">description du cours</label>
                      </div>
                      {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                    <div className="modal-footer">
                      <ButtonReutilisable
                        text={"Ajouter"}
                        onClick={createCours}
                        id="ajouter"
                      />
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
