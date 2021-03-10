import React from 'react';

function Form ({
  onSubmit, 
  selectedCity, 
  handleChange,
  handleUnitChange,
  unit
}){
  return (
    <form onSubmit={onSubmit}>
      <div className="formContainer">
        {/* --- city input begins --- */}
        <div className="input_container flexRow">
          <label htmlFor="cityName">City:</label>
          <input type="text" name="cityName" value={selectedCity} onChange={handleChange} />
        </div>
        {/* --- city input ends --- */}
        {/* --- unit dropdown begins */}
        <div className="input_container flexRow">
          <label htmlFor="unit">Metric:</label>
          <select name="unit" id="unit" onChange={handleUnitChange} value={unit}>
            <option value="metric">Celsius</option>
            <option value="imperial">Fahrenheit</option>
          </select>
        </div>
        {/* --- unit dropdown ends */}
      </div>
      <input type="submit" value={`Check ${selectedCity}'s 5 day forecast`}/>
    </form>
  )
}

export default Form;