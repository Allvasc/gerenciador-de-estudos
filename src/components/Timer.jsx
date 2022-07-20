import React, { useEffect, useState } from 'react'

const Timer = () => {
  const dataAtual = new Date();
  const hora = (dataAtual.getHours() < 10 ? '0' : '') + dataAtual.getHours()
  const minutos = (dataAtual.getMinutes() < 10 ? '0' : '') + dataAtual.getMinutes();
  const [initialHour, setInicialHour] = useState('00:00');
  const [finalHour, setFinalHour] = useState('00:00');
  const [count, setCount] = useState(0)
  const [conta, setConta] = useState(0)

  const startCount = () => {
    setInicialHour(hora + ":" + minutos)

  }

  const stopCount = () => {
    setFinalHour(hora + ":" + minutos)

  }

  useEffect(() => {
    if (initialHour != '00:00') {
      setInterval(() => setCount(count+1), 1000);
      setConta(count)
    }

    if (finalHour != '00:00') {
      setInterval(() => setCount(count+1), 1000);
      clearInterval(count)
    }
  }, [count]);

  console.log(count)




return (
  <div className='timeLine'>
    <div>
      <p>{initialHour}</p>
      <button onClick={() => startCount()}>start</button>
    </div>

    <div>
      <p>{finalHour}</p>
      <button onClick={() => stopCount()}>stop</button>
    </div>
    <div>
      <p>Tempo corrido = {conta}</p>
    </div>
  </div>
)
}

export default Timer