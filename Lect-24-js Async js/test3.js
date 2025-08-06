// const promise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success)
//          resolve("Success!");
//     else 
//         reject("Error!");
// });
// promise.then((data) => {console.log(data)})
//     .catch(err => console.error(err));

//     console.log(promise);
//     console.log(typeof(promise));



//   let a=90;
// promisre->repersent object
let a = new Promise((resolve, reject) => {
    //data fetching
    //netwrok call
    //file read
    setTimeout(() => {
        let ans = 75;
        resolve(ans);
    }, 3000);
    //    reject("network problem");

})
a.then((roll) => {
    console.log(roll);
    let head = document.getElementsByTagName("h1");
    head[0].innerHTML = roll;
})
    .catch((error) => {
        console.log(error);

    })
    .finally(() => {
        console.log("sessrion completed");

    });

// console.log(typeof(a));

// a.then((name) => {
//     console.log(name);
//     let head = document.getElementsByTagName("h1");
//     head[0].innerHTML = name;

// }).catch((error) => {
//     console.log(error);

// })






// Promise(..).then(..).catch(..);


// let x=Promise(..);

// x.then(..).catch(..);

// new Promise(***).then(***).catch(**);






// new Promise((res, rej) => {
//     //......
//     ///....data fetch
//     //''' data compute
//     let ans=23;
//     res(ans);
// })
//     .then((data) => {
//         console.log(data);

//     })
//     .catch((error) => {
//         console.log(error);

//     });




