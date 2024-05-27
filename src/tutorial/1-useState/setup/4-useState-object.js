
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
    // using spread operator of js , we copied whole object and changed one property of it . we can any no.of properties by mentioning it 
    if(person.job ==="developer"){
      setPerson({...person ,name:"Self_flourishing", job: "creative monk", exp:"3 yrs"})
    }else {
      setPerson({...person , name:"Aakanksha",job: "developer", exp:"2.8 yrs"})
    }
    
  }
  return (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <h3>{person.job}</h3>
          <h3>{person.exp}</h3>
          <button className='btn' onClick={handleClick}>Change text</button>
        </div>
      
    
  )
};

export default UseStateObject;
