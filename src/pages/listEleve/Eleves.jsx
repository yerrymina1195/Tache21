import React, { useState } from "react";
import EleveTable from "./EleveTable";
import AddEleveForm from "./AddEleveForm";

const Eleves = () => {
  const usersData = [
    {id: 1, name: "Rama", username: "Fall"},
    {id: 2, name: "Mama", username: "Gadiaga"}
  ]

 

const [users, setUsers] = useState(usersData)

const addEleve = (user) => {
  user.id = users.length + 1
setUsers([...users, user])
}

console.log(users)

  return (
    <div className="  bg-white m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl"> 
      <div className="container">
      <h1 className="text-red-600 p-11 bg-slate-600">LISTES ELEVES</h1>

      <div className="flex-row">
        <div className="flex-large">
          <h2>nouvel eleve</h2>
          <AddEleveForm addEleve={addEleve} />
        </div>
        <div className="flex-large">
          <h2>liste des eleves</h2>
          < EleveTable users={users} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Eleves;
