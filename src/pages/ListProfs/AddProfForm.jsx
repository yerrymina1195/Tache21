import React, { useState } from "react";
import { initialUsers } from './userList';



const AddEleveForm = (props) => {
  const initialFormState = {
    id: null,
    nom: "",
    prenom: "",
    tel: "",
    email: "",
    coach: "",
    domaine: "",
  };
  const [user, setUser] = useState(initialFormState);
  const [users, setUsers] = useState(initialUsers);

  const handleInputChange = () => {
    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
    };
    
  };

  const handleSimulatedSubmit = (event) => {
    const data=
    setUser({
      ...users, [event.target.name]: event.target.value
    })


   console.log(data);
  };
  
  return (
    <section>
      <div className="d-flex">
        <h1>liste des eleves</h1>
        <div className="mx-auto me-5">
          <button
            type="button"
            className="text-white p-4 bg-[#C23028] "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Ajouter un eleve
          </button>
        </div>
      </div>
          <input type="text" placeholder="rechercher ici..." className="float-end border mt-3"/>

      <div
        className="modal fade mt-[100px] "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content ">
            <div className="modal-header ">
              <h1 className="modal-title fs-5 " id="exampleModalLabel">
                Ajouter un eleve
              </h1>
              <button
                type="button"
                className="btn-close text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <div className="row w-[600]">
                <div
                  className="form-floating mb-3"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (
                      !user.nom ||
                      !user.prenom ||
                      !user.tel ||
                      !user.email ||
                      !user.coach ||
                      !user.domaine
                    )
                      return;
                    props.addEleve(user);
                    setUser(initialFormState);
                  }}
                >
                  <div className="row ">
                    <div className="form-floating col-6">
                      <input
                        className="form-control   required mb-3"
                        id="floatingName"
                        type="text"
                        name="nom"
                        value={user.nom.value}
                        placeholder="nom"
                        onChange={handleInputChange}
                      />
                      <label for="floatingName">nom</label>
                    </div>
                    <div className="form-floating col-6">
                      <input
                        className="form-control   required "
                        id="floatingPrenom"
                        placeholder="prenom"
                        type="text"
                        name="name"
                        value={user.prenom.value}
                        onChange={handleInputChange}
                      />
                      <label for="floatingPrenom">prenom</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-floating col-6">
                      <input
                        className="form-control   required mb-3"
                        id="floatingTel"
                        type="number"
                        name="tel"
                        value={user.tel.value}
                        placeholder="tel"
                        onChange={handleInputChange}
                      />
                      <label for="floatingTel">tel</label>
                    </div>
                    <div className="form-floating col-6">
                      <input
                        className="form-control required "
                        id="floatingEmail"
                        placeholder="email"
                        type="email"
                        name="email"
                        value={user.email.value}
                        onChange={handleInputChange}
                      />
                      <label for="floatingEmail">email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-floating col-6">
                      <input
                        className="form-control required "
                        id="floatingCoach"
                        type="text"
                        name="text"
                        value={user.coach.value}
                        placeholder="coach"
                        onChange={handleInputChange}
                      />
                      <label for="floatingCoach">coach</label>
                    </div>
                    <div className="form-floating col-6">
                      <input
                        className="form-control   required"
                        id="floatingDomaine"
                        placeholder="domaine"
                        type="text"
                        name="text"
                        value={user.domaine.value}
                        onChange={handleInputChange}
                      />
                      <label for="floatingDomaine">domaine</label>
                    </div>
                    <button
                      type="submit"
                      className="p-4 bg-[#D7572B] mt-4 text-white"
                      onClick={handleSimulatedSubmit}
                    >
                      Ajouter
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="text-white p-4 bg-[#C23028]"
              >
                Close
              </button>
              <button type="submit" class="bg-[#D7572B] text-white p-4">
                enregistre
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddEleveForm;
