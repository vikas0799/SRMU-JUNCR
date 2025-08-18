import MyApp from "./components/Card"
import Akash from "./components/Akash"
import AlignItemsList from "./components/AlignItemsList"
// import { Card } from "@mui/material";
import Card from './components/Card'



function App() {
  let a=90;
  let name="akash srivastva";

  return (
    <>
      <h1>{a+1}</h1>
      <Card data ={a} fname={name}/>
      {/* <Akash/> */}
      {/* <AlignItemsList/> */}
    </>
  )
}

export default App
