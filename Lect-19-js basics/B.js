let arr = [3, 6, 4, 4, 6, 1];

let idx;
    let max = arr.reduce((acc, element,index,arr) => {
        if (element >= acc) {
            acc = element;
            idx=index;
        } else {
            
        }
        return acc;
    }, arr[0]); 

    console.log(max);
    console.log(idx);
    
