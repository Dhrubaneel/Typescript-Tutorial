/***
 * @summary This function will return the summation of two numbers. It accepts two number as input and returns a number as output 
 * @param {number} firstNum - first number to add
 * @param {number} secondNum - second number to add
 */
function addition(firstNum:number,secondNum:number):number{
    return firstNum + secondNum;
}

var result:number = addition(5,2);

console.log(`Sum of the two number is: ${result}`);