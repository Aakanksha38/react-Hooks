import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
//here we have only 2 inputs , what if we have more inputs ? we keep on dealing each input like this ?No , will write a method where we can add as many inputs as we want 
const ControlledInputs = () => {
  const [firstName,setFirstName]=useState("");
  const [email,setEmail]=useState("");
  const [people, setPeople] = useState([]); //initially empty ,grabbing the details filled in form 

  const handleSubmit =(e)=>{
    e.preventDefault(); //to prevent from page re-load after clicking on btn
    if(firstName && email){
      const person = {id:new Date().getTime().toString(),firstName,email};
      console.log(person);
      setPeople((people)=>{
        return [...people,person]
      });
      //here after submitting the form , we are making the form empty
      setFirstName("");
      setEmail("");
     }
    else{
      console.log("Fill all the values")
    }
  };
  
  {/*here what ahppens is in <input> if we give only value thn when we type on screen nothing changes n nothing we can see so we give onchange
    so soon as we click on button , onSubmit will invoke -1stly it will prevent re-loading n thn it will display 1stName n email on console*/}
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={firstName} 
              onChange={(e)=>setFirstName(e.target.value)}/>
          </div>
          <div className="form-control">
            <label htmlFor="firstName">Email:</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <button type="submit" >Add person</button>
        </form>
        {/*4if any data in people array thn maping and showing on the screen */}
        {people && people.map((person)=>{
          const {id,firstName,email}=person;
          return(
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
