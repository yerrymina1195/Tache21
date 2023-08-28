import React, { useState, useEffect } from "react";
import Input from "./Input";
import Text from "./Text";
import ButtonReutilisable from '../../../components/ButtonReutilisable';

export default function Quiz() {
    const [quizList, setQuizList] = useState(() => JSON.parse(localStorage.getItem('QUIZZ')) || []);
    const [userAnswers, setUserAnswers] = useState(() => {
        const savedAnswers = JSON.parse(localStorage.getItem('QUIZ_ANSWERS'));
        return savedAnswers !== null ? savedAnswers : Array(quizList.length).fill(null);
    });
    const [score, setScore] = useState(() => {
        const savedScore = JSON.parse(localStorage.getItem('QUIZ_SCORE'));
        return savedScore !== null ? savedScore : 0;
    });
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(() => {
        const savedTimeLeft = JSON.parse(localStorage.getItem('QUIZ_TIME_LEFT'));
        return savedTimeLeft !== null ? savedTimeLeft : 300; // 5 minutes en secondes par défaut
    });
    const [quizStarted, setQuizStarted] = useState(false);

    useEffect(() => {
        // Vérifier si le quiz a déjà été complété en utilisant une valeur stockée dans le localStorage
        const quizCompletedStatus = JSON.parse(localStorage.getItem('QUIZ_COMPLETED'));
        if (quizCompletedStatus) {
            setQuizCompleted(true);
        }

        // Lancer la minuterie uniquement si le quiz a commencé
        let timer;
        if (quizStarted && !quizCompleted) {
            timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        }

        // Terminer le quiz lorsque le temps est écoulé
        if (timeLeft === 0) {
            clearInterval(timer);
            if (!quizCompleted) {
                calculateScore();
            }
        }

        return () => {
            clearInterval(timer);
        };
    }, [timeLeft, quizStarted, quizCompleted]);

    const handleAnswer = (questionIndex, answerIndex) => {
        if (!quizStarted || quizCompleted) {
            return;
        }

        const newAnswers = [...userAnswers];
        newAnswers[questionIndex] = answerIndex + 1; // Ajouter 1 pour faire correspondre les numéros
        setUserAnswers(newAnswers);

        // Stocker les réponses de l'utilisateur dans le localStorage
        localStorage.setItem('QUIZ_ANSWERS', JSON.stringify(newAnswers));

        const quiz = quizList[questionIndex];
        if (answerIndex === parseInt(quiz.reponseCorrecte) - 1) {
            setScore(score + 1);
        }
    };

    const calculateScore = () => {
        if (quizCompleted) {
            return;
        }

        let newScore = 0;
        quizList.forEach((quiz, index) => {
            if (userAnswers[index] === parseInt(quiz.reponseCorrecte)) {
                newScore++;
            }
        });
        setScore(newScore);
        setQuizCompleted(true);

        // Stocker un indicateur dans le localStorage pour indiquer que le quiz a été complété
        localStorage.setItem('QUIZ_COMPLETED', JSON.stringify(true));

        // Stocker le score dans le localStorage
        localStorage.setItem('QUIZ_SCORE', JSON.stringify(newScore));
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    // Stocker le temps initial dans le localStorage
    useEffect(() => {
        localStorage.setItem('QUIZ_TIME_LEFT', JSON.stringify(timeLeft));
    }, [timeLeft]);

    return (
        <div className="bg-white px-5">
            <h1>{quizCompleted ? 'Quiz déjà fait !' : "Vous ne pourrez passer le quiz qu'une seule fois"}</h1>
            <div>
                <h2><Text texte={`Temps : ${formatTime(timeLeft)}`} /></h2>
            </div>
            {!quizStarted && !quizCompleted && ( // Afficher le bouton "Démarrer" si le quiz n'a pas encore commencé
                <div>
                    <ButtonReutilisable onClick={() => setQuizStarted(true)} text='Démarrer' />
                </div>
            )}

            {quizStarted && quizList.map((quiz, index) => ( // Afficher les questions et réponses seulement si le quiz a commencé
                <div key={index}>
                    <Text texte={`Question ${index + 1}: ${quiz.question}`} />
                    {quiz.reponses.map((reponse, rIndex) => (
                        <div key={rIndex}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question${index}`}
                                    value={rIndex}
                                    checked={userAnswers[index] === rIndex + 1}
                                    onChange={() => handleAnswer(index, rIndex)}
                                    disabled={!quizStarted || quizCompleted}
                                />
                                {reponse}
                            </label>
                        </div>
                    ))}
                </div>
            ))}

            {quizStarted && !quizCompleted && ( // Afficher le bouton "TERMINER" si le quiz a commencé mais n'est pas terminé
                <div>
                    <ButtonReutilisable onClick={calculateScore} text='TERMINER' />
                </div>
            )}

            {quizCompleted && (
                <div>
                  <h3>  <Text texte={`Score: ${score}/${quizList.length}`} /></h3>
                </div>
            )}
        </div>
    );
}
