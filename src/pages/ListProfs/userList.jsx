
// userList.js

import { useState } from 'react';

export const initialUsers = [
  {
    id: 1,
    nom: "Rama",
    prenom: "Fall",
    email: "ramafall49@gmail.com",
    tel: "777777777",
    domaine: "Programmation",
    coach: "kalika",
  },
  {
    id: 2,
    nom: "Mame",
    prenom: "Gadiaga",
    email: "mame@gmail.com",
    tel: "778888888",
    domaine: "design",
    coach: "mahan"
  }
];

export const useUsersState = () => {
  const [users, setUsers] = useState(initialUsers);

  const addEleve = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return { users, addEleve };

};

