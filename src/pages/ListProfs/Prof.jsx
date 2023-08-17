import React, { useState } from "react";
import { initialUsers } from './userList';
import "./Prof.css"
import AddProfForm from "./AddProfForm";
import ProfTable from "./ProfTable";

const Prof = () => {
  

  const [users, setUsers] = useState(initialUsers);

  const addProf = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };


  return (
    <div className="  bg-white mt-3 rounded-3xl">
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            <AddProfForm addProf={addProf} />
          </div>
         
          <div className="flex-large">
            <ProfTable users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prof

