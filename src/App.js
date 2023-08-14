import "./App.css";

import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./MainLayout/Layout";
import { Cours, Eleves, Livraisons, Messagerie } from "./pages";


const App = () => {
  const user = {
    status: "admin",
    name: "makhan",
  };
  console.log(user);
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path="/layout/" element={<Layout/>}>
        <Route path="/layout/livraisons" element={<Livraisons/>}/>
        <Route path="/layout/messagerie" element={<Messagerie/>}/>
        <Route path="/layout/cours" element={<Cours/>}/>
        <Route path="/layout/eleves" element={<Eleves/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
