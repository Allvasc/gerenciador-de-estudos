import React, { useState } from 'react'

const Timer = () => {
  const dataAtual = new Date();
  const hora = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();
  const [initialHour, setInicialHour] = useState('00:00');
  const [finalHour, setFinalHour] = useState('00:00');

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
    </div>
  )
}

export default Timer