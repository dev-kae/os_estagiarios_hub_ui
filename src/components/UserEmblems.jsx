import React, { useState } from "react";
import EmblemModal from "./EmblemModal";

function UserEmblems() {
  const [selectedEmblem, setSelectedEmblems] = useState([
    { id: 0, emblem: "./alpha.png" },
    { id: 1, emblem: "./beta.png" },
    { id: 2, emblem: "./alpha.png" },
  ]);

  const updateEmblem = (index, newEmblem) => {
    setSelectedEmblems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, emblem: newEmblem } : item
      )
    );
  };

  return (
    <div className="box">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Emblemas
      </label>
      <div className="row text-center">
        {selectedEmblem.map((emblem, index) => (
          <div className="col" key={index}>
            <button
              type="button"
              className="btn p-4 btn-dark"
              data-bs-toggle="modal"
              data-bs-target={`#staticBackdrop-${index}`}
            >
              <img
                src={emblem.emblem}
                className="emblem"
                alt={`Emblema ${index}`}
              />
            </button>
            <EmblemModal
              id_modal={index}
              modal_id={`staticBackdrop-${index}`}
              updateEmblem={updateEmblem}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserEmblems;
