import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
{/*
  const UseEffectBasics = () => {
  const [value,setValue]= useState(0);
  useEffect(()=>{
    console.log("useEffect callback function");
  })
  return(
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={()=>{setValue(value+1)}}>click me</button>
    </>
  );
};
/*
  - by default runs after every re-render (after every page load )
  - 1st time => we r going to the page for the 1st time , usefeffect render
    2nd time => on change of value state ,here in above example,  every itme we click on btn, state value is getting updated,,so everytime there is a change of value/state useEffect will render


*/}



const UseEffectBasics = () => {
  const [value,setValue]= useState(0);
  const [text, setText] = useState(10);
  useEffect(()=>{
    console.log("useEffect callback function");
    if(value>0){
      document.title = `New Message(${value} , ${text})` ;  // this will display 0 also , but we dont want 0 msg to display, condition if value >0 thn display new msg

    }
   
  },[value]);
  return(
    <>
      <h1>Value: {value}</h1>
      <button className="btn" onClick={()=>{setValue(value+1)}} onKeyDown={()=>{setValue(value+5)}}>click me</button>
      <h1>Text: {text}</h1>
      <button className='btn' onClick={()=>{setText(text+10)}}>click me</button>
    </>
  );
}
//this useeffect will run in 3 cases == 1. when we go the page for 1st time ,,, 2. when we re-load the page,,, 3. when [value] gets change (passing the dependency)
  /*
  this useeffect will run in 2 cases becoz we passing empty  [] ===== 1. when we go the page for 1at time ,,, 2. when we re-load the page,,,  
  useEffect(()=>{
    console.log("calling useEffect");
    },[]);
  */

export default UseEffectBasics;