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
    <div className="App">
      <h1>Wythoff's Queen</h1>
      <GameBoard width={25} height={25} />
    </div>
  );
}

export default App;
