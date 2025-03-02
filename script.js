let equation = {
    num1: "0",
    operator: null,
    num2: "0"
}
let currentDisplayNumber = equation.num1;
let newCalcuation = true;
const OPERATIONS = ["+", "-", "*", "/"];
const SPECIAL = ["clear", "sign", "percent"]

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

function operation(input){
    if (input == "="){
        operate(equation.num1, equation.operator, equation.num2);
    }
    else if (OPERATIONS.includes(input)){ 
        equation.operator = input;
    }
    else if(SPECIAL.includes(input)){
        if (input == "clear"){
            if (!equation.operator)
                equation.num1 = "0";
            else 
                equation.num2 = "0";
        }
        else if (input == "sign"){
            if (!equation.operator)
                equation.num1 *= -1;
            else
                equation.num2 *= -1;
        }
        else{ // input == "percent"
            if (!equation.operator)
                equation.num1 /= 100;
            else
                equation.num2 /= 100;
        }

    }

    else{ 
        if (!equation.operator){
            if (equation.num1 == "0" || newCalcuation)
                equation.num1 = input;
            else
                equation.num1 = equation.num1 + input;
            newCalcuation = false;
        }
        else{
            if (equation.num2 == "0")
                equation.num2 = input;
            else
                equation.num2 = equation.num2 + input;
        }
    } 
    updateDisplay();
}

function updateDisplay(){
    currentDisplayNumber = !equation.operator ? equation.num1 : equation.num2;
}

let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".number, .operator, .special");
buttons.forEach(button => button.addEventListener("click", () => {
    operation(button.value);
    display.textContent = currentDisplayNumber;
}));