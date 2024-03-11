import React, { useState } from 'react';

const UseStateObject = () => {
  //creating an obj n assign it to variable
  const [person, setPerson] = useState({
    id:1,
    name: "Aakanksha",
    job: "developer",
    exp: "2.8 years"
  });
  const handleClick =()=>{
    setPerson({...person , job: "creative monk"})
  }
  return (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <h3>{person.job}</h3>
          <button className='btn' onClick={handleClick}>Change text</button>
        </div>
      
    
  )
};

export default UseStateObject;
