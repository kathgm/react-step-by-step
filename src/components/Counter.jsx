import { useState, useRef } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
      <button onClick={handleClick}>
        Click me! REF
      </button>
    </>
  )
}
