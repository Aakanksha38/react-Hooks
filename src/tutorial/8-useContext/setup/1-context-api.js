import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
const PersonContext = React.createContext(); //inside createContext() we can pass any defailt value too
//provides 2 comps Provider and Consumer
//    <PersonContext.Provider value="Hello">
//value={{ }} // 2 braces coz we need to pass as object 
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{people,removePerson}}>
      <h3>Context </h3>
      <List  />
    </PersonContext.Provider>
  );
};

const List = () => {
  const data = useContext(PersonContext);
  console.log(data)
  return (
    <>
      {data.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name}) => {
  /*
    when u know what is present in value n u want to grab any specific thn in curly braces
    const {removePerson }= useContext(PersonContext)
    or if u want whole value thn
    const data = useContext(PersonContext) ,, u can use it as data.removePerson
  */
  
  const {removePerson} = useContext(PersonContext);
  return (
    <div className='item'>
      
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
