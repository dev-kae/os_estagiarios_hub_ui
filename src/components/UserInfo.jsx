import React from "react";

function UserInfo() {
  return (
    <div className="box">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Informações da conta
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Endereço de email
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="kaeteodoro@gmail.com"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled
                />
              </div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Data de crição da conta
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="12/08/2024"
                  aria-label="Username"
                  disabled
                />
              </div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Área de interesse
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Inteligência Artificial"
                  aria-label="Username"
                  disabled
                />
              </div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Instagram
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="k4_lucas"
                  aria-label="Username"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
