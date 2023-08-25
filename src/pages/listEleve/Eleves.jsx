import EleveTable from "./EleveTable";
import "./Eleve.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Eleves = () => {
  return (
    <div className="   bg-[#ffff]  dark:bg-main-dark-bg    dark:text-gray-200 mt-3 eleve rounded-3xl">
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            <EleveTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eleves;
