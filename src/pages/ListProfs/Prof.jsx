import React, { useState } from "react";
import { initialUsers } from './userList';
import EleveTable from "./ProfTable";
import AddEleveForm from "./AddEleveForm";
import "./Prof.css"

const Prof = () => {
  

  const [users, setUsers] = useState(initialUsers);

  const addEleve = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };


  return (
    <div className="  bg-white m-5 mt-3 p-5 rounded-3xl">
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            <AddProfForm addEleve={addEleve} />
          </div>
         
          <div className="flex-large">
            <PofTable users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prof

