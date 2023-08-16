import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';
import Sidebar  from "./components/Sidebar";
import Navbar from "./components/Navbar";

import {Dashbord} from "./pages";

function App() {
  const { activeMenu } = useStateContext();


  return (
    <BrowserRouter>
    <div className="container-fluid position relative bg-light min-vh-100  ">
      <div className="row">
        {activeMenu?(<div className="gtret">
          
           <Sidebar/>
        </div>):("")}
        
        <div className="col px-0">
          <div className="sticky-top">

           <Navbar/>
          </div>

           <div className="container-fluid pt-4">
         
           
    <Routes>
    {/* <Route path="/" element={(<Livraisons/>)} />  */}
   
   {/* dashboard  */}
   <Route path="/dashbord" element={(<Dashbord />)} />

   {/* Pages */}
    {/* <Route path="/livraisons" element={< Livraisons/>} />
   <Route path="/messagerie" element={(<Messagerie />)} />
   <Route path="/cours" element={(<Cours />)} />
   <Route path="/eleves" element={(<Eleves />)} /> */}
 </Routes> 

           </div>
        </div>

      </div>

    </div>
    </BrowserRouter>
    // col-2 col-md-3 min-vh-100  bg-white pe-3
  );
}

export default App;
