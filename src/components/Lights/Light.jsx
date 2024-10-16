import React from 'react';
import { useState } from 'react';
import lightOnUrl from '../../../html-vzor/images/light-on.svg';
import lightOffUrl from '../../../html-vzor/images/light-off.svg';
import './Lights.css';

const Light = ({ name, state }) => {
  const [light, setLight] = useState(state);

  const handleClick = () => {
    setLight((prevLight) => (prevLight === 'on' ? 'off' : 'on'));
  };

  return (
    <>
      <div className="light" onClick={handleClick}>
        <div className="light__icon">
          <img src={light === 'off' ? lightOffUrl : lightOnUrl} alt={name} />
        </div>
        <div className="light__name">{name}</div>
      </div>
    </>
  );
};

export default Light;
