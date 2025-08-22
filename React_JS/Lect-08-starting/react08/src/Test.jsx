// import React, { useState } from 'react';
// import MyInput from './components/MyInput';

// const App = () => {

//   // let count = 0;
//       // const [count, setCount]=useState(0);
//             // [//varriable   function]

//   // function handleclick() {
//     // count = count + 1;
//   //   console.log(count);
//   //   setCount(count+5);
//   // }
//   return (
//     <div>

//       {/* <h1>{count}</h1> */}
//       {/* <button onClick={handleclick}>increase me</button> */}
//       {/* <button onClick={(event)=>{setCount(count+2)}}>increase me</button> */}
//       <MyInput/>
//     </div>
//   );

// }

// export default App;


import React, { useEffect, useState } from 'react';



const App = () => {
  const [x, setX] = useState(0);
  const [count, setCount] = useState(0);


  //  useEffect(()=>{},[])
  // useEffect(() => {
  //   console.log("hi");
  //   console.log("bye");
  // })

  // useEffect(() => {
  //   console.log("hi");
  //   console.log("bye");
  // },[])


  useEffect(() => {
    console.log("hi");
    console.log("bye");
  },[x])

  return (
    <div>
      <h1>X:{x}</h1>
      <h1>count:{count}</h1>
      <button onClick={
        () => {
          setX(x + 1);
        }}>increase X</button>

        <button onClick={
        () => {
          setCount(count + 2)
        }}>increase count</button>
    </div>
  );
}

export default App;
