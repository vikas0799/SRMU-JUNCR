 async function getData(){
       try {
         let responce=await fetch("https://jlaceholder.typicode.com/todos");
        console.log(responce);
        
        let data=await responce.json();
        console.log(data);
         let para = document.getElementsByTagName("p");  //array od para
        para[0].innerHTML = data[1].userId;
        para[1].innerHTML = data[1].id;
        para[2].innerHTML = data[1].title;
        para[3].innerHTML = data[1].completed;
       } catch (error) {
        console.log("somthing wrong");
        
       }
}

getData();