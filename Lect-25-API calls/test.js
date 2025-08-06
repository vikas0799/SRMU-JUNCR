// // let head=document.getElementsByTagName("h1");
// // head[0].innerHTML="akash arivarstava";


// let x=fetch("https://jsonplaceholder.typicode.com/todos/1");

// console.log(x);  //x stored promises 

// let y=x.then((responce)=>{    //resolving x promises
//      console.log(responce);

//     return responce.json();   //return new promisese which store in y
// })

// console.log(y);  //http object we have to convert  , js object conver

// y.then((ans)=>{      //js object stored in ans
//     console.log(ans);
//     let head=document.getElementsByTagName("h1");
// head[0].innerHTML=ans.title;

// })





fetch("https://jsonplaceholder.typicode.com/todos")
    .then((reponce) => {
        console.log(reponce);

        return reponce.json();
    })
    .then((data) => {
        //
        //
        console.log(data); //array of objects [{},{},{}]
        let para = document.getElementsByTagName("p");  //array od para
        para[0].innerHTML = data[1].userId;
        para[1].innerHTML = data[1].id;
        para[2].innerHTML = data[1].title;
        para[3].innerHTML = data[1].completed;

    })
    .catch((error) => {
        console.log("something wrong ");

    });