import React, { useState } from "react";
import { initialUsers } from "./userList";
import ButtonReutilisable from "../../components/ButtonReutilisable";

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
    const data = setUser({
      ...users,
      [event.target.name]: event.target.value,
    });

    console.log(data);
  };

  return (
    <div className="container mt-5">
      {/* <div className="row ">
        <div className="col-md-6">
          <h4 className="listEleve">Liste des eleves</h4>
        </div>
        <div className="col-md-6 text-lg-end text-md-end text-sm-start">
          <input
            type="search"
            className="form-control mt-3"
            placeholder="Rechercher..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </div> */}
    </div>
  );
};

export default AddEleveForm;
