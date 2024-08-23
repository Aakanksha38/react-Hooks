import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  /**/
  const getUsers = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(response.json(),"json format");
    setUsers(result);
     console.log(users.length);
     console.log(users)
  };

  useEffect(() => {  
    getUsers();
  }, []);
  // in this - at first render of useWffect it is showing users=>empty array, n above case will render only once  
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user)=>{
          const {id ,login , avatar_url , html_url} =user;
          return(
            <li key = {id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
              
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
