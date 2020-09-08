import React, { useState, useEffect } from 'react';

export const Test = (props) => {
  const [value, setvalue] = useState(2);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(props.value);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [props.value]);

  return <button onClick={() => setvalue(value + 1)}>+</button>;
};
