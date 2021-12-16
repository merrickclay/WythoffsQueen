import React, { useState, useCallback } from 'react';
import Axios from 'axios';
import dateFormat from 'dateformat';
import GameTile from './GameTile';
import './GameBoard.css';
import { useEffect } from 'react';

const AWS = require('aws-sdk');

export default function GameBoard(props) {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [tiles, setTiles] = useState(null);
  const [acceptNewMoves, setAcceptNewMoves] = useState(true);

  const invokeUrl = 'https://6k6fezitqe.execute-api.us-west-1.amazonaws.com/';

  function startGame() {
    var time = Date.now();
    time = dateFormat(Date.now(), 'yyyymmdd"T"hhMMss"Z"');
    Axios.post(
      invokeUrl + 'startGame',
      {},
      {
        headers: {
          UserId: AWS.config.credentials.identityId,
          'X-Amz-Date': time,
        },
      }
    )
      .then((response) => {
        console.log(response);
        setPosition({
          x: response.data.position.x,
          y: response.data.position.y,
        });
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }

  const submitMove = useCallback(
    async (newPosition) => {
      if (!acceptNewMoves) {
        return;
      }
      setAcceptNewMoves(false);
      setPosition(newPosition);
      await new Promise((resolve) => setTimeout(resolve, 300));
      var time = Date.now();
      time = dateFormat(Date.now(), 'yyyymmdd"T"hhMMss"Z"');
      Axios.post(
        invokeUrl + 'submitMove',
        { movePosition: newPosition },
        {
          headers: {
            UserId: AWS.config.credentials.identityId,
            'X-Amz-Date': time,
          },
        }
      )
        .then(async (response) => {
          console.log(response);
          setAcceptNewMoves(true);
          setError(null);
          setPosition({
            x: response.data.position.x,
            y: response.data.position.y,
          });
          if (response.data.gameStatus !== 'IN_PROGRESS') {
            await new Promise((resolve) => setTimeout(resolve, 500));
            window.location.reload(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setError(null);
        });
    },
    [acceptNewMoves]
  );

  const createBoard = useCallback(() => {
    let tileArray = [];
    for (let i = props.height - 1; i >= 0; i--) {
      for (let j = 0; j < props.width; j++) {
        tileArray.push([j, i]);
      }
    }
    setTiles(
      tileArray.map((coords) => (
        <GameTile
          x={coords[0]}
          y={coords[1]}
          key={coords[1] * props.width + coords[0]}
          highlighted={
            position &&
            coords[0] <= position.x && // only highlight cells left of queen
            coords[1] <= position.y && // only highlight cells below queen
            (coords[0] === position.x || // highlight cells in same column as queen
              coords[1] === position.y || // highlight cells in same row as queen
              coords[0] - coords[1] === position.x - position.y) && // highlight cells diagonal from queen
            !(coords[0] === position.x && coords[1] === position.y) // don't highlight queen
          }
          occupied={
            position && coords[0] === position.x && coords[1] === position.y
          }
          callbackFunc={submitMove}
        />
      ))
    );
  }, [props.width, props.height, position, submitMove]);

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    createBoard();
  }, [position, createBoard]);

  return (
    <div
      id="gameboard"
      style={{
        gridTemplate:
          'repeat(' +
          props.height +
          ', 1fr) / repeat(' +
          props.width +
          ', 1fr)',
      }}
    >
      {tiles}
    </div>
  );
}
