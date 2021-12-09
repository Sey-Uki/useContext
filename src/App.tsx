import { useState } from 'react';
import './App.css';
import { PageOne } from './component/PageOne';
import { PageTwo } from './component/PageTwo';
import { Context } from './Context';

function App() {
  const [context, setContext] = useState([]);
  return (
    <div className="App">
      <Context.Provider value={{ context, setContext }}>
        <PageOne />
        <PageTwo />
      </Context.Provider>
    </div>
  );
}

export default App;
