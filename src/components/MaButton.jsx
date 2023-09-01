import React from 'react';

const MaButton = (props) => {
    return (
        <div>
            <button type={props.type} className="btn bg1 text-white fw-bold w-100">
                {props.text}
              </button>
        </div>
    );
};

export default MaButton;