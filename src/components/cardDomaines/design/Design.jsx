import React, { useEffect, useState } from "react";
import { db, storage } from "../../../Firebase/Firebase";
import {
  addDoc,
  doc,
  collection,
  deleteDoc,
  onSnapshot,
  query,
  updateDoc,
  getDocs,
  where,
  serverTimestamp,
} from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Sousdomaine from "../sousdomaine/Sousdomaine";
import ButtonReutilisable from "../../ButtonReutilisable";
import { useStateContext } from "../../../contexts/ContextProvider";


const Design = (props) => {
  const [file, setFile] = useState(null);
  const [newSousDomaine, setNewSousDomaine] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const { isClicked, handleClick, setIsClicked, initialState,user } =
  useStateContext();
  const [sousDomains, setSousDomaines] = useState([]);
  const sousDomaineCollectionRef = collection(db, "sousDomains");
  // function create sous-domaines
  const createSousDomaines = async () => {
    if (newSousDomaine === "") {
      setError("Veuillez vérifier le champs et remplir de bon valeur");
      return;
    }
    if (!file) {
      alert('fichier vide')
      return
    }
    try {
      const path = `/images/${file.name}`;
      const refs = ref(storage, path);
      // Enregistrez l'image dans Storage
      await uploadBytes(refs, file);
      const imageUrl = await getDownloadURL(ref(storage, refs));
      const docRef = await addDoc(sousDomaineCollectionRef, {
        title: newSousDomaine,
        domains: props.title,
        imageUrl:imageUrl,
        timeStamp: serverTimestamp(),
      });
      await updateDoc(doc(sousDomaineCollectionRef, docRef.id), {
        id: docRef.id,
      });
      setNewSousDomaine("");
      setError("");
      alert("sous domaine " + newSousDomaine + " ajouter");
    } catch (error) {
      console.error("Erreur lors de la creation :", error);
    }
  };
  // modifier sous domaine
  const editSousDomaines = (id, title) => {
    setNewSousDomaine(title);
    setId(id);
  };
  const updateSousDomaines = async () => {
    if (newSousDomaine === "") {
      setError("Veuillez vérifier le champs et remplir de bon valeur");
      return;
    }
    try {
      const updateSousDomaine = doc(db, "sousDomains", id);
      updateDoc(updateSousDomaine, {
        title: newSousDomaine,
        domains: props.title,
        timeStamp: serverTimestamp(),
      });
      setNewSousDomaine("");
      setError("");
      alert("Sous-domaine " + newSousDomaine + " mis à jour");
    } catch (error) {
      console.log("erreur lors de la creation :", error);
    }
  };
  // delete doc
  const deleteSousDomaines = async (id) => {
    const deleteSousDomaine = doc(db, "sousDomains", id);
    await deleteDoc(deleteSousDomaine);
    alert(newSousDomaine + "suprimer");
  };

  useEffect(() => {
    const q = query(sousDomaineCollectionRef,where('domains', '==' , props.title));
    onSnapshot(q, (querySnapshot) => {
      const sousDomains = [];
      querySnapshot.forEach((doc) => {
        sousDomains.push(doc.data().title);
      });
      const getSousDomaines = async () => {
        const data = await getDocs(q);
        setSousDomaines(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };
      getSousDomaines();
    });
    // eslint-disable-next-line 
  }, []);
  return (
    <div>
      <div className="container my-5">
        <div className="row d-flex align-items-center mt-5">
          <div className="col-md-6 col-sm-12">
            <h1 className="text-capitalize">{props.title}</h1>
          </div>
          <div className="col-md-6 col-sm-12 text-lg-end text-md-end text-sm-start">
            {/* button modal */}

            <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            { user?.statut === "coach" && <ButtonReutilisable
                text={"Ajouter un sous domaine"}
                onClick={() => handleClick("ajoutState")}
              />}
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
                      Ajout de sous domaine
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
                      {isClicked.ajoutState && (
                        <input
                          type="text"
                          class="form-control"
                          id="floatinglabel"
                          placeholder="Nom du sous domaine"
                          value={newSousDomaine}
                          onChange={(e) => setNewSousDomaine(e.target.value)}
                        />
                      )}
                      {isClicked.modifState && (
                        <input
                          type="text"
                          class="form-control"
                          id="floatinglabel"
                          placeholder="Modifier le sous domaine domaine"
                          value={newSousDomaine}
                          onChange={(e) => setNewSousDomaine(e.target.value)}
                        />
                      )}
                      <label htmlFor="floatinglabel">Nom du sous domaine</label>
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {isClicked.ajoutState && ( <div className='form-group mb-2'>
                          <input type="file"
                            className='form-control'
                            multiple
                            onChange={(e) => setFile(e.target.files[0])}
                            placeholder="Ajouter Images" />
                        </div>)}
                  </div> 
                 
                  <div className="modal-footer">
                    {isClicked.ajoutState && (
                      <ButtonReutilisable
                        text={"Ajouter"}
                        onClick={createSousDomaines}
                        id="ajouter"
                      />
                    )}
                    {isClicked.modifState && (
                      <ButtonReutilisable
                        text={"Modifier"}
                        onClick={updateSousDomaines}
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
      <div className="container">
        <div className="row row-gap-5">
          {sousDomains?.map((sousdomaine) => (
            <div className="col-lg-4 col-md-6 col-sm-12 b">
                <Sousdomaine
                  title={sousdomaine.title}
                  imageUrl={sousdomaine.imageUrl}
                  onClick={() => {
                    handleClick("modifState");
                    editSousDomaines(sousdomaine.id, sousdomaine.title);
                  }}
                  click={() => deleteSousDomaines(sousdomaine.id)}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
