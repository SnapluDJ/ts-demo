import React from 'react';

import TextField from './TextField'

function App() {
  return (
    <div className="App">
      <TextField text="hello" person={{firstName: 'dongjie', lastName: 'Lu'}} />
    </div>
  );
}

export default App;
