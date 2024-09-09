import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [text,setText]=useState("");
  function changeHandler(e){
    console.log(text);
    setText(e.target.value);
  }

  // // rendering for first time and in all changes
  // useEffect(()=>{
  //   console.log("UI rendered");
  // });

  // //changing only for the first time change variable is empty
  // useEffect(()=>{
  //   console.log("UI rendered");
  // },[]);


  // //changing only for the first time change in dependency 
  // useEffect(()=>{
  //   console.log("UI rendered");
  // },[text]);

// //This variation is used to add or remove somethind on rendering
  // useEffect(()=>{
  //      console.log("UI rendered");
  //      //executed after the return statement
  //      console.log("executed last");
  //      return ()=>{
  //       console.log("executed first")
  //      }
  //    },[text]);

const [windows,setWindows]=useState(window.innerWidth);
function setSize(){
  setWindows(window.innerWidth);
}
// useEffect(()=>{
//   setWindows(window.innerWidth);
// },[windows]);
  return (
    <div className="App">
      {/* <input onChange={changeHandler}></input> */}
      <h1>Window Size</h1>
      <div onResize={setSize}>{windows}</div>
    </div>
  );
}

export default App;
