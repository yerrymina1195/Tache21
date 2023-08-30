import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

function VoirCertificat() {
    const [name, setName] = useState('');

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
                <input type="text" className='txt' name="txt" value={name} onChange={(e) => setName(e.target.value)} />
                    <div id="pdf-content">
                        <h1 className='text-center'>Digisphere <br /> E-learning</h1>
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
                    </div>
                    
                    <button>Generate</button>
                </form>
            </div>
        </div>
    );
}

export default VoirCertificat;
