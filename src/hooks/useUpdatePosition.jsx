import Axios from 'axios';
import dateFormat from 'dateformat';
import { useEffect } from 'react';
import { useState } from 'react';

const AWS = require('aws-sdk');

export default function useUpdatePosition(newPosition) {
  const [position, setPosition] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  var time = Date.now();
  var invokeUrl = 'https://6k6fezitqe.execute-api.us-west-1.amazonaws.com/';

  if (newPosition === null) {
    time = dateFormat(Date.now(), 'yyyymmdd"T"hhMMss"Z"');
    setFetching(true);
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
      })
      .finally(() => {
        setFetching(false);
      });
  } else {
    /*
    time = dateFormat(Date.now(), 'yyyymmdd"T"hhMMss"Z"');
    setFetching(true);
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
      .then((response) => {
        console.log(response);
        setPosition({
          x: response.data.position.x,
          y: response.data.position.y,
        });
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(null);
      })
      .finally(() => {
        setFetching(false);
      });*/
  }

  return { position, fetching, error };
}
