import React, { useState, useEffect } from "react";
import ButtonReutilisable from '../../../components/ButtonReutilisable';
import { collection, getDocs, query, limit,addDoc,updateDoc ,doc,serverTimestamp} from "firebase/firestore";
import { db } from "../../../Firebase/Firebase";
import { useStateContext } from "../../../contexts/ContextProvider";

export default function Quiz() {
  const{donneSous,user}=useStateContext()
    const [quizList, setQuizList] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300); // Durée par défaut en secondes
    const [quizStarted, setQuizStarted] = useState(false);
console.log(donneSous);
const sendNotifDemarrage = async () => {
  try {
      if (user) {
          const notificationDocRef = collection(db, "notifications");
          const data = {
            notifiepar: user.id,
            notifieA: user.coachSelf,
            prenom:user?.prenom,
            nom:user?.nom,
            message:`quizz fait  ${score}/${quizList.length}`,
            date: serverTimestamp(),
            imageUrl:user.url,
            vu: false,
            title: `Quiz ${donneSous}`
          };
          const docRef=  await addDoc(notificationDocRef, data);
          console.log("notification demarré avec succès !");
          await updateDoc(doc(notificationDocRef, docRef.id), {
                id: docRef.id,
              })
              console.log("id avec succès !");
      }
  } catch (error) {
      console.error("Erreur lors du demarrage :", error);
  }
};
    useEffect(() => {
        const fetchQuizzes = async () => {
            const quizCollection = collection(db, "quizzes");
            const quizQuery = query(quizCollection, limit(10));
            const quizSnapshot = await getDocs(quizQuery);
            const quizzesData = [];
            quizSnapshot.forEach((doc) => {
                const quizData = doc.data();
                if (quizData.sousDomaine === donneSous) {
                    quizzesData.push(quizData);
                }
            });
            setQuizList(quizzesData);
        };

        fetchQuizzes();
          // eslint-disable-next-line
    }, []);

    useEffect(() => {
        // Charger l'état du quiz à partir du stockage local
        const storedAnswers = JSON.parse(localStorage.getItem('QUIZ_ANSWERS'));
        const storedCompleted = JSON.parse(localStorage.getItem('QUIZ_COMPLETED'));
        const storedScore = JSON.parse(localStorage.getItem('QUIZ_SCORE'));
        const storedTimeLeft = JSON.parse(localStorage.getItem('QUIZ_TIME_LEFT'));

        if (storedAnswers) {
            setUserAnswers(storedAnswers);
        }
        if (storedCompleted) {
            setQuizCompleted(storedCompleted);
        }
        if (storedScore) {
            setScore(storedScore);
        }
        if (storedTimeLeft) {
            setTimeLeft(storedTimeLeft);
        }

        let timer;
        if (quizStarted && !quizCompleted) {
            timer = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft <= 0) {
                        clearInterval(timer);
                        calculateScore();
                        return 0;
                    }
                    return prevTimeLeft - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
          // eslint-disable-next-line
    }, []);

    const handleAnswer = (questionIndex, answerIndex) => {
        if (!quizStarted || quizCompleted) {
            return;
        }

        const newAnswers = [...userAnswers];
        newAnswers[questionIndex] = answerIndex + 1;
        setUserAnswers(newAnswers);

        // Stocker les réponses de l'utilisateur dans le stockage local
        localStorage.setItem('QUIZ_ANSWERS', JSON.stringify(newAnswers));

        const quiz = quizList[questionIndex];
        if (answerIndex === parseInt(quiz.reponseCorrecte) - 1) {
            setScore(score + 1);
        }
    };

    const calculateScore = async () => {
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

        // Stocker l'état du quiz dans le stockage local
        localStorage.setItem('QUIZ_COMPLETED', JSON.stringify(true));
        localStorage.setItem('QUIZ_SCORE', JSON.stringify(newScore));
       await sendNotifDemarrage()
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    useEffect(() => {
        // Stocker le temps restant dans le stockage local
        localStorage.setItem('QUIZ_TIME_LEFT', JSON.stringify(timeLeft));
    }, [timeLeft]);

    return (
        <div className="bg-white px-5">
            <h1>{quizCompleted ? 'Quiz déjà fait !' : "Vous ne pourrez passer le quiz qu'une seule fois"}</h1>
            <div>
                <h2>Temps restant : {formatTime(timeLeft)}</h2>
            </div>
            {!quizStarted && !quizCompleted && (
                <div>
                    <ButtonReutilisable onClick={() => setQuizStarted(true)} text='Démarrer' />
                </div>
            )}

            {quizStarted && quizList.map((quiz, index) => (
                <div key={index}>
                    <h3>Question {index + 1}: {quiz.question}</h3>
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

            {quizStarted && !quizCompleted && (
                <div>
                    <ButtonReutilisable onClick={calculateScore} text='TERMINER' />
                </div>
            )}

            {quizCompleted && (
                <div>
                    <h3>Score : {score}/{quizList.length}</h3>
                </div>
            )}
        </div>
    );
}
