import { React, useState, useEffect } from "react";
import "../cardDomaines/Domaine.css";
import { BsArchiveFill, BsPencilSquare } from "react-icons/bs";
import ReactPlayer from "react-player";
import { db } from "../../Firebase/Firebase";
import { doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { useStateContext } from '../../contexts/ContextProvider';


const Teste = (props) => {

  const {user, coachSelf} = useStateContext();

   const [setMappageData] = useState(null);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const fetchMappageData = async () => {
      try {
        const courseRef = doc(db, "cours", props.courseId); 
        const courseDoc = await getDoc(courseRef);
        if (courseDoc.exists()) {
          const data = courseDoc.data().mappage;
          setMappageData(data);
          setStarted(data.demarrer || false);
          setFinished(data.terminer || false);
        } else {
          console.log("Le document n'existe pas");
        }
      } catch (error) {
        console.error("Erreur pour fetcher le document:", error);
      }
    };
  
    fetchMappageData();
  }, [props.courseId]);

  const handleStart = async () => {
    const courseRef = doc(db, "cours", '6uAUiGH8KY3muz3ojYwd');
    await updateDoc (courseRef, {
      [user.id]:{
        demarrer: true,
        startime: serverTimestamp(),
      }
    })
    setStarted(true);
  };

  const handleFinish = async () => {
    const courseRef = doc(db, "cours", '6uAUiGH8KY3muz3ojYwd');
    await updateDoc(courseRef, {
      [user.id]:{
        demarrer: true,
        terminer: true,
        finishedtime: serverTimestamp(),
      }
    });
    setFinished(true);
  };

    return (
      <div className="card mx-md-5 border-0 drop-shadow-lg dark:bg-main-dark-bg dark:text-gray-200 dark:drop-shadow-[0_8px_0px_rgba(255,255,255,0.25)]">
        <a href={props.videoUrl} target="_blank" rel="noopener noreferrer">
          <ReactPlayer
            url={props.videoUrl}
            controls
            width="100%"
            height="400px"
          />
        </a>
        <div className="card-body ">
          <div className="row">
            <div className="col-6">
              <a
                href={props.videoUrl}
                className="text-decoration-none text-black titre"
              >
                <h5 className="card-title capitalize dark:text-[#ffff]">{props.title}</h5>
              </a>
            </div>
            <div className="col-6 text-end">
              <b className="rest">{props.dure} heures</b>
            </div>
          </div>

          <p className="card-text">{props.descrip}</p>
          <div className="row btn-domaine">
            <div className="col-md-6">
              <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={props.onClick}
              >
                <BsPencilSquare />
              </button>
              <button type="button" className="btn mx-3" onClick={props.click}>
                <BsArchiveFill />
              </button>
            </div>
            <div className="col-md-6 text-lg-end text-md-end text-sm-start">
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
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Teste;
