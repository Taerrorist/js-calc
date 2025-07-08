const numOne = Number (prompt('please input the first number'))
const op = prompt("please input an operation.")
const numTwo = Number (prompt(' please input the second number.'))
function calculate (op, numOne, numTwo){

    if(op === "+"){
    alert(numOne + numTwo)
    }

   else if (op === "-") {
    alert(numOne - numTwo) 
   }

    else if (op === "*") {
    alert (numOne * numTwo) 
    }

    else if (op === "/"){
    alert(numOne / numTwo) 

    } else if(op === NaN) {
        alert('NaN: please input a  valid number')
    }
}

calculate(op, numOne, numTwo);
//MESSAGE TO INSTRUCTORS: I am struggling quite a lot in javascript hell. please help me understand it better.