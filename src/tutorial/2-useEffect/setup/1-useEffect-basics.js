import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setValue]= useState(0);
  let valuess = 2

  //- by default runs after every re-render (after every page load )
  //- on change of value state , everytime there is a change of value/state useEffect will render 
  //-  here in below example , every itme we click on btn, state value is getting updated, that many no.of times useEffect will peint console.
  useEffect(()=>{
    console.log("calling useEffect");
    // if (value > 0) {
     //  window.top.document.title = `New Messages(${value})`;
    // }
  },[valuess]);

  /*
  this useeffect will run in 3 cases == 1. when we go the page for 1at time ,,, 2. when we re-load the page,,, 3. when [valuess] gets change (passing the dependency)
  useEffect(()=>{
    console.log("calling useEffect");
    },[valuess]);
  */

    /*
  this useeffect will run in 2 cases becoz we passing empty  [] ===== 1. when we go the page for 1at time ,,, 2. when we re-load the page,,,  
  useEffect(()=>{
    console.log("calling useEffect");
    },[]);
  */

  //onKeyDown => on click on down key event is triggered
  return(
    <>
      <h3>{value}</h3>
      
      <button className='btn' onClick={()=>{setValue(value+1)}} onKeyDown={()=>{setValue(value+2)}}>Increase</button>
    </>
  );
};

export default UseEffectBasics;
