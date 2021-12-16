import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { fab, faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import GameBoard from './components/GameBoard';
import useFetchCredentials from './functions/fetchCredentials';

library.add(fab, faCrown, faFortAwesome);

const AWS = require('aws-sdk');
AWS.config.region = 'us-west-1';

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-west-1:4f4c2491-7c42-4063-aad0-1ea855da82b9',
});

function App() {
  useFetchCredentials();

  return (
    <div className="App container">
      <h1>Wythoff's Queen</h1>
      <GameBoard width={25} height={25} />
      <div className="container">
        <h2>How to Play:</h2>
        <ul>
          <li>You and the AI will alternate taking turns moving the queen.</li>
          <li>
            When moving the queen, each player may move the queen any number of
            cells left, down, or diagonally left and down.
          </li>
          <li>The player that moves the queen to her castle wins.</li>
        </ul>
      </div>
      <div className="container">
        <h2>Is this AI beatable?</h2>
        <p>
          Yes, this AI can be defeated using proper strategy. The challenge is
          not in beating the AI once, but rather developing a strategy that
          consistently beats the AI.{' '}
        </p>
      </div>
    </div>
  );
}

export default App;
