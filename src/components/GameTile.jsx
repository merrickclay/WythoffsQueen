import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './GameTile.css';

export default function GameTile(props) {
  function handleClick() {
    if (!props.highlighted) {
      return;
    }
    props.callbackFunc({ x: props.x, y: props.y });
  }

  return (
    <div
      className={`game-tile ${props.highlighted ? 'highlighted' : ''}`}
      onClick={handleClick}
    >
      {props.occupied && <FontAwesomeIcon icon="crown" id="crown-icon" />}
      {props.x === 0 && props.y === 0 && (
        <FontAwesomeIcon
          icon={['fab', 'fort-awesome']}
          id="castle-icon"
          className={props.occupied ? 'captured' : ''}
        />
      )}
    </div>
  );
}
