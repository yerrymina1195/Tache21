import React from "react";

const InputLabel = (props) => {
  return (
    <div>
      <label for="floatingInput" className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control shadow-none"
        placeholder={props.placeholder}
        value={props.value}
        id={props.id}
      />

    </div>
  );
};

export default InputLabel;
