import React from "react";
import { Route, Routes } from "react-router-dom";
import CoursPro1 from "../../pages/programmation/CoursPro1";
import CoursPro2 from "../../pages/programmation/CoursPro2";
import CoursPro3 from "../../pages/programmation/CoursPro3";
import CoursPro4 from "../../pages/programmation/CoursPro4";
import CoursPro5 from "../../pages/programmation/CoursPro5";
import CoursPro6 from "../../pages/programmation/CoursPro6";
import CoursMarketing1 from "../../pages/marketing/CoursMarketing1";
import CoursMarketing2 from "../../pages/marketing/CoursMarketing2";
import CoursDesign1 from "../../pages/design/CoursDesign1";
import CoursDesign2 from "../../pages/design/CoursDesign2";
// import Quiz from "../../pages/SousCours/Quiz/Quiz";


const RouteCours = () => {
  return (
    <Routes>
      {/* link programmation */}
      <Route path="/htmlcss" element={<CoursPro1 />} />
      <Route path="/nodejs" element={<CoursPro2 />} />
      <Route path="/angular" element={<CoursPro3 />} />
      <Route path="/JavaScript" element={<CoursPro4 />} />
      <Route path="/reactjs" element={<CoursPro5 />} />
      <Route path="/python" element={<CoursPro6 />} />
      {/* link marketing */}
      <Route path="/initiation" element={<CoursMarketing1 />} />
      <Route path="/etude de marche" element={<CoursMarketing2 />} />
      {/* link design */}
      <Route path="/FIGMA" element={<CoursDesign1 />} />
      <Route path="/CANVA" element={<CoursDesign2 />} />
      {/* <Route path="/quiz" element={<Quiz />} /> */}
    </Routes>
  );
};

export default RouteCours;
