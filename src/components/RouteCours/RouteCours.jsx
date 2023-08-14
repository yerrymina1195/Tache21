import React from "react";
import { Route, Routes } from "react-router-dom";
import CoursPro1 from "../../pages/programmation/CoursPro1";
import CoursPro2 from "../../pages/programmation/CoursPro2";
import CoursPro3 from "../../pages/programmation/CoursPro3";
import CoursPro4 from "../../pages/programmation/CoursPro4";
import CoursPro5 from "../../pages/programmation/CoursPro5";
import CoursPro6 from "../../pages/programmation/CoursPro6";

const RouteCours = () => {
  return (
    <Routes>
      <Route path="/htmlcss" element={<CoursPro1 />} />
      <Route path="/nodejs" element={<CoursPro2 />} />
      <Route path="/angular" element={<CoursPro3 />} />
      <Route path="/JavaScript" element={<CoursPro4 />} />
      <Route path="/reactjs" element={<CoursPro5 />} />
      <Route path="/python" element={<CoursPro6 />} />
    </Routes>
  );
};

export default RouteCours;
