"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numArray = [];
const textArray = [];
// interface ResultObj {
//   val: number,
//   timestamp: Date
// }
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else if (typeof num1 === 'string' && typeof num2 === 'string')
        return num1 + ' ' + num2;
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numArray.push(result);
    const stringResult = add(num1, num2);
    textArray.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numArray, textArray);
    //  console.log(result);
    //  console.log(stringResult);
});
// console.log(add(1, 6));
// console.log(add('1', '6'));
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
