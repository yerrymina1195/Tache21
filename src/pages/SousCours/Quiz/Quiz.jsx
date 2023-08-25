import React, { useState } from "react";

export default function Quiz() {
  const [answers, setAnswers] = useState(Array(10).fill(""));
  const [score, setScore] = useState(null);

  const questions = [
    {
      question: "1- Quelle est la différence entre Bootstrap et CSS?",
      options: [
        "a- Bootstrap est un framework.",
        "b- CSS est un framework.",
        "c- Ils sont identiques.",
        "d- Aucune des réponses ci-dessus."
      ],
      correctAnswer: 0 // L'indice de la réponse correcte dans le tableau options
    },
    {
      question: "1- Quelle est la différence entre Bootstrap et CSS?",
      options: [
        "a- Bootstrap est un framework.",
        "b- CSS est un framework.",
        "c- Ils sont identiques.",
        "d- Aucune des réponses ci-dessus."
      ],
      correctAnswer: 3// L'indice de la réponse correcte dans le tableau options
    },
    {
      question: "1- Quelle est la différence entre Bootstrap et CSS?",
      options: [
        "a- Bootstrap est un framework.",
        "b- CSS est un framework.",
        "c- Ils sont identiques.",
        "d- Aucune des réponses ci-dessus."
      ],
      correctAnswer: 0 // L'indice de la réponse correcte dans le tableau options
    },
    {
      question: "1- Quelle est la différence entre Bootstrap et CSS?",
      options: [
        "a- Bootstrap est un framework.",
        "b- CSS est un framework.",
        "c- Ils sont identiques.",
        "d- Aucune des réponses ci-dessus."
      ],
      correctAnswer: 0 // L'indice de la réponse correcte dans le tableau options
    },
    {
      question: "1- Quelle est la différence entre Bootstrap et CSS?",
      options: [
        "a- Bootstrap est un framework.",
        "b- CSS est un framework.",
        "c- Ils sont identiques.",
        "d- Aucune des réponses ci-dessus."
      ],
      correctAnswer: 0 // L'indice de la réponse correcte dans le tableau options
    },
    {
      question: "1- Quelle est la différence entre Bootstrap et CSS?",
      options: [
        "a- Bootstrap est un framework.",
        "b- CSS est un framework.",
        "c- Ils sont identiques.",
        "d- Aucune des réponses ci-dessus."
      ],
      correctAnswer: 0 // L'indice de la réponse correcte dans le tableau options
    },
    {
      question: "1- Quelle est la différence entre Bootstrap et CSS?",
      options: [
        "a- Bootstrap est un framework.",
        "b- CSS est un framework.",
        "c- Ils sont identiques.",
        "d- Aucune des réponses ci-dessus."
      ],
      correctAnswer: 0 // L'indice de la réponse correcte dans le tableau options
    },
    {
      question: "1- Quelle est la différence entre Bootstrap et CSS?",
      options: [
        "a- Bootstrap est un framework.",
        "b- CSS est un framework.",
        "c- Ils sont identiques.",
        "d- Aucune des réponses ci-dessus."
      ],
      correctAnswer: 0 // L'indice de la réponse correcte dans le tableau options
    },
    {
      question: "1- Quelle est la différence entre Bootstrap et CSS?",
      options: [
        "a- Bootstrap est un framework.",
        "b- CSS est un framework.",
        "c- Ils sont identiques.",
        "d- Aucune des réponses ci-dessus."
      ],
      correctAnswer: 0 // L'indice de la réponse correcte dans le tableau options
    },
    {
      question: "1- Quelle est la différence entre Bootstrap et CSS?",
      options: [
        "a- Bootstrap est un framework.",
        "b- CSS est un framework.",
        "c- Ils sont identiques.",
        "d- Aucune des réponses ci-dessus."
      ],
      correctAnswer: 0 // L'indice de la réponse correcte dans le tableau options
    },
    // Définissez vos autres questions ici de la même manière
  ];

  const handleAnswerSelect = (questionIndex, selectedOptionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedOptionIndex;
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let totalScore = 0;
    answers.forEach((selectedOptionIndex, questionIndex) => {
      const question = questions[questionIndex];
      if (selectedOptionIndex === question.correctAnswer) {
        totalScore++;
      }
    });
    return totalScore;
  };

  const handleSubmit = () => {
    const totalScore = calculateScore();
    setScore(totalScore);
  };

  const renderQuestions = () => {
    return questions.map((question, questionIndex) => (
      <div className="flex-col" key={questionIndex}>
        <p>{question.question}</p>
        {question.options.map((option, optionIndex) => (
         <label className="flex-col" key={optionIndex}>
            <input
              type="radio"
              name={`question_${questionIndex}`}
              value={optionIndex}
              onChange={() => handleAnswerSelect(questionIndex, optionIndex)}
              checked={answers[questionIndex] === optionIndex}
            />
            {option} 
          </label> 
        ))}
      </div>
    ));
  };

  return (
    <div className="bg-white px-5">
      <h1 className="text-center">Quiz</h1>
      <p className="mb-5">
        Découvre tes connaissances avec notre quiz interactif !
      </p>

      {renderQuestions()}
      <br />
      {score === null ? (

        <button
          type="button"
          className="prev text-white align-items-center justify-content-center d-flex"
          onClick={handleSubmit}
        >
          Terminer
        </button> 
      ) : (
      
        
        <p className="text-center mt-5 w-25 h-10 justify-start bg-couleur2 font-bold">Score : {score} / {questions.length}</p>
      )}
    </div>
  );
}
