import React, { useEffect, useState } from 'react';
import Card from './components/Card';

const App = () => {
    const [cloths,setCloths]=useState([]);
    useEffect(()=>{
     fetch("https://fakestoreapi.com/products")
     .then((responce)=>{
        return responce.json();
     })
     .then((data)=>{
        console.log(data);
        // cloths=data;
        setCloths(data);
        
     })
    },[])
    return (
        <div>
            <h1>welcome to junr</h1>
            <Card cloths={cloths}/>
        </div>
    );
}

export default App;
