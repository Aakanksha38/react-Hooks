import React from 'react';

//import ErrorExample from './tutorial/1-useState/setup/1-error-example';
//import UseStateBasics from './tutorial/1-useState/setup/2-useState-basics';
//import UseStateArray from './tutorial/1-useState/final/3-useState-array';
//import UseStateArray from './tutorial/1-useState/setup/3-useState-array';
//import UseStateObject from './tutorial/1-useState/setup/4-useState-object';
import UseStateCounter from './tutorial/1-useState/setup/5-useState-counter';

//import UseEffectBasics from './tutorial/2-useEffect/setup/1-useEffect-basics';
//import UseEffectCleanup from './tutorial/2-useEffect/setup/2-useEffect-cleanup';
function App() {
  return (
    <div className='container'>
      <h2>
        <UseStateCounter/>
      </h2>
    </div>
  )
}

export default App
// export statment =  we want to use app component in some other folder , that's why we are exporting it .
