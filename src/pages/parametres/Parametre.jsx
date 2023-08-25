import { React, useEffect, useState } from 'react';
import '../parametres/Parametre.css'
import LabelInput from './LabelInput';
import ButtonReutilisable from '../../components/ButtonReutilisable';
import {

    doc,
    updateDoc,
    onSnapshot
} from "firebase/firestore";
import {  updateEmail, } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import {useStateContext  } from "../../contexts/ContextProvider";
import { db, storage } from "../../Firebase/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MdDriveFolderUpload } from "react-icons/md";

const Parametre = () => {
  const {user,updateUser} = useStateContext();

  // const [image, setImage] = useState("");
  
  useEffect(()=>{
     onSnapshot(doc(db,'users',user?.id), (querySnapshot) => {
      const usersurl= querySnapshot.data(); 
       
      
       updateUser(usersurl)
      // console.log(usersurl);
      // setImage(usersurl?.url)
     });

   // eslint-disable-next-line 
  },[])
 
  
    const [file, setFile] = useState("");
    // console.log(typeof (file));
    //eslint-disable-next-line
    const [per, setPerc] = useState(null);

    const [data, setData] = useState({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        mdp: "",

    })
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
    const { prenom, nom, email, telephone,  url } = data
    const handelchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

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
                    updateDoc(doc(db, 'users', user?.id), {
                        url: downloadURL
                    })
                })
            }
        );

 
        alert("Votre photo profil a été modifié avec succés !!!")
    };

    const handleSaveProfile = async () => {
        try {
          await updateEmail(auth.currentUser, data.email)
            await updateDoc(doc(db, 'users', user?.id), {
                prenom: data.prenom,
                nom: data.nom,
                email: data.email,
                telephone: data.telephone,
               

            });
            alert('modification faite')
        } catch (error) {
           
            console.error('Erreur lors de la mise à jour du profil :', error);
        }
      
    };

    return (
        <div>
            <div className="container-xl px-4 mt-4 ">
                <div className="row">
                    <div className="col-xl-12 ">
                        <div className="card bg-[#ffff] dark:bg-secondary-dark-bg text-[#ffff] dark:text-gray-200">
                            <div className="card-header mb-3 text-white" onSubmit={uploadFile}>Modifier vos informations personnelles</div>
                            <div className="row gx-3">
                                <div className="col-md-6 p-4">
                                    <div className="col-md-6 p-4">
                                        <div className="small font-italic dark:text-gray-200 mb-4 w-100">
                                            <p>Choisir une image pas plus de 5 MB sous format JPG / PNG</p>
                                        </div>
                                        <div className='d-flex  align-items-center'>
                                            <label htmlFor="file">
                                                Image: <MdDriveFolderUpload className="icon" />
                                            </label>
                                            <input
                                                type="file"
                                                id="file"
                                                name='url'
                                                value={url}
                                                onChange={(e) => setFile(e.target.files[0])}
                                                style={{ display: "none" }}
                                                accept="image/*"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                    <div className='image  d-flex flex-column justify-content-center align-items-center h-100 rounded-circle'>

                                        <img
                                            src={
                                                file
                                                    ? URL.createObjectURL(file): user?.url ? user.url
                                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                            }
                                            alt=""
                                            value={url}
                                            className='img-fluid rounded-circle mb-3' />
                                        {file ? (<ButtonReutilisable text='Save' onClick={uploadFile} />) : ("")}

                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <LabelInput id="inputLatestName"
                                                label="Prenom"
                                                placeholder="Mama"
                                                type="text"
                                                name="prenom"
                                                value={prenom}
                                                onChange={handelchange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <LabelInput id="inputFirstName"
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
                                    <div className="mb-3">

                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <LabelInput id="inputEmailAddress"
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
                                            <LabelInput id="inputPhone"
                                                label="Numero telephone"
                                                placeholder="77 670 00 66"
                                                type="tel"
                                                name="telephone"
                                                value={telephone}
                                                onChange={handelchange}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                  
                                    <div className='text-center'>
                                        <ButtonReutilisable text='Enregistrer les modifications' onClick={handleSaveProfile} />
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
