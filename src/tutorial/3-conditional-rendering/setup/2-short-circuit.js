import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  //const [text, setText] =useState("defailt text");
  const [isError , setIsError] = useState(false);

  return (
    <>
    <button className='btn' onClick={()=> setIsError(!isError)}>toggle error</button>
    {isError && (<h2>Error</h2>)}
    {isError ?<h2>Error is there..</h2>: <h2>No error...</h2>}
    </>
  );
};

export default ShortCircuit;
