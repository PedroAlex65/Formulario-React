import React from "react";
import Confirmacao from "./Confirmacao";

const formField = [
  {
    id: "nome",
    placeholder: "Nome",
    type: "nome",
  },
  {
    id: "sobrenome",
    placeholder: "Sobrenome",
    type: "nome",
    required: "required",
  },
  {
    id: "email",
    placeholder: "Email",
    type: "email",
  },
  {
    id: "senha",
    placeholder: "Senha",
    type: "password",
  },
];

const SectionTwo = ({ modal, setModal }) => {
  const [form, setForm] = React.useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
  });

  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
      setModal(true);
    });
  }

  return (
    <section className="section-two">
      <div className="link">
        <a href="#.com">
          Experimente 7 dias gráti<span>s então $20 /mês Depois disso </span>
        </a>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          {formField.map(({ id, placeholder, type }) => (
            <div key={id}>
              <input
                id={id}
                value={form[id]}
                placeholder={placeholder}
                type={type}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button>SOLICITAR TESTE GRATUITO</button>

          <p>
            Ao clicar no botão, você concorda com nossos{" "}
            <span>Termos e Serviços</span>
          </p>
        </label>
      </form>
      
    </section>
  );
};

export default SectionTwo;
