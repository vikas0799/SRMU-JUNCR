// function vikas(){
//     //data fetching
//     //bank balance
//     //upi transfer
//     //bank balance checked
//     // fetch("url");  //it takes time
//     console.log("hello SBI !");

// }

async function vikas() {
     //    await //data fetching
    //    await //bank balance
    //upi transfer
    //bank balance checked
    //    await // fetch("url");  //it takes time
    // console.log("hello SBI !");
//    let x=await 34;
    let x = await new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(230);
            reject("network prombel");
        }, 3000);
    });
    return  x;

}

let p = vikas();
p.then(data => console.log(data))
.catch((err) => {console.log(err);
 })
.finally(()=>{console.log("session completed");
});