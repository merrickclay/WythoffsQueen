import React, { useState, useEffect } from 'react';
import './Popup.css';

export default function Popup(props) {
  const [show, setShow] = useState('false');

  useEffect(() => {
    setShow(props.visible);
  }, [props.visible]);

  function onButtonClicked() {
    setShow(false);
    props.onClickFunc();
  }

  return (
    <div
      className="overlay"
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
      }}
    >
      <div className="popup">
        <h2>{props.title}</h2>
        <h4>{props.message}</h4>
        <div>{props.challenge}</div>
        <button onClick={onButtonClicked}>{props.buttonText}</button>
      </div>
    </div>
  );
}
