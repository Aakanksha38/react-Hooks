import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show,setShow]= useState(false);
  
  return(
    <>
      <button className='btn' onClick={()=>{setShow(!show)}}>Show</button>
      
      {show && <Item/>}
    </>
  ) ;
};
//{show && <Item/>}   ---------- based on conditional we are showing hiding whole component
const Item = () => {
  const[size,setSize]=useState(window.innerWidth);
  const [isText , setIsText]= useState(false);
  const checkSize = ()=>{
    setSize(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize',checkSize);
    return ()=>{
      window.removeEventListener('resize',checkSize);
    }
  },[]);
  return (
    <>
      <h1>Window</h1>
      <h1>{size}</h1>
      <button className='btn' onClick={()=>{setIsText(!isText)}}>Toogle the text</button>
      {isText && <DependentComp/>}
    </>
  )
};

const DependentComp = ()=>{
  const [text, setText] = useState('Chinnu');
  const [isText, setIsText]= useState(false);
  const tssstt = ()=>{
    //setIsText(!isText)
    if(isText){
      setText("Aakanksha")
      setIsText(false);
    }
    else{
      setText("Chinnu")
      setIsText(true)
    }
  }
  return(
    <>
      
      <h1>Text:{text}</h1>
      <button className='btn' onClick={tssstt}>click me</button>
    </>
  );
}
export default ShowHide;
