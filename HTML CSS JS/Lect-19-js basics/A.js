 let arr = [3, 6, 4, 4, 6, 1];
        function sum(acc, curr) {
            acc = acc + curr;
            return acc;
        }
        // let output=arr.reduce(sum,0);
        let output = arr.reduce((acc, element, index, arr) => {
            // console.log(acc, element);
            acc = acc + element;
            return acc;
        }, 100)
        console.log(output);