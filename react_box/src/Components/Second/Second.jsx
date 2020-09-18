import React from 'react';

export const SecondComponent = ({ counter, increment }) => (
  <div>
    <button onClick={increment}>Inc</button>
    {counter}
  </div>
);
