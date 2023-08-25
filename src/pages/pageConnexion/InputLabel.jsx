import React from 'react';

const InputLabel = (props) => {
    return (
        <div className='mb-4 relative'>
            <label className="form-label">
                  {props.label}
                </label>
                <input
                  type={props.type}
                  className="form-control shadow-none relative  "
                  placeholder={props.placeholder}
                  onChange={props.onChange}
                  value={props.value}
                />
                 <span className='absolute inline-flex rounded-full h-16 w-16 right-[-20px] top-2'>
                    
                    {props.icon}
                </span>
        </div>
    );
};

export default InputLabel;