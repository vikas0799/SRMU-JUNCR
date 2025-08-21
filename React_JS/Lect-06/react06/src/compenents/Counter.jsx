import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 3);
  }

  return (
    <>
    <h1>{count}</h1>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <button onClick={handleClick}>
        increase me
    </button>
    </>
  );
}