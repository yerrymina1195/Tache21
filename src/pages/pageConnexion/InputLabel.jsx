import React from 'react';

const InputLabel = (props) => {
  return (
    <div>
      <label className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        value={props.email}
        className="form-control shadow-none"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputLabel;