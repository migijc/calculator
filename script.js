const sum= function (num1, num2){
    return num1 + num2
};
const subtract= function (num1, num2){
    return num1 - num2
};

const multiply= function (num1, num2){
    return num1 * num2
};

const divide= function (num1, num2){
    return num1 / num2
};

const operate = function (operator, number1, number2) {
    if(operator== "+"){
        return sum(number1, number2)
    } else if(operator=="-"){
        return subtract(number1, number2)
    } else if(operator== "*"){
        return multiply(number1,number2)
    } else if(operator=="/"){
        return divide(number1,number2)
    };
};

const display= document.querySelector(".display");
display.textContent="test"
let operationArray= [];
const allButtons=document.querySelectorAll("button")
allButtons.forEach((button)=> {
    button.addEventListener("click", () => {
        operationArray.push(button.textContent)
        display.textContent= operationArray.join("")
        const num1= operationArray.join("")
        switch(true){
            case (button.textContent == '+'):
               const currentOperation= `${num1} +`
               display.textContent= (`${parseInt(currentOperation)} +`)
        };
        
        
        
    });
   
});
