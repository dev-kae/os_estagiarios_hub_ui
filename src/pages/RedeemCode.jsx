import React from "react";

function RedeemCode() {
  return (
    <div className="container h-100 ">
      <h2 className="mt-2">Resgatar código</h2>
      <div className="d-flex justify-content-center align-items-center h-75 flex-column box">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Entre o código"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="row mt-3 mb-4">
          <div className="col text-center">
            <button className="btn btn-success w-100">Resgatar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedeemCode;
