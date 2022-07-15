import { useState } from 'react';
import './App.css'

function App() {
  const dataAtual = new Date();
  const hora = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();
  const [initialHour, setInicialHour] = useState();

  return (
    <div>
      <p>{initialHour}</p>

      <button onClick={() => setInicialHour(hora + ":" + minutos)}></button>
    </div>
  )
}

export default App
