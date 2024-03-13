import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people , setPeople] = useState(data);
  //func to remove the id 
  /*explanation of filter function : person.id !== id 
  when user is trying to remove id=4 , comes to removeitem func, invokes filter method on
  data array ,
  checks 1st entry id=1 , id which we r getting is 4,, it mismatches n returns this obj(which has id=1) to newPoeple array
  likewise it terverse upto last n checks that it has id=4 , this is makes the condition true and it will not return the obj which has id=4,
  soooo ==== only id=1,2,3 will be displayed .
  
  person.id === id ,,, here the item which we are trying to remove will only be displayed .

  setPeople([]) => this will remove all the items , cox we are passing empty array
  */
  const removeItem =(id)=> {
    let newPeople= people.filter((person)=>{return person.id !==id })
    setPeople(newPeople);
  };

  return (
    <>
    {people.map((person)=>{
      const {id,name}=person;

      
      return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={()=>removeItem(id)}>Remove</button>
          </div>
          
      );
    })}
    <button className='btn' onClick={()=>{setPeople([])}}>Remove All</button>
    </>
  )
  
};

export default UseStateArray;
