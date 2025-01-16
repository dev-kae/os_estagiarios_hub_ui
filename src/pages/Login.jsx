import React from "react";

function Login() {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="box p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
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

          {/* Botão de Login */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>

          {/* Link para Recuperação de Senha */}
          <div className="text-center mt-3">
            <a href="#!" className="text-decoration-none">
              Esqueceu a senha?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;