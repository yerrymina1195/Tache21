import React from 'react';

const LabelInput = ({ label, type, placeholder, id, name,value, onChange,icon}) => {
 
    return (
        <div className='mb-3 relative'>
                <label className="small mb-1" htmlFor="inputUsername">{label}</label>
                <input className="form-control relative shadow-none" value={value} onChange={onChange} name={name} type={type} placeholder={placeholder}  id={id} required={true} />
                <span className='absolute inline-flex rounded-full h-16 w-16 right-[-20px] top-11'>
                    
                    {icon}
                </span>
        </div>
    );
};

export default LabelInput;
