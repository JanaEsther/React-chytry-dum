import { useEffect, useState } from "react";

const Climate = ({ temperature, humidity }) => {
  const[temperature, setTemperature] = useState(temperature)
  return (
    <div className="climate">
      <div className="climate__icon">
        <img src="./images/temp.svg" />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{humidity}C</div>
        <div className="climate__humidity">Vlhost vzduchu {temperature}%</div>
      </div>
      <div className="climate__controls">
        <button
          className="button"
          onClick={() => setTemperature(temperature + 1)}
        >+</button>
        <button className="button"
        onClick={()=> setTemperature(temperature - 1)}
        >-</button>
      </div>
    </div>
  );
};

export default Climate;
