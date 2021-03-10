import React from 'react';
import Form from '../Form/Form';
import HeaderContent from '../HeaderContent/HeaderContent';

function HeaderMobile({
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
    <header className="App-header--responsive">
      <div className="fixed--responsive">
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

export default HeaderMobile;