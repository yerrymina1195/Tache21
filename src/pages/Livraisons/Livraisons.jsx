import React, { useState, useEffect } from 'react'
import './Livraisons.css';
import {
  addDoc,
  collection,
  getDocs,
  query,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../../Firebase/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import ButtonReutilisable from '../../components/ButtonReutilisable';

const Livraisons = () => {
  const [cour, setCour] = useState('')
  const [description, setDescription] = useState('')
  const [lien, setLien] = useState('')
  const [tache, setTache] = useState('')
  const [url, setUrl] = useState('')
  const [errors, setErrors] = useState({});
  const [livraison, setLivraison] = useState([]);
  const livraionCollectionRef = collection(db, "livraisons");
  const [file, setFile] = useState(null);

  console.log(errors);
  console.log(cour);
  console.log(description);
  console.log(lien);
  console.log(tache);
  console.log(url)

  const handleChange = (e) => {
    if (e.target.files[0])
      setFile(e.target.files[0]);
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      cour === "" ||
      description === "" ||
      lien === "" ||
      tache === ""
    ) {
      setErrors("Veuillez vérifier le champs et remplir de bon valeur");
      return;
    }
    try {
      const path = `/images/${file.name}`;
      const refs = ref(storage, path);
      uploadBytes(refs, file).then(() => {
        getDownloadURL(ref(storage, refs)).then((url) => {
          console.log(url);
       
           addDoc(livraionCollectionRef, {
            cour,
            description,
            lien,
            Image: url,
            tache,
            timeStamp: serverTimestamp(),
          });
        })
      })
   
      setCour("")
      setDescription("")
      setLien("")
      setTache("")
      setFile("")
      setErrors("");
      alert("livraison réussie avec succés !!!");
    } catch (error) {
      console.error("Erreur lors de la livraison :", error);
    }
  }

  useEffect(() => {

    const q = query(collection(db, "livraisons"));
    onSnapshot(q, (querySnapshot) => {
      const livraison = [];
      querySnapshot.forEach((doc) => {
        livraison.push(doc.data().cour);
      });
      const getLivraison = async () => {
        const data = await getDocs(livraionCollectionRef);
        setLivraison(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getLivraison();
    });
  }, []);

  return (
    <div className='bg-[#ffff] dark:bg-secondary-dark-bg text-[#000] dark:text-gray-200 p-5 rounded-3xl'>
      <div className="container">
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10'>
          <h1 className=' p-11 ps-0 text-start'>Livraisons</h1>

          <div className='fixed top-[180px] z-[3000] right-10'>
            <div className='bouton-modal'>
              {/* <!-- Button trigger modal --> */}
              <div className="bouton">
                <button type="button" className="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Envoyer mon travail
                </button>
              </div>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Livrer mon travail</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className='form-group mb-2'>
                          <select class="form-select" aria-label="Default select example" name='tache' value={tache} onChange={(e) => setTache(e.target.value)}>
                            <option selected>Choisir une tâche</option>
                            <option value="Tâche 1">Tâche 1</option>
                            <option value="Tâche 2">Tâche 2</option>
                            <option value="Tâche 3">Tâche 3</option>
                          </select>
                        </div>

                        <div className='form-group mb-2'>
                          <input type="text"
                            className='form-control'
                            placeholder='Non du cour'
                            name="cour"
                            onChange={(e) => setCour(e.target.value)}
                            value={cour} />
                        </div>

                        <div className='form-group mb-2'>
                          <input type="text"
                            className='form-control'
                            placeholder='description du tâche'
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description} />
                        </div>

                        <div className='form-group mb-2'>
                          <input type="url"
                            className='form-control'
                            placeholder='Lien du déploiement'
                            name="lien"
                            onChange={(e) => setLien(e.target.value)}
                            value={lien} />
                        </div>

                        <div className='form-group mb-2'>
                          <input type="file"
                            className='form-control'
                            multiple onChange={handleChange}
                            placeholder="Ajouter Images" />
                        </div>

                      </form>
                    </div>
                    <div class="modal-footer text-center d-flex justify-content-center align-items-center">
                      <ButtonReutilisable text='Envoyer mon travail' onClick={onSubmit}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row g-3 my-3'>
            {livraison.map((cour) => (
              <div className="col-md-4">
                <div className="card d-flex flex-column p-3">
                  <div className="card-header bg-transparent text-white my-2">
                    <h4>{cour.tache}</h4>
                  </div>
                  <div className="card-title my-2">
                    <p><span className="fw-bold">Cours</span>: {cour.cour}</p>
                    <p><span className='fw-bold'>Description</span>: {cour.description}</p>
                    <Link className='fs-6 text-decoration-none text-dark'><span className="fw-bold">Lien</span>: {cour.lien}</Link>
                  </div>
                  <div className="card-body">
                    <img src={cour.Image} alt="img" className='img-fluid mx-auto w-100' />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Livraisons

