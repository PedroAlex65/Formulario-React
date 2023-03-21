import React from "react";
import "./styles/App.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Confirmacao from "./Confirmacao";

function App() {
  const [modal, setModal] = React.useState(false);

  return (
    <div className="container">
      {modal !== true && <SectionOne />}

      {modal !== true && <SectionTwo modal={modal} setModal={setModal} />}

      {modal && <Confirmacao />}
    </div>
  );
}

export default App;
