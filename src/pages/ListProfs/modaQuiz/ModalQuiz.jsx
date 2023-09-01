import 'bootstrap/dist/js/bootstrap.min.js';
import LabelInput from '../../parametres/LabelInput';
import ButtonReutilisable from '../../../components/ButtonReutilisable';
import React, { useState, useEffect } from 'react';
import {
    collection,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../../Firebase/Firebase"; // Assurez-vous d'importer votre instance de Firestore correctement

const ModalQuiz = (props) => {
    const [question, setQuestion] = useState('');
    const [reponses, setReponses] = useState(['', '', '', '']);
    const [reponseCorrecteIndex, setReponseCorrecteIndex] = useState(null);
    const [domaine, setDomaine] = useState(''); // Champ de sélection du domaine
    const [sousDomaine, setSousDomaine] = useState(''); // Champ de sélection du sous-domaine
    const [quizzes, setQuizzes] = useState(() => {
        const storedQuizzes = JSON.parse(localStorage.getItem('QUIZZ')) || [];
        return storedQuizzes.length > 0 ? storedQuizzes : [];
    });

    const MAX_QUIZZES = 10;
    const ERROR_MESSAGES = {
        QUESTION_EMPTY: 'Veuillez ajouter une question.',
        ANSWERS_COUNT: 'Veuillez ajouter quatre réponses.',
        CORRECT_ANSWER: 'Veuillez sélectionner une réponse correcte.',
        QUIZZ_LIMIT: 'Vous avez atteint la limite de 10 quizzes.',
        NO_DOMAIN_SUBDOMAIN: 'Veuillez sélectionner un domaine et un sous-domaine.'
    };

    const handleEnregistrer = async () => {
        if (quizzes.length >= MAX_QUIZZES) {
            alert(ERROR_MESSAGES.QUIZZ_LIMIT);
            return;
        }

        if (question.trim() === '') {
            alert(ERROR_MESSAGES.QUESTION_EMPTY);
            return;
        }

        const nonEmptyAnswers = reponses.filter(reponse => reponse.trim() !== '');
        if (nonEmptyAnswers.length !== 4) {
            alert(ERROR_MESSAGES.ANSWERS_COUNT);
            return;
        }

        if (reponseCorrecteIndex === null) {
            alert(ERROR_MESSAGES.CORRECT_ANSWER);
            return;
        }

        if (domaine.trim() === '' || sousDomaine.trim() === '') {
            alert(ERROR_MESSAGES.NO_DOMAIN_SUBDOMAIN);
            return;
        }

        const quizData = {
            question,
            reponses,
            reponseCorrecte: reponseCorrecteIndex + 1,
            domaine,
            sousDomaine,
            timestamp: serverTimestamp(),
        };

        try {
            const collectionRef = collection(db, "quizzes");
            await addDoc(collectionRef, quizData);
            alert('Quiz enregistré avec succè !');
            setQuestion('');
            setReponses(['', '', '', '']);
            setReponseCorrecteIndex(null);
            // Ne réinitialiser les champs de domaine et sous-domaine que si le nombre d'ajouts atteint 10
            if (quizzes.length + 1 >= MAX_QUIZZES) {
                setDomaine('');
                setSousDomaine('');
            }
            setQuizzes([...quizzes, quizData]);
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement du quiz :', error);
            alert('Une erreur est survenue lors de l\'enregistrement du quiz.');
        }
    };

    return (
        <div>
            <button type="button" className="btn btn-outline-light text-uppercase fw-bold btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModalQuiz">
                Ajouter un quiz
            </button>

            <div className="modal fade" id="exampleModalQuiz" tabIndex="-1" aria-labelledby="exampleModalQuizLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header card-header text-white">
                            <h5 className="modal-title" id="exampleModalQuizLabel">Ajouter un quizz</h5>
                            <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="domaine">Domaine</label>
                                        <select
                                            id="domaine"
                                            className="form-select"
                                            value={domaine}
                                            onChange={(e) => setDomaine(e.target.value)}
                                        >
                                            <option value="">Sélectionnez un domaine</option>
                                            <option value="programmation">Programmation</option>
                                            <option value="design">Design</option>
                                            <option value="marketing">Marketing</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="sousDomaine">Sous-Domaine</label>
                                        <select
                                            id="sousDomaine"
                                            className="form-select"
                                            value={sousDomaine}
                                            onChange={(e) => setSousDomaine(e.target.value)}
                                        >
                                            <option value="">Sélectionnez un sous-domaine</option>
                                            {domaine === "programmation" && (
                                                <>
                                                    <option value="HTMLCSS">HTML/CSS</option>
                                                    <option value="javascript">JavaScript</option>
                                                    <option value="react">React</option>
                                                    <option value="angular">Angular</option>
                                                    <option value="INITIATION">initiation</option>
                                                    <option value="ETUDE DE MARCHE">Etude de marché</option>
                                                    <option value="CANVA">Canva</option>
                                                    <option value="FIGMA">figma</option>
                                                    <option value="PYTHON">python</option>
                                                    <option value="NODEJS">nodejs</option>
                                                </>
                                            )}
                                            {domaine === "design" && (
                                                <>
                                                    <option value="design1">Design 1</option>
                                                    <option value="design2">Design 2</option>
                                                </>
                                            )}
                                            {domaine === "marketing" && (
                                                <>
                                                    <option value="marketing1">Marketing 1</option>
                                                    <option value="marketing2">Marketing 2</option>
                                                </>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <LabelInput
                                    id="question"
                                    label="Question"
                                    placeholder=""
                                    type="text"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                />
                                <div className="row gx-3 mb-3">
                                    {reponses.map((reponse, index) => (
                                        <div className="col-md-6" key={index}>
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
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="reponseCorrecte"
                                                    id={`reponseCorrecte${index + 1}`}
                                                    value={index}
                                                    checked={reponseCorrecteIndex === index}
                                                    onChange={() => setReponseCorrecteIndex(index)}
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
                                <div className='text-center'>
                                    <p>{`Nombre d'ajouts : ${quizzes.length}/${MAX_QUIZZES}`}</p>
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
