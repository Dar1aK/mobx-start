import { CounterClass } from '../src/components/CounterClass'
import CounterFC from '../src/components/CounterFC'

import './App.css';

function App() {
  return (
    <div className="App">
      <CounterClass initialCount={1} />
      <CounterFC initialCount={7} />
    </div>
  );
}

export default App;
