let equation = {
    num1: "0",
    operator: null,
    num2: "0"
}
let currentDisplayNumber = equation.num1;
let newCalcuation = true;

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
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let answer;
    switch (operator){
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = subtract(num1, num2);
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
    equation.num1 = answer;
    equation.operator = null;
    equation.num2 = "0";
    newCalcuation = true;

    return answer;
}

function sign(num){
    return -1 * num;
}
function percent(num){
    return num / 100;
}

function operation(input){
    // input is not number, isNaN() = is Not a Number
    if (isNaN(input)){ 
        equation.operator = input;
    }

    // input is number
    else{ 
        // first number
        if (!equation.operator){
            if (equation.num1 == "0" || newCalcuation)
                equation.num1 = input;
            else
                equation.num1 = equation.num1 + input;
            newCalcuation = false;
            currentDisplayNumber = equation.num1;
        }
        // second number
        else{
            if (equation.num2 == "0")
                equation.num2 = input;
            else
                equation.num2 = equation.num2 + input;
            currentDisplayNumber = equation.num2;
        }

    } 
}