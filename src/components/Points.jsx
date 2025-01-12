import React from 'react'

function Points() {
  return (
    <div className="box">
        <div className='row'>
            <div className="col-6">
            <label htmlFor="exampleFormControlInput1" className="form-label custom-color-reward">
            Pontos
          </label>
            </div>
            <div className="col-6">
            <label htmlFor="exampleFormControlInput1" className="form-label custom-color-reward">
            Emblemas Únicos
          </label>
            </div>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="1500"
            aria-label="Username"
          />
      
          <input
            type="text"
            className="form-control"
            placeholder="20"
            aria-label="Server"
          />
        </div>
      </div>
  )
}

export default Points