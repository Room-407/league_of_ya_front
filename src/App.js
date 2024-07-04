import './App.css';
import React, {useState} from 'react';

const App = () => {
const [isShow, setIsShow] = useState(true);



  return (
    <div className="App">
        <div className='inputBox'>
          <input type="text" />
          </div>
          <div className='wrapper'>
            <div className='item' id='sex'></div>
            <div className='item' id='from'></div>
            <div className='item' id='mainPosition'></div>
            <div className='item' id='subPosition'></div>
            <div className='item' id='role'></div> 
        </div>
      </div>
  );
}

export default App;
