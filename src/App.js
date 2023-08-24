import "./App.css";
import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import {
  Livraisons,
  Messagerie,
  Cours,
  Eleves,
  Programmation,
  Design,
  Marketing,
} from "./pages";
import Quiz from "./pages/SousCours/Quiz/Quiz";
import RouteCours from "./components/RouteCours/RouteCours";
import Certification from './pages/Certification/Certification';
import Dashbord from "./pages/Dashboard/Dashbord";
import Connexion from "./pages/pageConnexion/Connexion";
import ForgetPassword from "./pages/pageConnexion/ForgetPassword";
import Layout from "./MainLayout/Layout";
import Prof from "./pages/ListProfs/Prof";
import Parametre from "./pages/parametres/Parametre";
import DashbordCoach from "./pages/DashboardCoach/DashboardCoach";
import DashbordEleve from "./pages/DashboardEleve/DashboardEleve";
import PrivateRouteLayout from "./components/RouteCours/Prroute";
import  PriveRoute  from "./components/priveroute/PriveRoute";
// import DashboardCoach from "./pages/DashboardCoach/DashboardCoach";
import  NonAutorise  from "./pages/NonAutorise";
import  NotFound  from "./pages/NotFound";
import ResetPassWord from "./pages/pageConnexion/ResetPassWord";

const App = () => {
  const{user}=useStateContext()
const userType = user;



  return (

<BrowserRouter>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Connexion/>} />
                <Route path="/f" element={<ForgetPassword/>} />
                <Route path="/ResetPassWord" element={<ResetPassWord/>} />
                <Route path="/unauthorized" element={<NonAutorise/>} />

                {/* <Route path="/l" element={<Layout/>} > */}
                <Route path="/l" element={<PrivateRouteLayout authorizedRoles={['admin', 'coach', 'eleve']}><Layout /></PrivateRouteLayout>}>                
                <Route path="/l/dashboard" element={userType?.statut ==='admin'?<Dashbord />:userType?.statut ==='coach'?<DashbordCoach/>:userType?.statut ==='eleve'?<DashbordEleve/>:""} />
                

                {/* Pages */}
                <Route path="/l/livraisons" element={<Livraisons />} />
                <Route path="/l/messagerie" element={<Messagerie />} />
                <Route path="/l/cours" element={<Cours />} />
                <Route
                  path="/l/cours/programmation"

                  element={<PriveRoute authorizedRoles={['admin', 'Coach', 'eleve']} requiredDomain={"Programmation"}> <Programmation /> </PriveRoute>}
                />
     <Route path="/l/professeurs" element={<PriveRoute authorizedRoles={['admin', 'Coach']}> <Prof /> </PriveRoute>}/>
                <Route path="/l/cours/programmation/*"  element={<PriveRoute authorizedRoles={['admin', 'coach', 'eleve']} requiredDomain={"Programmation"}> <RouteCours /> </PriveRoute>} />
                <Route path="/l/cours/marketing" element={<PriveRoute authorizedRoles={['admin', 'coach', 'eleve']} requiredDomain={"Marketing Digital"}> <Marketing /> </PriveRoute>} />
                <Route path="/l/cours/marketing/*" element={<PriveRoute authorizedRoles={['admin', 'coach', 'eleve']} requiredDomain={"Marketing Digital"}> <RouteCours /> </PriveRoute>} />
                <Route path="/l/cours/design" element={<PriveRoute authorizedRoles={['admin', 'coach', 'eleve']} requiredDomain={"Design"}> <Design /> </PriveRoute>} />
                <Route path="/l/cours/design/*"  element={<PriveRoute authorizedRoles={['admin', 'coach', 'eleve']} requiredDomain={"Design"}><RouteCours /> </PriveRoute>} />
                <Route path="/l/quiz" element={<Quiz />} />
                <Route path="/l/eleves" element={<PriveRoute authorizedRoles={['admin', 'coach']}> <Eleves /> </PriveRoute>}/>
                {/* <Route path="/l/professeurs" element={< Prof/>} /> */}
                <Route path="/l/parametres" element={< Parametre/>} />
                <Route path="/l/certification" element={(<Certification />)} />
                </Route>
                <Route path="*" element={<NotFound/>} />
              </Routes>
          
      
      </BrowserRouter >
    
  );
};

export default App;