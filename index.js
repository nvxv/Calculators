// The "document" object is the DOM (Document Object Model)
// The "DOM" is another way of calling the "HTML tree structure"
/* let calculatorForm = document.getElementById('calculator-form')
let inputX = document.getElementById('number-x')
let inputY = document.getElementById('number-y')
let resultElement = document.getElementById('result')

function onCalculate (event) {
    event.preventDefault()

    let sum = Number(inputX.value) + Number(inputY.value)
    resultElement.innerHTML = "<h4>" + sum + "</h4>"
}

calculatorForm.onsubmit = onCalculate

*/



function multiplyBy()
{
        inputX = document.getElementById('number-x').value;
        inputY = document.getElementById('number-y').value;
        document.getElementById("result").innerHTML = inputY * inputX;
}

function divideBy() 
{ 
        inputX = document.getElementById('number-x').value;
        inputY = document.getElementById('number-y').value;
document.getElementById("result").innerHTML = inputY / inputX;
}