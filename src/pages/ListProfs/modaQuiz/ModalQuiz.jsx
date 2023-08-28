import 'bootstrap/dist/js/bootstrap.min.js';
import LabelInput from '../../parametres/LabelInput';
import ButtonReutilisable from '../../../components/ButtonReutilisable';

import React, { useState, useEffect } from 'react';

const ModalQuiz = (props) => {
    // États pour les données du formulaire
    const [question, setQuestion] = useState('');
    const [reponses, setReponses] = useState(['', '', '', '']);
    const [reponseCorrecte, setReponseCorrecte] = useState(null);
    const [quizzes, setQuizzes] = useState(() => {
        const storedQuizzes = JSON.parse(localStorage.getItem('QUIZZ')) || [];
        return storedQuizzes.length > 0 ? storedQuizzes : [];
    }); // État pour stocker les quizzes enregistrés

    // Gestionnaire d'événements pour le bouton Enregistrer
    const handleEnregistrer = () => {
        if (quizzes.length < 10) {
            // Vérifier que la question et les réponses sont remplies
            if (question.trim() === '') {
                alert('Veuillez ajouter une question.');
                return;
            }

            const reponsesNonVides = reponses.filter(reponse => reponse.trim() !== '');
            if (reponsesNonVides.length !== 4) {
                alert('Veuillez ajouter quatre réponses.');
                return;
            }

            // Vérifier qu'une réponse correcte a été sélectionnée
            if (reponseCorrecte === null) {
                alert('Veuillez sélectionner une réponse correcte.');
                return;
            }

            // Collecter les données saisies
            const donnees = {
                question,
                reponses,
                reponseCorrecte: reponseCorrecte + 1,
            };

            // Ajouter le quiz à la liste des quizzes enregistrés
            const newQuizzes = [...quizzes, donnees];
            setQuizzes(newQuizzes);

            // Enregistrer les données dans localStorage
            localStorage.setItem('QUIZZ', JSON.stringify(newQuizzes));

            // Réinitialiser les champs du formulaire
            setQuestion('');
            setReponses(['', '', '', '']);
            setReponseCorrecte(null);
        } else {
            alert('Vous avez atteint la limite de 10 quizzes.');
        }
    };

    return (
        <div>
        {/* Bouton pour ouvrir le modal */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalQuiz">
            Ajouter un quiz
        </button>

        {/* Le modal lui-même */}
        <div className="modal fade" id="exampleModalQuiz" tabIndex="-1" aria-labelledby="exampleModalQuizLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalQuizLabel">Ajouter un quizz</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* Formulaire pour saisir les détails du quiz */}
                        <form>
                            {/* Champ de saisie de la question */}
                            <LabelInput
                                id="question"
                                label="Question"
                                placeholder=""
                                type="text"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />

                            {/* Réponses et sélecteur de réponse correcte */}
                            <div className="row gx-3 mb-3">
                                {reponses.map((reponse, index) => (
                                    <div className="col-md-6" key={index}>
                                        {/* Champ de saisie de réponse */}
                                        <LabelInput
                                            id={`reponse${index + 1}`}
                                            label={`Réponse ${index + 1}`}
                                            placeholder=""
                                            type="text"
                                            value={reponses[index]}
                                            onChange={(e) => {
                                                const nouvellesReponses = [...reponses];
                                                nouvellesReponses[index] = e.target.value;
                                                setReponses(nouvellesReponses);
                                            }}
                                        />
                                        {/* Sélecteur de réponse correcte */}
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="reponseCorrecte"
                                                id={`reponseCorrecte${index + 1}`}
                                                value={index}
                                                checked={reponseCorrecte === index}
                                                onChange={() => setReponseCorrecte(index)}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor={`reponseCorrecte${index + 1}`}
                                            >
                                                Réponse Correcte {index + 1}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Affichage du nombre d'ajouts */}
                            <div className='text-center'>
                                <p>{`Nombre d'ajouts : ${quizzes.length}/10`}</p>
                                {/* Bouton pour enregistrer le quiz */}
                                <ButtonReutilisable text='Enregistrer' onClick={handleEnregistrer} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ModalQuiz;
