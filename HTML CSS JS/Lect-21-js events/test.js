var i = 0;

 let head=document.getElementsByTagName("h1");

function increase() {
    console.log("button clicked", i);
    console.log("RBU is good college");
    i++;
    console.log(i);
    head[0].innerHTML=i;
    
}


function decrease() {
    console.log("button clicked", i);
    console.log("RBU is good college");
    i--;
    console.log(i);
    head[0].innerHTML=i;
}
