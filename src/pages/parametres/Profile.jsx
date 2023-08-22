import React, { useState, useEffect } from 'react';
import { storage } from '../../Firebase/Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';



function Profile() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  // Récupérer l'URL de l'image au chargement de la page
  useEffect(() => {
    const imageRef = ref(storage, 'image');
    getDownloadURL(imageRef)
      .then((url) => {
        setUrl(url);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, 'image');
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message);
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message, 'error getting the image url');
      });
  };

  return (
    <div className="container-xl px-4 mt-4">
      <div className="row">
        <div className="col-xl-12">
          <div className="row gx-3">
            <div className="col-md-6 p-4">
              <div className="col-md-6 p-4">
                <div className="small font-italic dark:text-gray-200 mb-4">
                  Choisir une image pas plus de 5 MB sous format JPG / PNG
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end align-items-lg-end justify-content-sm-start align-items-sm-start">
              <img
                className="img-account-profile rounded-circle  h-14 w-50"
                src={url}
                alt="Profil"
              />
              
              <input
              required style={{ display: "  " }} 
                id="photoProfil"
                type="file"
                onChange={handleImageChange}  
              />
                
                <button
        onClick={handleSubmit}
        className="prev text-white align-items-center justify-content-center  d-flex"
      >
        {" "}
        changer
      </button>
          
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
