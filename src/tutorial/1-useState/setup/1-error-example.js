import React from 'react';

const ErrorExample = () => {
  let title = "Title";
  // here we are trying the change the title from Title to "Changed Title this is", by using btn 
  // on console we are able to see it but on screen it is not rendering ... DOM is not rendering 
  // fo this we have to use react Hooks 
  //<button className='btn' onClick={handleClick(title)}>Change Title</button> ==>> {handleClick(title)} if u r passing args for func thn use arrow func
  //
  const handleClick= ()=>{
    title = "Changed Title this is";
    console.log(title)
  }
  return(
    <>
      <h2>{title}</h2>
      <button className='btn' onClick={()=>{handleClick(title)}}>Change Title</button>
    </>
  );
};

export default ErrorExample;
