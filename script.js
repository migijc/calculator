
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
    if(operator=="/" && number1== 7 && number2==0){
        document.location.reload()
        alert('Dividing a number by 0 will cause the site to crash!')
    }
    if(operator== "+"){
        return sum(number1, number2)
    } else if(operator=="-"){
        return subtract(number1, number2)
    } else if(operator== "x"){
        return multiply(number1,number2)
    } else if(operator=="÷"){
        return divide(number1,number2)
    };
};

const arrayOfOperatorButtons=[]
const operatorPlus= document.querySelector(".buttonPlus")
const operatorMinus= document.querySelector(".buttonMinus")
const operatorMultiply= document.querySelector(".buttonMultiply")
const operatorDivide= document.querySelector(".buttonDivide")
arrayOfOperatorButtons.push(operatorPlus)
arrayOfOperatorButtons.push(operatorMinus)
arrayOfOperatorButtons.push(operatorMultiply)
arrayOfOperatorButtons.push(operatorDivide)

const buttonClear= document.querySelector(".theButtonClear");
const buttonEqual=document.querySelector(".buttonEqual")

const numberButtons=[];
const buttonZero=document.querySelector(".button0")
const buttonOne=document.querySelector(".button1")
const buttonTwo=document.querySelector(".button2")
const buttonThree=document.querySelector(".button3")
const buttonFour=document.querySelector(".button4")
const buttonFive=document.querySelector(".button5")
const buttonSix=document.querySelector(".button6")
const buttonSeven=document.querySelector(".button7")
const buttonEight=document.querySelector(".button8")
const buttonNine=document.querySelector(".button9")
numberButtons.push(buttonZero)
numberButtons.push(buttonOne)
numberButtons.push(buttonTwo)
numberButtons.push(buttonThree)
numberButtons.push(buttonFour)
numberButtons.push(buttonFive)
numberButtons.push(buttonSix)
numberButtons.push(buttonSeven)
numberButtons.push(buttonEight)
numberButtons.push(buttonNine)

const display= document.querySelector(".numbersDisplay");
display.textContent='0'
const allButtons=document.querySelectorAll("button")

let numb1="";
let numb2='';
let theOperator=null
let returnValue=null
let num1
let OperationString =''
let indexOfOperator= null

getOperation()
function getOperation (){
    if(typeof OperationString=="number"){
        return OperationString
    } else{
    numberButtons.forEach((number) => {
        number.addEventListener('click', () => {
            OperationString=OperationString+ number.textContent
            if(typeof indexOfOperator== "number"){
                display.textContent= OperationString.substring(indexOfOperator+1)
            } else{
            display.textContent= OperationString
            }
        })
    })
}
}


arrayOfOperatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        OperationString=OperationString+operator.textContent
        indexOfOperator= OperationString.indexOf(operator.textContent)
        theOperator=operator.textContent
    })
})

function getNumb1(){
    let num1DecimalPlace= OperationString.indexOf('.')
    if(num1DecimalPlace > -1){
        numb1=returnValue
    } else {
    numb1=parseInt(OperationString)
    //numberOneHasDecimal()
    }
}

function getNumb2(){
    let num2= OperationString.substring(indexOfOperator+1)
    numb2= parseInt(num2)
}

buttonEqual.addEventListener('click', () => {
    getNumb1()
    getNumb2()
    console.log(numb1)
    console.log(numb2)
    returnValue= operate(theOperator, numb1, numb2)
    display.textContent=returnValue
    hasDecimal()
    OperationString= returnValue
})


buttonClear.addEventListener('click', () => {
    display.textContent= 0
    numb1="";
    numb2='';
    theOperator=null
    returnValue=null
    num1
    OperationString =''
    indexOfOperator= null
})


let returnValueWithDecimal
function hasDecimal(){
    if(returnValue %1 == 0){
        display.textContent=display.textContent
} else {
    display.textContent=returnValue.toFixed(2)
}
}



function numberOneHasDecimal(){
       let num1DecimalPlace= OperationString.indexOf('.')
       if(num1DecimalPlace > -1){
           numb1=returnValue
       }
}

allButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.classList.add("hovered")
    })
})
allButtons.forEach((button) => {
    button.addEventListener('mouseleave', () => {
        button.classList.remove("hovered")
    })
})


    

    allButtons.forEach((item) => {
        item.addEventListener("mousedown", () => {
            item.classList.add("clicked")
        })
    })

    allButtons.forEach((item) => {
        item.addEventListener("mouseup", () => {
            item.classList.remove("clicked")
        })
    })
 
 

  






