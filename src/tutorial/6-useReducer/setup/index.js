import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function is to change/update the logic of state based on what action.type u r getting ,, how u get acction- thta we have to pass in dispatch the type as diff stage of code

/*
const [people,setPeople]=useState(data);
const[showModal,setShowModal]=useState(false);//for showing the modal comp
both this replaced by deafultState obj of people=[],iModalOpen:false

  <button onClick={()=>{dispatch({type:"REMOVE_NAME", payload:person.id})}}>remove</button> ==> to remove/delete item we used pass a func with arg as id i.e =>payload:person.id

*/
//now this is static data ,but we dynamic = {people array, modalContent should chnage accordingly as we enter data,remove,edit the data}=>this will happen in reducer func n we also need dispatch
const defaultState ={
  people: [],
  isModalOpen: true,
  modalContent: "Enter the name",
};
//now the modal is not getting closed , after few seconds we want the modal to be closed 

const Index = () => {
  const [name,setName]=useState('');
  const[state,dispatch]=useReducer(reducer,defaultState);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    /*
    if(name){
      setPeople([...people,{id:new Date().getTime().toString(),name}]);
      setName("");
    }else{
      setShowModal(true);
    }
    */
    if(name){
      //if u want name you given to be displayed on screen we need "payload"
      //with payload we can change default state value , e.g: initially people was empty, we changed 
      const newItem = {id:new Date().getTime().toString(), name};
      dispatch({type:"ITEM_ADDED", payload:newItem});
      setName("");
    }else{
      dispatch({type:"NO_VALUE"})
    }

  };
  const closeModal = () =>{
    dispatch({type:"CLOSE_MODAL"});
  };
  
  /*
  // showModal can be displayed conditionally ,,on bases of name -if name is added should show name added else its empty without name if user tries to click on add btn thn-add name
  return (
    <>
      {showModal && <Modal/>}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input 
          type="text"
          name="text"
          value={name}
          onChange={(e)=>setName(e.target.value)} 
          />
          <button className="btn">Add</button>
        </div>
      </form>
      {people.map((person)=>{
        return(
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  );
  */
  // showModal can be displayed conditionally ,,on bases of name -if name is added should show name added else its empty without name if user tries to click on add btn thn-add name
  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input 
          type="text"
          name="text"
          value={name}
          onChange={(e)=>setName(e.target.value)} 
          />
          <button className="btn">Add</button>
        </div>
      </form>
      {state.people.map((person)=>{
        return(
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button onClick={()=>{dispatch({type:"REMOVE_NAME", payload:person.id})}}>remove</button>
          </div>
        )
      })}
      
    </>
  );
};

export default Index;
