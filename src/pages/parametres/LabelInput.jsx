import React from 'react';

const LabelInput = ({ label, type, placeholder, id, name,value, onChange}) => {
 
    return (
        <div className='mb-3'>
                <label className="small mb-1" htmlFor="inputUsername">{label}</label>
                <input className="form-control shadow-none" value={value} onChange={onChange} name={name} type={type} placeholder={placeholder}  id={id} required={true} />
        </div>
    );
};

export default LabelInput;
