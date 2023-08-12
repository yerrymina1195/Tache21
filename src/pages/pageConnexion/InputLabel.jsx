import React from 'react';

const InputLabel = (props) => {
    return (
        <div>
            <label className="form-label">
                  {props.label}
                </label>
                <input
                  type={props.type}
                  className="form-control shadow-none"
                  placeholder={props.placeholder}
                />
        </div>
    );
};

export default InputLabel;