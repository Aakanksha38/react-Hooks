export const reducer = (state,action)=>{
    console.log(state,action);
    if(action.type === "ITEM_ADDED"){
      const newPeople = [...state.people,action.payload];
      return {
        ...state,
        people:newPeople,
        isModalOpen:true,
        modalContent:"Item addded"}
    }
    if(action.type==="NO_VALUE"){
      return{
        ...state,
        isModalOpen:true,
        modalContent:"No value entered"
      }
    }
    if(action.type==="CLOSE_MODAL"){
      return{
        ...state,
        isModalOpen:false
      }
    }
    if(action.type==="REMOVE_NAME"){
      const newPeople = state.people.filter((person) => person.id !== action.payload);
      return{
        ...state,
        people:newPeople,
        isModalOpen:true,
        modalContent: "Item Removed"
      }
    }
    //throw new Error("no matching action type");
    //return state;
  };