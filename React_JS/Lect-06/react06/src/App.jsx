import { useState } from 'react'
import './App.css'
import Counter from './compenents/Counter';

export default function App() {
// let count=2;   //normal varriable
// let [count,setCount]=useState(0);  //count is  a state varriable 
// let [age,setAge]=useState(18);  //count is  a state varriable 


// function handleclick(){
//   // console.log("hii akash");
//   // count++;
//   // console.log(count);
//   // xyz(10);  //render updated value
//   // console.log(count);
//   xyz(count+1);
//   console.log(count); 
// }
  return (
    <>
      {/* <button onClick={handleclick}>hi everyone count={count}</button>
      <button onClick={(event)=>{setCount(count+1)}}>hi everyone count={count}</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste.</p>
    <h1>{count}</h1> */}
    <Counter/>
    </>
  )
}

// export default App
