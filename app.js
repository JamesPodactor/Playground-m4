var getOperatorA = () => parseInt(document.getElementById("my-input1").value);
var getOperatorB = () => parseInt(document.getElementById("my-input2").value);

var getSum = () => getOperatorA() + getOperatorB();
var showSum = () => document.getElementById("my.result").innerText = getSum();
document.getElementById("sumButton").addEventListener("click", showSum);

var getSubtract = () => getOperatorA() - getOperatorB();
var showSubtract = () => document.getElementById("my.result").innerText = getSubtract();
document.getElementById("subtractButton").addEventListener("click", showSubtract);

var getMultiplication = () => getOperatorA() * getOperatorB();
var showMultiplication = () => document.getElementById("my.result").innerText = getMultiplication();
document.getElementById("multiplyButton").addEventListener("click", showMultiplication);

var getDivision = () => getOperatorA() / getOperatorB();
var showDivision = () => document.getElementById("my.result").innerText = getDivision();
document.getElementById("divideButton").addEventListener("click", showDivision);

function showMeAnError () {
    if (isNaN(getOperatorA()) || isNaN(getOperatorB())) {
        document.getElementById("my.result").innerText = "Error, debes insertar números";
    } else {
    }
}
document.getElementById("sumButton").addEventListener("click", showMeAnError);
document.getElementById("subtractButton").addEventListener("click", showMeAnError);
document.getElementById("multiplyButton").addEventListener("click", showMeAnError);
document.getElementById("divideButton").addEventListener("click", showMeAnError);