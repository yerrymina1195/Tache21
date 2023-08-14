import React from 'react';

const MaButton = (props) => {
    return (
        <div className=''>
            <button type={props.type} className="btn bg11 text-white fw-bold w-100">
                {props.text}
              </button>
        </div>
    );
};

export default MaButton;