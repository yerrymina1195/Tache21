import React from 'react'
import './Notification.css';
import { MdOutlineCancel } from "react-icons/md";
import { chatData } from '../data/need';
import { useStateContext } from '../contexts/ContextProvider';
const Notifications = () => {
    const { setIsClicked, initialState } = useStateContext();
  return (
    <div className=' not-position bg-white rounded-3 ' style={{width:'300px', height:'400px'}}>
<div className='p-3'>
    <div className=' d-flex bg-light justify-content-between sticky-top align-items-center'>
        <p className=' mb-0 not-tittle'>Notifications</p>
        <button
            style={{ color: "red" }}
            className="   fs-3 btn btn-outline"
            
            onClick={() => setIsClicked(initialState)}
          >
            <MdOutlineCancel />
          </button>
    </div>
{chatData?.map((item, index) => (
          <div key={index} className="p-3 d-flex justify-content-between align-items-center not-content border-bottom ">
            <img className="img-fluid me-3 rounded-circle"style={{width:'50px', height:'50px'}} src={item.image} alt={item.message} />
            <div>
              <p className="text-dark fw-bold fs-6 mb-0">{item.message}</p>
              <p className="text-secondary text-sm mb-0"> {item.desc} </p>
            </div>
          </div>
        ))}
</div>

      
    </div>
  )
}

export default Notifications
