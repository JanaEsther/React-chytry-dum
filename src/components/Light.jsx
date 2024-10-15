import { useState } from 'react';
import lightOnUrl from '../../html-vzor/images/light-on.svg';
import lightOffUrl from '../../html-vzor/images/light-off.svg';

const Light = ({ name, state }) => {
  const [light, setLight] = useState(state);

  const handleClick = () => {
    setLight((prevLight) => (prevLight === 'on' ? 'off' : 'on'));
  };

  return (
    <>
      <div className="light" onClick={handleClick}>
        <div className="light__icon">
          <img src={state ? light - lightOffUrl : lightOnUrl} alt="Light" />
        </div>
        <div class="light__name">{name}</div>
      </div>
    </>
  );
};

export default Light;
