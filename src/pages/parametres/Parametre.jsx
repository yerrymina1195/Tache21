import { React, useEffect, useState } from "react";
import "../parametres/Parametre.css";
import LabelInput from "./LabelInput";
import ButtonReutilisable from "../../components/ButtonReutilisable";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { updateEmail } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { useStateContext } from "../../contexts/ContextProvider";
import { db, storage } from "../../Firebase/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FcOpenedFolder } from "react-icons/fc";

const Parametre = () => {
  const { user, updateUser } = useStateContext();

  // const [image, setImage] = useState("");

  useEffect(() => {
    onSnapshot(doc(db, "users", user?.id), (querySnapshot) => {
      const usersurl = querySnapshot.data();

      updateUser(usersurl);
      // console.log(usersurl);
      // setImage(usersurl?.url)
    });

    // eslint-disable-next-line
  }, []);

  const [file, setFile] = useState("");
 
  //eslint-disable-next-line
  const [per, setPerc] = useState(null);

  const [data, setData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    mdp: "",
  });
  useEffect(() => {
    if (user) {
      setData({
        prenom: user.prenom,
        nom: user.nom,
        email: user.email,
        telephone: user.telephone,
      });
    }
  }, [user]);
  const { prenom, nom, email, telephone, url } = data;
  const handelchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const uploadFile = () => {
    const name = new Date().getTime() + file.name;

    console.log(name);
    const storageRef = ref(storage, user?.id);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setPerc(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          updateDoc(doc(db, "users", user?.id), {
            url: downloadURL,
          });
        });
      }
    );

    alert("Votre photo profil a été modifié avec succés !!!");
  };

  const handleSaveProfile = async () => {
    try {
      await updateEmail(auth.currentUser, data.email);
      await updateDoc(doc(db, "users", user?.id), {
        prenom: data.prenom,
        nom: data.nom,
        email: data.email,
        telephone: data.telephone,
      });
      alert("modification faite");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil :", error);
    }
  };

  return (
    <div>
      <div className="container-xl px-4 mt-4 ">
        <div className="row">
          <div className="col-xl-12 ">
            <div className="card bg-[#ffff] dark:bg-secondary-dark-bg text-[#ffff] dark:text-gray-200">
              <div
                className="card-header mb-3 text-white"
                onSubmit={uploadFile}
              >
                Modifier vos informations personnelles
              </div>
              <div className="row gx-3">
                <div className="col-md-4 p-4">
                  <div className="small font-italic dark:text-gray-200 w-100">
                    <label htmlFor="file">
                      Cliquez pour choisir une image:
                      <FcOpenedFolder className="icon fs-2" />
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="url"
                      value={url}
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-2 ps-3 d-flex justify-content-lg-center align-items-lg-center justify-content-sm-start align-items-sm-start justify-content-md-center align-items-md-center ">
                  <div className="image rounded-circle">
                    <img
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : user?.url
                          ? user.url
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt=""
                      value={url}
                      className="img-fluid rounded-circle mb-3"
                    />
                    {file ? (
                      <ButtonReutilisable text="Valider" onClick={uploadFile} />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <LabelInput
                        id="inputLatestName"
                        label="Prénom"
                        placeholder="Mama"
                        type="text"
                        name="prenom"
                        value={prenom}
                        onChange={handelchange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <LabelInput
                        id="inputFirstName"
                        label="Nom"
                        placeholder="Gadiaga"
                        type="text"
                        name="nom"
                        value={nom}
                        onChange={handelchange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3"></div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <LabelInput
                        id="inputEmailAddress"
                        label="Adresse email"
                        placeholder="example@gmail.com"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handelchange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <LabelInput
                        id="inputPhone"
                        label="Numero téléphone"
                        placeholder="77 670 00 66"
                        type="tel"
                        name="telephone"
                        value={telephone}
                        onChange={handelchange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="text-center p-4">
                    <ButtonReutilisable
                      text="Enregistrer les modifications"
                      onClick={handleSaveProfile}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parametre;
