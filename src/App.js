import "./App.css";
import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
// import DashboardCoach from "./pages/DashboardCoach/DashboardCoach";


const App = () => {
const user = {statut:"eleve"}

  return (
    
    
      <BrowserRouter>
 


              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Connexion/>} />
                <Route path="/f" element={<ForgetPassword/>} />
                <Route path="/l" element={<Layout/>} >
              
                
                <Route path="/l/dashboard" element={user.statut ==='admin'?<Dashbord />:user.statut ==='coach'?<DashbordCoach/>:user.statut ==='eleve'?<DashbordEleve/>:""} />
                

                {/* Pages */}
                <Route path="/l/livraisons" element={<Livraisons />} />
                <Route path="/l/messagerie" element={<Messagerie />} />
                <Route path="/l/cours" element={<Cours />} />
                <Route
                  path="/l/cours/programmation"
                  element={<Programmation />}
                />
                <Route path="/l/cours/programmation/*" element={<RouteCours />} />
                <Route path="/l/cours/marketing" element={<Marketing />} />
                <Route path="/l/cours/marketing/*" element={<RouteCours />} />
                <Route path="/l/cours/design" element={<Design />} />
                <Route path="/l/cours/design/*" element={<RouteCours />} />
                <Route path="/l/quiz" element={<Quiz />} />
                <Route path="/l/eleves" element={<Eleves />} />
                <Route path="/l/professeurs" element={< Prof/>} />
                <Route path="/l/parametres" element={< Parametre/>} />
                <Route path="/l/certification" element={(<Certification />)} />
                </Route>
              </Routes>
          
      
      </BrowserRouter >
    
  );
};

export default App;