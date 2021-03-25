import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// the importing location is automatically `dist` folder
import { ButtonSC } from '../.';

const App = () => {
  return (
    <div>
      <ButtonSC text="test" onClick={() => alert('I am a button styled-component!')} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));