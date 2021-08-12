import React from 'react';
import {TextField} from './TextField'

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text='hello' person={{firstName:'', lastName: '' } }/>
    </div>
  );
}

export default App;
