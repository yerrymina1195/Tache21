import React, { useState } from "react";
import { initialUsers } from "./userList";
import EleveTable from "./EleveTable";
import AddEleveForm from "./AddEleveForm";
import "./Eleve.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Eleves = () => {
  const [users, setUsers] = useState(initialUsers);

  const addEleve = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <div className=" dark:bg-main-dark-bg container  dark:text-gray-200 mt-3 eleve ">
      <div className="flex-row">
        <div className="flex-large">
          <AddEleveForm addEleve={addEleve} />
        </div>

        <div className="flex-large">
          <EleveTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default Eleves;
