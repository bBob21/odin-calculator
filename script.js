let equation = {
    num1: 0,
    operator: null,
    num2: null
}

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if (num2 == 0){
        return "Error";
    }
    return num1 / num2;
}

function operate(num1, operator, num2){
    let answer;
    switch (operator){
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = ubtract(num1, num2);
            break;
        case "*":
            answer = multiply(num1, num2);
            break;
        case "/":
            answer = divide(num1, num2);
            break;
        default:
            answer = null;
            alert("ERROR: invalid operator");
    }
    return answer;
}

function sign(num){
    return -1 * num;
}
function percent(num){
    return num / 100;
}

function operation(input){
}