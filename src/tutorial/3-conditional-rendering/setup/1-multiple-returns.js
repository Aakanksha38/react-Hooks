import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

/*
const MultipleReturns = () => {
  const [user, setUser] = useState('default user');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  
  
  //multiple returns

  //1. isLoading true thn this if will return else default user will dsiplay
  if(isLoading){
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  //2. iserror true thn this if will return else default user will dsiplay
  if(isError){
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
};
*/


const MultipleReturns = () => {
  const [user, setUser] = useState('default user');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  /*
  const fetchResult =()=>{
    // .then => to fetch the result , .catch=> to catch the errors
    //const fetchResult = async()=>{ ===== no need of mentioning async since we are not using await , so removing async
    fetch(url).then((resp)=>{
      if(resp.status>=200 && resp.status<=299){  //checking if it is valid url or not 
        return resp.json();
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    }).then((user)=>{
      const {login} = user;
      setUser(login);
      setIsLoading(false);

    }).catch((error)=>{
      console.log(error);
    })
  };
 */
  useEffect(()=>{
    //fetchResult();
    fetch(url) // fetches the response from url 
    .then((resp)=>{ // response gets store in resp
      if(resp.status>=200 && resp.status<=299){  //checking if it is valid url or not 
        return resp.json(); // returns json format repsonse , returns a promise and we need to handle with .then()
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    }).then((result)=>{ //whatever we got return from line 73 gets stored in result 
      const {login} = result;
      setUser(login);
      setIsLoading(false);

    }).catch((error)=>{
      console.log(error);
    })
  },[])

  if(isLoading){
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  //2. iserror true thn this if will return else default user will dsiplay
  if(isError){
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}
export default MultipleReturns;
//output in this case : "loading.." will display thn useeffect's func will invoke
// this sample code works -- so when we want to show some results/ fetch data it takes few secs or time , at that time on website it shows spinner or some loading symbol 
// so this code is same ,, until our useeffect fetches the data "Loading..." is shown thn when data is fetched our results are shown .