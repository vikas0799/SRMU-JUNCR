

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
// export default
 function MyApp(props) {
  console.log(props);
  
  return (
    <div>
      <h1>Welcome to my app={props.fname}</h1>
      <MyButton />
      <MyButton/>
    </div>
  );
}

export default MyApp;