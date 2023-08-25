import React, { useState } from "react";
import { initialUsers } from './userList';
import ProfTable from "./ProfTable";
import "./Prof.css"
import "bootstrap/dist/js/bootstrap.min.js"

const Prof = () => {
  

  const [users, setUsers] = useState(initialUsers);

  const addEleve = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };


  return (
    <div className="  bg-[#ffff]  dark:bg-main-dark-bg    dark:text-gray-200 mt-3 eleve rounded-3xl">
      <div className="container">
        <div className="flex-row">
         
          <div className="flex-large">
            <ProfTable users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prof