import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({ count: 0 });
  const increment = () => setState({ count: state.count + 1 });
  const decrement = () => setState({ count: state.count - 1 });
  const reset = () => setState({ count: 0 });

  return (
    <div className='App'>
      <h1>Counter App: {state.count}</h1>
      <button onClick={increment} disabled={state.count===10 ? true : false}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}

export default App;

/* 
1.вместо объекта храним просто число
2. В кнопке button задействуем свойство disabled 
3. функцию сделать одной строкой */