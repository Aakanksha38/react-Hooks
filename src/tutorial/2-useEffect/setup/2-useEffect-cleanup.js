import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  /* 
  here on screen , when we minimize or enlarge the size of window n re-load at that time only === we are able to see diff size printed 
  const[size,setSize] = useState(window.innerWidth);
  return (
    <>
      <h4>Window</h4>
      <h3>{size}</h3>
    </>
  );
  */

  // but we want as soon as we minimize or enlarge the size of window == at time size should be printed == soltuion: useEffect
  const[size,setSize] = useState(window.innerWidth);
  const checkSize =()=> {
    setSize(window.innerWidth);
  };
  useEffect(()=>{
    console.log("useEffect",size);
    // whenever we want to perform certain action after certain re-render we use UseEffect
    //comes to useEffect - so whenever there is resize of window =>"resize".. addEvenlisterner will invoke checkSize function
    /*
    window.addEventListener("resize",checkSize); ==>>
    there is problem , this resize event listener will call again n again and it keeps on adding on ur local db and add into ur cache which makes ur appln bulky and slow
    solution = need to use cleanup function , like after every use we have to remove/cleanup-- remove ebent listner 
    */
    window.addEventListener("resize",checkSize);

    //cleaup function== using callback func in return
    return ()=>{
      console.log("remove");
      window.removeEventListener("resize",checkSize);
    } 
  })
  return (
    <>
      <h4>Window</h4>
      <h3>{size}</h3>
      <h2>useEffect dated on 17th may 2024</h2>
    </>
  );
};
//trying to push 
export default UseEffectCleanup;
