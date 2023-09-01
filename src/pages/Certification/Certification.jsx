import React from 'react'
import './Certification.css';
import CerticationTache from '../../components/CerticationTache/CerticationTache';


const Certification = () => {
    return (
        <div className='container'>
            <CerticationTache
                domaine={"programmation"}
                objectif={"Créer un site e-commerce"} />
        </div>
    )
}
export default Certification