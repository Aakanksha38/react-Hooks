import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  //const [firstName, setFirstName] = useState('');
  //const [email, setEmail] = useState('');
  const [person,setPerson] = useState({
    firstName : '',
    email : '',
    age : ''
  });
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.age){
      const newPerson = {...person,id:new Date().getTime().toString()};
      console.log(person);
      //grabbing the details filled in form
      setPeople([...people,newPerson])
      //here after submitting the form , we are making the form empty
      setPerson({firstName:"",email:"",age:""});
    }
    else{
      console.log("Fill all the values")
    }
  };

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value; 
    setPerson({...person,[name]:value});
  };
  const removePerson =(id)=>{
    const newPeople = people.filter((person)=>person.id !==id) ;
    setPeople(newPeople);
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age: </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {/**/}
        {people.map((person)=>{
          const {id,firstName,email,age}=person;
          return(
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
              <button className='form-button' onClick={()=>removePerson(id)}>Remove</button>
            </div>
          )
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
