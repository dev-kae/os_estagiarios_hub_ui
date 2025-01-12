import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "../components/UserInfo";
import UserEmblems from "../components/UserEmblems";
import ProfileExperience from "../components/ProfileExperience";
import Points from "../components/Points";
import EmblemModal from "../components/EmblemModal";

function Profile() {
  const handleCopy = () => {
    const textToCopy = "XK4LM23K"; 

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Texto copiado para a área de transferência!"); // Mensagem de sucesso
        })
        .catch((err) => {
          console.error("Falha ao copiar o texto: ", err); 
        });
    } else {
      alert("A funcionalidade de copiar não está disponível no seu navegador.");
    }
  };

  const [selectedEmblems, setSelectedEmblems] = useState([
    { id: 0, emblem: "./alpha.png" },
    { id: 1, emblem: "./beta.png" },
    { id: 2, emblem: "./gamma.png" },
  ]);


  return (
    <div className="container">
      <h2 className="mt-2">Perfil</h2>
      <ProfileExperience />
      <Points />
      
      <UserEmblems />
      {/* <EmblemModal updateEmblem={updateEmblem} /> */}

      <div className="box">
        <div className="row">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            ID do usuário
          </label>
        </div>

        <div className="row d-flex flex-column align-items-center">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="XK4LM23K"
              aria-label="Username"
              disabled
            />
            <button className="btn btn-dark" onClick={handleCopy}>
              <i className="bi bi-clipboard"></i>
            </button>
          </div>
        </div>
      </div>
      
      <UserInfo />

      <div className="box">
        <div className="row mb-3">
          <div className="col text-center">
            <button className="btn btn-success w-100">Salvar Alterações</button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <button className="btn btn-danger w-100">Reportar Problema</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
