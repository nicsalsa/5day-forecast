import React from 'react';
import Form from '../Form/Form';
import HeaderContent from '../HeaderContent/HeaderContent';

function Header({
  city,
  forecast,
  showMetric,
  onSubmit,
  selectedCity,
  handleChange,
  handleUnitChange,
  unit
}){
  return(
    <header className="App-header">
      <div className="fixed">
        <HeaderContent city={city} forecast={forecast} showMetric={showMetric} />
        {/* --- form begins --- */}
        <Form 
          onSubmit={onSubmit}
          selectedCity={selectedCity}
          handleChange={handleChange}
          handleUnitChange={handleUnitChange}
          unit={unit}
        />
        {/* --- form ends --- */}
      </div>
    </header>
  )
}

export default Header;