import { useState } from 'react';

export default function MyInput() {
  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <h1>You typed: {text}</h1>
      <button onClick={() => setText('hello')}>
        Reset
      </button>
    </>
  );
}