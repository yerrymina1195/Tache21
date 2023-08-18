import React from 'react';

const LabelInput = ({ label, type, placeholder, id}) => {
    return (
        <div className='mb-3'>
                <label className="small mb-1" htmlFor="inputUsername">{label}</label>
                <input className="form-control shadow-none" type={type} placeholder={placeholder}  id={id} />
        </div>
    );
};

export default LabelInput;
