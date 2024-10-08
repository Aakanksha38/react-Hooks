import React, { useState } from 'react';
// instead of importing we can use it as React.useState()
const UseStateBasics = () => {

  /*
  ///// without HOOK (UseState) ////
  //here wat we did is , created var sepreatly and tried to chnge the title using handleclick function
  let title = "Title";
  const handleClick= ()=>{
    title = "Changed Title this is";
    console.log(title)
  }
  */

  // now we trying to do using HOOK - UseStateHook
  const [title, setTitle] = useState("random title");

  //variable title got assigned value as random title 
  // using setTtile functionality we are able to change the value of title .
  //[title, setTitle] this names aare not neccesary == can guve apple, banana or anything but for convience we use this.
  /*
  const handleClick = () => {
    setTitle("Changed Title ")
  };
  */

  //When clicked on btn title changed from random title to changed title but we again click on btn tht title dont changes , coz title holds value of changed title , so click krnge tho firse changed title hi dikenga 
  // soltuion for this == use if-else statment
  const handleClick = () => {
    if(title === "random title")
      setTitle("Changed Title ");
    else
      setTitle("random title");
  };
 

  

  return( <>
    <h2>{title}</h2>
    <button className='btn' onClick={handleClick}>Change Title</button>
  </>
  );
};

export default UseStateBasics;
