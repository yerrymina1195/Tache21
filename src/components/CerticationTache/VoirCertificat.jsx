import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

function VoirCertificat() {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const options = {
            margin: 10,
            filename: 'demo.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' }
        };

        const content = document.getElementById('pdf-content');

        await html2pdf().from(content).set(options).save();
    };

    return (
        <div>
            <div className="">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div id="pdf-content">
                        <p className='text-center'>ceci certifie que </p>
                        <p>Chute de <span>{name}</span> a réussi le...</p>

                        <h1 className=''>Chute de <span><input type="text" className='txt' name="txt" value={name} onChange={(e) => setName(e.target.value)} /></span></h1>
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
