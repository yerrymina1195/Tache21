import EleveTable from "./EleveTable";
import "./Eleve.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AddEleveForm from "./AddEleveForm";

const Eleves = (addEleve, users) => {
  return (
    <div className=" dark:bg-main-dark-bg container  dark:text-gray-200 mt-3 eleve ">
      <div className="flex-row">
        <div className="flex-large">
          <AddEleveForm addEleve={addEleve} />
        </div>

        <div className="flex-large">
          <EleveTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default Eleves;
