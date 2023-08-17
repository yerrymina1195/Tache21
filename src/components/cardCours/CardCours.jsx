import React from 'react'
import { FaArchive } from 'react-icons/fa';
import { BsPencilSquare, BsFillEyeFill } from 'react-icons/bs';


function CardCours(props) {
    return (
        <div>
            <div className='flex items-center justify-between w-full'>
                <div className='shadow-xl rounded-md m-5'>
                    <div className={`rounded hover:scale-105 transition-all duration-75 ease-in-out`}>
                        <img src={props.img} alt="img"
                            className='w-screen h-auto rounded-md object-cover' />
                    </div>
                    <div className='grid items-center gap-4'>
                        <div className='grid items-center leading-none'>
                            <h2 className='font-medium text-lg text-slate-900 lg:text-sm'>{props.title}</h2>
                            <p className='text-sm text-slate-800 lg:text-xs flex justify-between'>
                                <span>
                                    {props.dure}
                                </span>
                                <span>
                                    {props.niveau}
                                </span>
                            </p>
                        </div>
                        <div className="flex justify-around gap-10">
                            <button>
                                <BsFillEyeFill />
                            </button>
                            <button>
                                <BsPencilSquare />
                            </button>
                            <button>
                                <FaArchive />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCours