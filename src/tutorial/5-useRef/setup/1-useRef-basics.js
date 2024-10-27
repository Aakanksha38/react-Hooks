import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null); //if we want beginning value to be null
  const divContainer = useRef(null);
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(refContainer.current)
    console.log(divContainer.current);// for div we dont have any value , for input we had value
  }
  useEffect(()=>{
    refContainer.current.focus(); //cursor focus on
  })
  return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" ref={refContainer} />
          <button>Submit</button>
        </div>
        <div ref={divContainer}>hello world</div>
      </form>
    </>
  );
};

export default UseRefBasics;
