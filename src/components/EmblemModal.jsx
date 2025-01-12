import React from "react";

function EmblemModal({ id_modal, modal_id, updateEmblem }) {
  const emblems = [
    {
      name: "Alpha Tester",
      descricao:
        "Um emblema raro para aqueles que participaram do nosso teste de pré-lançamento.",
      image_path: "./alpha.png",
      creation_date: "01/02/2022",
      active: true,
    },
    {
      name: "Beta Tester",
      descricao: "teste beta",
      image_path: "./beta.png",
      creation_date: "01/01/2025",
      active: true,
    },
    {
      name: "Caçador de bugs",
      descricao: "Um emblema para aqueles que encontraram bugs na nossa plataforma.",
      image_path: "./bug_hunter.png",
      creation_date: "12/09/2024",
      active: true,
    },
  ];

  return (
    <div >
      <div
        className="modal fade"
        id={modal_id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={`${modal_id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${modal_id}Label`}>
                Emblemas
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {emblems.map((emblema, index) => (
                <div className="row" key={index}>
                  <div
                    className="card m-auto mt-2"
                    style={{ maxWidth: "350px" }}
                  >
                    <img
                      src={emblema.image_path}
                      className="card-img-top p-5"
                      alt={emblema.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{emblema.name}</h5>
                      <p className="card-text">{emblema.descricao}</p>
                      {emblema.active && (
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            updateEmblem(id_modal, emblema.image_path)
                          }
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Selecionar
                        </button>
                      )}

                      <p className="card-text">
                        <small className="text-muted">
                          Criado em {emblema.creation_date}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmblemModal;
