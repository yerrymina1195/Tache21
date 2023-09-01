import React from "react";
import ProfTable from "./ProfTable";
import "./Prof.css"
import "bootstrap/dist/js/bootstrap.min.js"

const Prof = () => {
  return (
    <div className=" container p-5 dark:bg-main-dark-bg    dark:text-gray-200  eleve">
      <div className="container">
        <div className="flex-row">
         
          <div className="flex-large">
            <ProfTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prof