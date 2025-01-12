import React, { useState } from 'react'

function ProfileExperience() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Atualiza o estado com a imagem
      };
      reader.readAsDataURL(file); // Lê a imagem como uma URL de dados
    }
  };

  return (
    <div className="box highlight ">
      {/* Foto de perfil */}
      <div className="row justify-content-center align-items-center">
        <div className="col-auto">
          <label htmlFor="fileInput" className="d-block">
            <div
              className="rounded-circle bg-secondary"
              style={{
                width: "100px",
                height: "100px",
                backgroundImage: image ? `url(${image})` : "none",
                backgroundSize: "cover", // A imagem irá cobrir a área circular
                backgroundPosition: "center", // Centraliza a imagem
              }}
            ></div>
          </label>

          {/* Campo de input de arquivo (imagem) */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }} // Esconde o input, permitindo clique na área da imagem
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col text-center">
          <h2>Daenerys Targaryen</h2>
        </div>
      </div>

      
    </div>
  );
}

export default ProfileExperience;
