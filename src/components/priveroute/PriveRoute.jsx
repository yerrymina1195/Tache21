import React from 'react'
import { Navigate } from 'react-router-dom';
import { useStateContext } from "../../contexts/ContextProvider";
const PriveRoute = ({children, authorizedRoles = [], requiredDomain}) => {
    const{user}=useStateContext()
    console.log(user);
    if (!user) {
        return <Navigate to="/" />;
      }
    if (user.statut === 'admin') {
      return <>{children}</>
    }
    
      if (authorizedRoles.length > 0 && !authorizedRoles.includes(user.statut.toLowerCase())) {
        return <Navigate to="/unauthorized" />;
      }
    
      if (requiredDomain && requiredDomain !== user.domaine.toLowerCase()) {
        return <Navigate to="/unauthorized" />;
      }
    
      return <>{children}</>;
}

export default PriveRoute
