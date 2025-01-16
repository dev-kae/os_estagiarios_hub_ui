import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate(); // Hook para navegação

  const handleClick = (route) => {
    navigate(route); // Navega para a rota fornecida
  };
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="box p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Cadastro</h2>
        <form>
          {/* Campo de Nome */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Seu nome"
              aria-label="Nome"
            />
          </div>

          {/* Campo de Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Seu email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          {/* Campo de Senha */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Sua senha"
            />
          </div>

          {/* Campo de Confirmação de Senha */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirme sua senha"
            />
          </div>

          {/* Botão de Cadastro */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </div>

          {/* Link para Login */}
          <div className="text-center mt-3">
            <p>
              Já tem uma conta?{" "}
              <a href="../login" className="text-decoration-none"
              onClick={() => handleClick("signup")}>
                Faça login
              </a>
              {/* <button className="btn btn-dark"
              onClick={() => handleClick("../login")}>
                Faça login
              </button> */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
