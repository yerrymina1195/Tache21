import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import {
  Livraisons,
  Messagerie,
  Cours,
  Eleves,
  Design,
} from "./pages";
import TesteOne from './components/CarteSousCours/TesteOne'
import Quiz from "./pages/SousCours/Quiz/Quiz";
// import RouteCours from "./components/RouteCours/RouteCours";
import Certification from "./pages/Certification/Certification";
import Dashbord from "./pages/Dashboard/Dashbord";
import Connexion from "./pages/pageConnexion/Connexion";
import ForgetPassword from "./pages/pageConnexion/ForgetPassword";
import Layout from "./MainLayout/Layout";
import Prof from "./pages/ListProfs/Prof";
import Parametre from "./pages/parametres/Parametre";
import DashbordCoach from "./pages/DashboardCoach/DashboardCoach";
import DashbordEleve from "./pages/DashboardEleve/DashboardEleve";
import PrivateRouteLayout from "./components/RouteCours/Prroute";
import PriveRoute from "./components/priveroute/PriveRoute";
// import DashboardCoach from "./pages/DashboardCoach/DashboardCoach";
import NonAutorise from "./pages/NonAutorise";
import NotFound from "./pages/NotFound";
import ResetPassWord from "./pages/pageConnexion/ResetPassWord";
import Securite from "./pages/parametres/Securite";
import VoirCertificat from "./components/CerticationTache/VoirCertificate";
import GenererCertificat from "./components/CerticationTache/GenererCertificat";
import { db } from "./Firebase/Firebase";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";

const App = () => {
  const { user } = useStateContext();
  const userType = user;
  const [domains, setDomains] = useState([]);
  const domaineCollectionRef = collection(db, "domains");
  const [sousDomains, setSousDomaines] = useState([]);
  const sousDomaineCollectionRef = collection(db, "sousDomains");

  useEffect(() => {
    const q = query(collection(db, "domains"));
    onSnapshot(q, (querySnapshot) => {
      const domains = [];
      querySnapshot.forEach((doc) => {
        domains.push(doc.data().title);
      });
      const getDomaines = async () => {
        const data = await getDocs(domaineCollectionRef);
        setDomains(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getDomaines();
    });
    const p = query(collection(db, "sousDomains"));
    onSnapshot(p, (querySnapshot) => {
      const sousDomains = [];
      querySnapshot.forEach((doc) => {
        sousDomains.push(doc.data().title);
      });
      const getSousDomaines = async () => {
        const data = await getDocs(sousDomaineCollectionRef);
        setSousDomaines(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };
      getSousDomaines();
    });
    // eslint-disable-next-line
  }, [ ]);

  return (
    <BrowserRouter>
      <Routes>
        {/* dashboard  */}
        <Route path="/" element={<Connexion />} />
        <Route path="/f" element={<ForgetPassword />} />
        <Route path="/ResetPassWord" element={<ResetPassWord />} />
        <Route path="/unauthorized" element={<NonAutorise />} />

        {/* <Route path="/l" element={<Layout/>} > */}
        <Route
          path="/l"
          element={
            <PrivateRouteLayout authorizedRoles={["admin", "coach", "eleve"]}>
              <Layout />
            </PrivateRouteLayout>
          }
        >
          <Route
            path="/l/dashboard"
            element={
              userType?.statut === "admin" ? (
                <Dashbord />
              ) : userType?.statut === "coach" ? (
                <DashbordCoach />
              ) : userType?.statut === "eleve" ? (
                <DashbordEleve />
              ) : (
                ""
              )
            }
          />

          {/* Pages */}
          <Route path="/l/livraisons" element={<Livraisons />} />
          <Route path="/l/messagerie" element={<Messagerie />} />
          <Route path="/l/cours" element={<Cours />} />
          {domains.map((domain) => (
            <Route
              key={domain.id}
              path={`/l/cours/${domain.title}`}
              // element={<Design title={domain.title} />}
              element={
                <PriveRoute
                  authorizedRoles={["admin", "coach", "eleve"]}
                  requiredDomain={domain.title.toLowerCase()}
                >
                  {" "}
                  <Design title={domain.title} />{" "}
                </PriveRoute>
              }
            />
          ))}
          {sousDomains.map((sousDomain) => (
            <Route
              key={sousDomain.id}
              path={`/l/cours/domains/${sousDomain.title}`}
              element={<TesteOne title={sousDomain.title} />}
            />
          ))}

          {/* <Route
            path="/l/cours/programmation"
            element={
              <PriveRoute
                authorizedRoles={["admin", "Coach", "eleve"]}
                requiredDomain={"Programmation"}
              >
                {" "}
                <Programmation />{" "}
              </PriveRoute>
            }
          /> */}
          <Route
            path="/l/professeurs"
            element={
              <PriveRoute authorizedRoles={["admin", "Coach"]}>
                {" "}
                <Prof />{" "}
              </PriveRoute>
            }
          />
          {/* <Route
            path="/l/cours/programmation/*"
            element={
              <PriveRoute
                authorizedRoles={["admin", "coach", "eleve"]}
                requiredDomain={"Programmation"}
              >
                {" "}
                <RouteCours />{" "}
              </PriveRoute>
            }
          /> */}
          {/* <Route
            path="/l/cours/marketing"
            element={
              <PriveRoute
                authorizedRoles={["admin", "coach", "eleve"]}
                requiredDomain={"Marketing Digital"}
              >
                {" "}
                <Marketing />{" "}
              </PriveRoute>
            }
          /> */}
          {/* <Route
            path="/l/cours/marketing/*"
            element={
              <PriveRoute
                authorizedRoles={["admin", "coach", "eleve"]}
                requiredDomain={"Marketing Digital"}
              >
                {" "}
                <RouteCours />{" "}
              </PriveRoute>
            }
          /> */}
          {/* <Route
            path="/l/cours/design"
            element={
              <PriveRoute
                authorizedRoles={["admin", "coach", "eleve"]}
                requiredDomain={"Design"}
              >
                {" "}
                <Design />{" "}
              </PriveRoute>
            }
          /> 
          <Route
            path="/l/cours/design/*"
            element={
              <PriveRoute
                authorizedRoles={["admin", "coach", "eleve"]}
                requiredDomain={"Design"}
              >
                <RouteCours />{" "}
              </PriveRoute>
            }
          />*/}
          <Route path="/l/quiz" element={<Quiz />} />
          <Route
            path="/l/eleves"
            element={
              <PriveRoute authorizedRoles={["admin", "coach"]}>
                {" "}
                <Eleves />{" "}
              </PriveRoute>
            }
          />
          <Route path="/l/parametres" element={<Parametre />} />
          <Route path="/l/securite" element={<Securite />} />
          <Route path="/l/certification" element={<Certification />} />
          <Route path="/l/GenererCertificat" element={<GenererCertificat />} />
        </Route>
        <Route path="/l/voircertificate" element={(<VoirCertificat />)} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
