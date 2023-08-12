import "./App.css";

import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./MainLayout/Layout";

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
        <Route path="/layout/" element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
