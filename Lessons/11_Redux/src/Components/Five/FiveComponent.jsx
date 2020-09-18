import React from 'react';

export const FiveComponent = ({ counter, multiply, devide }) => {
  return (
    <div>
      {counter}
      <button onClick={multiply}>Multiply</button>
      <button onClick={() => multiply(5)}>Multiply on five</button>
      <button onClick={devide}>Делить</button>
    </div>
  );
};
