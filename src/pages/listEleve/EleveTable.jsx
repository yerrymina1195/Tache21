import React from 'react'

const EleveTable =(props) =>
  
(
    <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>prenom</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            { props.users.lenght > 0 ? 
                (
                    props.users.map((user) => 
                    (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className="button muted-button">modifier</button>
                                <button className="button muted-button">supprimer</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                         <td colSpan={3}> Pas d utilisateurs</td> 
                    </tr>
                )
            }
        </tbody>
    </table>
  )

  export default EleveTable;

