import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15);
  

  const addValue = () => {
    console.log('Function working fine.')
    counter += 1;
    if(counter<=20)
      {
        setCounter(counter);
      }
  }

  const remValue = () => {
    console.log('Function working fine.')
    counter -= 1;
    if(counter>=0)
      {
        setCounter(counter);
      }
  }

  return (
    <>
     <h1>Yo Bro!!</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={remValue}>Decrease Value</button>
    </>
  )
}

export default App
