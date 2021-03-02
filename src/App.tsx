import React from 'react';

import TextField from './TextField'

function App() {
  return (
    <div className="App">
      <TextField text="hello" person={{firstName: 'dongjie', lastName: 'Lu'}}
        handleChange={e => e.preventDefault()}
      />
    </div>
  );
}

export default App;
