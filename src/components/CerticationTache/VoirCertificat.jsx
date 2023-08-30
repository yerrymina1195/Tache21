import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import './Certification.css';
import img1 from '../../data/scan.png';
import img2 from '../../data/sign.png';
import img3 from '../../data/logo.png';

function VoirCertificat() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [coach, setCoach] = useState('');
    const [modul, setModul] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const options = {
            margin: 10,
            filename: 'Tache.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' }
        };

        const content = document.getElementById('pdf-content');

        await html2pdf().from(content).set(options).save();
    };

    return (
        <div className='only:'>
            <div className="">
                <form onSubmit={(e) => handleSubmit(e)}>
                    {/* <div id="pdf-content">
                        <p className='text-center'>ceci certifie que </p>
                       <h1>chute de <span>{name}</span></h1> 
                        <p>terminer avec succès le</p>
                        <h1>bibliothèque de ..........</h1>
                        <p>Certification de développeur le 30 août 2023</p>
                        <div className="row">
                            <div className="col-4">photo</div>
                            <div className="col-4">Directeur exécutif de la Digisphere</div>
                            <div className="col-4">photo</div>
                        </div>
                        <button>Generate</button>
                    </div> */}



                    <div className="card-header  dark:bg-secondary-dark-bg text-white dark:text-gray-200">Metter vos informations au complet</div>
                    <div class="form-floating mb-3 shadow p-5">

                        <div className="row mb-3">
                            <div className="col-6">
                                <label for="floatingInput">votre nom complet:</label>
                                <input className="form-control txt" id="floatingInput" type="text" name="txt" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="col-6">
                                <label for="floatingInput">la date:</label>
                                <input className="form-control date" id="floatingInput" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label for="floatingInput">module</label>
                                <input className="form-control modul" id="floatingInput" type="text" name="modul" value={modul} onChange={(e) => setModul(e.target.value)} required />
                            </div>
                            <div className="col-6">
                                <label for="floatingInput">valide par</label>
                                <input className="form-control coach" id="floatingInput" name="coach" value={coach} onChange={(e) => setCoach(e.target.value)} required />
                            </div>
                        </div>

<div className='align-items-center justify-content-center d-flex'>
                        <button className="main-btn w-25 p-2 fw-bold mt-3 cert text-white ">Envoyer</button></div>
                    </div>


                    <div className="container bgCertificate p-4 mt-5" style={{ display: 'none' }}>
                        <div id="pdf-content" className="bgCertification2" >
                            <div className="p-3">
                                <div className="row text-center d-flex justify-content-center align-items-center flex-column ">
                                    <h1 className="digi p-3 text-white mb-5 titre">
                                        DIGISPHERE <br /> <span className="fs-5">E-LEARNING</span>
                                    </h1>
                                    <p>Ceci certifie que</p>
                                    <h4>{name}</h4>
                                    <p>
                                        a terminé avec succés
                                        <br />
                                        le module <span className='fw-bold'>{modul}</span><span> le {date}</span>
                                    </p>
                                </div>
                                <div className="row mt-5 text-center">
                                    <div className="col-4 text-center d-flex justify-content-center align-items-center">
                                        <img src={img1} alt="scan" className="wscan" />
                                    </div>
                                    <div className="col-4 psign p-3 text-center d-flex justify-content-center align-items-center flex-column">
                                        <h4 className="border-bottom titre">SIGNATURE</h4>
                                        <img src={img2} alt="sign" className="sign" />
                                    </div>
                                    <div className="col-4 text-center d-flex justify-content-center align-items-center">
                                        <img src={img3} alt="certif" className="logo" />
                                    </div>
                                </div>
                                <div className="row text-center mt-5">
                                    <p>
                                        Validé par son coach: <br />{" "}
                                        <span className="text-couleur1">{coach}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </form>
            </div>
        </div>
    );
}

export default VoirCertificat;
