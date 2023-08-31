import React, { useEffect, useState } from 'react';
import { doc, updateDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { useStateContext } from '../../contexts/ContextProvider';
import { db } from '../../Firebase/Firebase';
import '../cardDomaines/Domaine.css';
import { BsArchiveFill, BsPencilSquare } from 'react-icons/bs';
import ReactPlayer from 'react-player';
import './Test.css';

const Teste = (props) => {
  const {user} = useStateContext();
  const { courseId } = props;

  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const fetchCourseStatus = async () => {
      try {
        if (courseId) {
          const studentDocRef = doc(db, 'cours', courseId);
          const studentDoc = await getDoc(studentDocRef);

          if (studentDoc.exists()) {
            const data = studentDoc.data();
            setStarted(data[user.id]?.demarrer || false); 
            setFinished(data[user.id]?.terminer || false);
          }
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchCourseStatus();
  }, [courseId, user.id]);

  const handleStart = async () => {
    try {
      const studentDocRef = doc(db, 'cours', courseId);

      await updateDoc(studentDocRef, {
        [user.id]:{
          idcoach: user.coachSelf,
          demarrer: true,
          finishedtime: serverTimestamp(),
        },
      });

      setStarted(true);
    } catch (error) {
      console.error('Erreur lors du démarrage:', error);
    }
  };

  const handleFinish = async () => {
    try {
      const studentDocRef = doc(db, 'cours', courseId);

      await updateDoc(studentDocRef, {
        [user.id]:{
          idcoach: user.coachSelf,
          demarrer: true,
          terminer: true,
          finishedtime: serverTimestamp(),
        }
      });

      setFinished(true);
    } catch (error) {
      console.error('Erreur lors de la fin:', error);
    }
  };

  return (
    <div className="card mx-md-5 border-0 drop-shadow-lg dark:bg-main-dark-bg dark:text-gray-200 dark:drop-shadow-[0_8px_0px_rgba(255,255,255,0.25)]">
      <a href={props.videoUrl} target="_blank" rel="noopener noreferrer">
        <ReactPlayer url={props.videoUrl} controls width="100%" height="400px" />
      </a>
      <div className="card-body ">
        <div className="row">
          <div className="col-6">
            <a href={props.videoUrl} className="text-decoration-none text-black titre">
              <h5 className="card-title capitalize dark:text-[#ffff]">{props.title}</h5>
            </a>
          </div>
          <div className="col-6 text-end">
            <b className="rest">{props.dure}</b>
          </div>
        </div>

        <p className="card-text">{props.descrip}</p>
        <div className="row btn-domaine">
         { !user.statut === "eleve" ? <div className="col-md-6">
            <button
              type="button"
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={props.onClick}
            >
              <BsPencilSquare />
            </button>
            <button type="button" className="btn mx-3" onClick={props.click}>
              <BsArchiveFill />
            </button>
          </div> :""}
 { user.statut === "eleve"    ?    <div className="col-md-6 text-lg-end text-md-end text-sm-start colonne">
  {!started && (
    <button type="button" className="btn" onClick={handleStart}>
      DEMARRER
    </button>
  )}
  {started && !finished && (
    <button type="button" className="btn" onClick={handleFinish}>
      TERMINER
    </button>
  )}
  {finished && (
    <button type="button" className="btn btn-disabled" disabled>
      COURS TERMINÉ
    </button>
  )}
</div>:""}

        </div>
      </div>
    </div>
  );
};

export default Teste;
