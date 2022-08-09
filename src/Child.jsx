import React from 'react';
import { useState } from 'react';
import Parent from './Parent';

function Child({ callBack }) {
  const [a, setA] = useState(1);
  return (
    <div>
      <button onClick={() => callBack('value from child')}>
        Button In Child
      </button>
    </div>
  );
}
export default Child;
