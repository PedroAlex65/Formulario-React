import React from "react";
import Img from "./img/confirm.png";

const Confirmacao = () => {
  return (
    <div className="section-confirm">
      <img src={Img} alt="Checked" />
      <h1>INSCRIÇÃO CONFIRMADA!</h1>
      <p>Agradecemos sua inscrição! Aguarde por mais informações em breve.</p>
    </div>
  );
};

export default Confirmacao;
