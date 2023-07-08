import React, { useState } from 'react';

function Addition() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handleAddition}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Addition;
