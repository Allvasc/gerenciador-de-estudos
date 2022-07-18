import React, { useEffect, useState } from 'react'

const Timer = () => {
  const dataAtual = new Date();
  const hora = (dataAtual.getHours() < 10 ? '0' : '') + dataAtual.getHours()
  const minutos = (dataAtual.getMinutes() < 10 ? '0' : '') + dataAtual.getMinutes();
  const [initialHour, setInicialHour] = useState('00:00');
  const [finalHour, setFinalHour] = useState('00:00');
  const [count, setCount] = useState(0)
  const [conta, setConta] = useState(0)

  useEffect(() => {
      setTimeout(() => setCount(count + 1), 1000);
      if (initialHour != '00:00') {
        setConta(count)
      }
      if (finalHour != '00:00') {
        setConta(conta)
      }

  }, [count]);



  return (
    <div className='timeLine'>
      <div>
        <p>{initialHour}</p>
        <button onClick={() => setInicialHour(hora + ":" + minutos)}>start</button>
      </div>

      <div>
        <p>{finalHour}</p>
        <button onClick={() => setFinalHour(hora + ":" + minutos)}>stop</button>
      </div>
      <div>
        <p>Tempo corrido = {conta}</p>
      </div>
    </div>
  )
}

export default Timer