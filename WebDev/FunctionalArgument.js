
// Functional arguments 

// using function as a argument in a function

function sum(a,b){return a+b}
function subtract(a,b){return a - b}

function doOperation( a, b , op){
    return op(a,b)
}

const ans = doOperation(3,5,sum);
console.log(ans)