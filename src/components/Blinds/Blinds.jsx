import React from 'react';
import { useState } from 'react';
import blindsOpenUrl from '../../../html-vzor/images/blinds-open.svg'
import blindsClosedUrl from '../../../html-vzor/images/blinds-closed.svg'
import './Blinds.css';

const Blinds = ({ state }) => {
  const [blindsState, setBlindsState] = useState(state);

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img
          src={
            blindsState === 'open'
              ? blindsOpenUrl
              : blindsClosedUrl
          }
          alt={blindsState === 'open' ? blindsOpenUrl : blindsClosedUrl}
        />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          type="button"
          className={`button ${
            blindsState === 'open' ? 'button--active' : ''
          } `}
          onClick={() => setBlindsState('open')}
        >
          Otevřeno
        </button>
        <button
          type="button"
          className={`button ${
            blindsState === 'closed' ? 'button-active' : ''
          }`}
          onClick={() => setBlindsState('closed')}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
