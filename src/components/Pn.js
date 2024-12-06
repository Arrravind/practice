import React, { useState } from 'react'

function Pn() {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');
  const checkNum = () => {
    if (num < 0) {
      setResult('Negative');
    } else if (num > 0) {
      setResult('Positive');
    } else {
      setResult('Zero');
    }
  }

  return (
    <div>
      <h1>Positive or Negative</h1>
      <input type="number" name="num" value={num} onChange={(event) => setNum(event.target.value)}/>
      <button onClick={checkNum}>Check</button>
      {result && (<p>{result}</p>)}
    </div>
  )
}

export default Pn
