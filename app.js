var getOperatorA = () => parseInt(document.getElementById("my-input1").value);
var getOperatorB = () => parseInt(document.getElementById("my-input2").value);
var isError = () => (isNaN(getOperatorA()) || isNaN(getOperatorB()));

var getSum = () => getOperatorA() + getOperatorB();
var showSum = () => {
    if (isError() == true) {
        document.getElementById("my-result").innerText = "Ha habido un error";
    } else {
        document.getElementById("my-result").innerText = getSum();
    }
}
document.getElementById("sumButton").addEventListener("click", showSum);

var getSubtract = () => getOperatorA() - getOperatorB();
var showSubtract = () => {
    if (isError() == true) {
        document.getElementById("my-result").innerText = "Ha habido un error";
    } else {
        document.getElementById("my-result").innerText = getSubtract();
    }
}
document.getElementById("subtractButton").addEventListener("click", showSubtract);

var getMultiplication = () => getOperatorA() * getOperatorB();
var showMultiplication = () => {
    if (isError() == true) {
        document.getElementById("my-result").innerText = "Ha habido un error";
    } else {
        document.getElementById("my-result").innerText = getMultiplication();
    }
}
document.getElementById("multiplyButton").addEventListener("click", showMultiplication);

var getDivision = () => getOperatorA() / getOperatorB();
var showDivision = () => {
    if (isError() == true) {
        document.getElementById("my-result").innerText = "Ha habido un error";
    } else {
        document.getElementById("my-result").innerText = getDivision()
    }
    
}
document.getElementById("divideButton").addEventListener("click", showDivision);