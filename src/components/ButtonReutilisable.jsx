import React from "react";
import "../components/cardDomaines/Domaine.css";

const ButtonReutilisable = (props) => {
  return (
    <div>
      <button type="button" className="btn add-domaine w-100 p-2 rounded-md ">
        {props.text}
      </button>
    </div>
  );
};

export default ButtonReutilisable;
