// function solve(()=>{

// })

function fetchData(callback) {
    //     let callback=function(result) {
    //   console.log(result);
    // }
    console.log("bank balance fetching");

    setTimeout(() => {
        // callback(10);
        // console.log(callback);
        callback(function(x){
            console.log("UPI transfer");
            
        });

    }, 3000);

    // console.log("bye");

}
// fetchData(23);
fetchData(function (result) {
    console.log(result);
});
