// PrivateRouteLayout.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStateContext } from "../../contexts/ContextProvider";

function PrivateRouteLayout({children, authorizedRoles = []}) {
  const { user } = useStateContext();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (authorizedRoles.length > 0 && !authorizedRoles.includes(user.statut)) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
}

export default PrivateRouteLayout;

