

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
// export default
 function Card(props) {
  console.log(props);  //object props
  
  return (
    <div>
      <h1>Welcome to my app={props.fname}</h1>
      <MyButton />
      <MyButton/>
    </div>
  );
}

export default Card;