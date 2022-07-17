import { useEffect, useState } from 'react';
import './App.css'
import Timer from './components/Timer';

function App() {

  const [timers, setTimers] = useState ([])

  function addItem() {
    setTimers(timers.concat(<Timer key={timers.length} />));
  }

  console.log(timers)

  return (
    <div>
      <div id='div1'>
      <div>{timers}</div>
        <button onClick={addItem}>Click me</button>
      </div>
    </div>
  )

}
export default App
