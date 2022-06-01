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
let numb1= null;
let numb2=null;
let theOperator=""
let returnValue= null
let numberOne=''

let operationArray= [];
const allButtons=document.querySelectorAll("button")
const getNumberOne= function (){
allButtons.forEach((button)=> {
    button.addEventListener("click", () => {
        operationArray.push(button.textContent)
        display.textContent= operationArray.join("")
        const num1= operationArray.join("")
        switch(true){
            case (button.textContent == '+'):
                displayAfterOperator();
               currentOperation= num1
               display.textContent= (`${parseInt(currentOperation)}`)
               numberOne= parseInt(num1)
               numb1= numberOne   
               theOperator= "+"
               return getNumberTwo();
               break;
            case (button.textContent == '-'):
                displayAfterOperator();
                currentOperation= `${num1} -`
                display.textContent= (`${parseInt(currentOperation)}`)
                numberOne= parseInt(num1)
                numb1= numberOne   
                theOperator= "-"
                return getNumberTwo();
                break;
            case (button.textContent == '*'):
                displayAfterOperator();
                 currentOperation= `${num1} *`
                display.textContent= (`${parseInt(currentOperation)}`)
                numberOne= parseInt(num1)
                numb1= numberOne   
                theOperator= "*"
                return getNumberTwo();

                break;
            case (button.textContent == '/'):
                displayAfterOperator();
                currentOperation= `${num1} /`
                display.textContent= (`${parseInt(currentOperation)}`)
                numberOne= parseInt(num1)
                numb1= numberOne   
                theOperator= "/"
                return getNumberTwo();
                break;

        };      
    });
});
}
getNumberOne();


const getNumberTwo= function(){
const buttonEqual=document.querySelector(".buttonEqual")
buttonEqual.addEventListener("click", () => {
    let numberTwoToNum=0;
    if(theOperator== '+'){
        numberTwoToNum = parseInt(display.textContent.split('+').pop());
        numb2= numberTwoToNum;
    } else if (theOperator== '-'){
        numberTwoToNum = parseInt(display.textContent.split('-').pop());
        numb2= numberTwoToNum;
    } else if(theOperator== '*'){
        numberTwoToNum = parseInt(display.textContent.split('*').pop());
        numb2= numberTwoToNum;
    } else if(theOperator== '/'){
        numberTwoToNum = parseInt(display.textContent.split('/').pop());
        numb2= numberTwoToNum;
    };
    runCalc()
    return numb2= numberTwoToNum;
    
    
})
}
    const runCalc= function(){
        returnValue= operate(theOperator,numb1,numb2)
        display.textContent=returnValue
        operateOnReturnValue()
    }

  
    
    
    let displayAfterOperator= function() {
        const stringOfNumTwo = []
        allButtons.forEach((button) => {
            button.addEventListener('click', ()=> {
                stringOfNumTwo.push(button.textContent)
                display.textContent=stringOfNumTwo.join('');

            })
            
        })
        
    }

   console.log(allButtons)

    const operateOnReturnValue= function(){
        let theOperator= ""
        let num1= null
        let num2= null
        if(typeof returnValue== 'number'){
            num1= returnValue;
            const arrayOfOperatorButtons=[]
            const operatorPlus= document.querySelector(".buttonPlus")
            const operatorMinus= document.querySelector(".buttonMinus")
            const operatorMultiply= document.querySelector(".buttonMultiply")
            const operatorDivide= document.querySelector(".buttonDivide")
            arrayOfOperatorButtons.push(operatorPlus)
            arrayOfOperatorButtons.push(operatorMinus)
            arrayOfOperatorButtons.push(operatorMultiply)
            arrayOfOperatorButtons.push(operatorDivide)
            const newNumTwoArray= []
            arrayOfOperatorButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    display.textContent=num1;
                    let newOperator= button.textContent
                    theOperator=newOperator;
                    allButtons.forEach((item) => {
                        item.addEventListener('click', () => {
                            newNumTwoArray.push(item.textContent)
                            newNumTwo=parseInt(newNumTwoArray.join(''))
                            num2=newNumTwo;
                            display.textContent=newNumTwo
                            hitEqual(theOperator,num1,num2)
                        })
                        
                    })
                })
            })
        }
    }

    
    const hitEqual= function(theOperator,num1,num2){
        const buttonEqual=document.querySelector(".buttonEqual")
        buttonEqual.addEventListener("click", () => {
            let newReturnValue= operate(theOperator,num1,num2)
            returnValue=newReturnValue
            display.textContent= returnValue
            num1=returnValue
            operateOnReturnValue()
            
            
        })
    }

