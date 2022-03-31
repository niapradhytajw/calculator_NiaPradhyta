const numbers = document.querySelectorAll(".number")
//console.log(numbers)
const calculatorScreen = document.querySelector('.calculator-screen')

let prevNumber = ''
let calculationOperator =''
let currentNumber ='0'

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber =(number) => {
    //currentNumber += number
    if(currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }

}

numbers.forEach ((number) => {
    //console.log(number)
    number.addEventListener("click", (event) => {
        //console.log("number is pressed")
        //console.log(event.target.value)
        //updateScreen(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

/*const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})*/

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        //console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if ( calculationOperator === '') {
         prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    //console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/':
            result = prevNumber / currentNumber
            break
        default:
            //break
            return
    }
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    //console.log('AC Button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    //console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', () => {
    let resultPercentage = (currentNumber = parseInt(currentNumber) / 100);
    updateScreen(resultPercentage);
});

const negative = document.querySelector('.negative');

negative.addEventListener('click', (event) => {
    if (currentNumber < 0) {
        currentNumber = currentNumber * 1;
    } else {
        currentNumber = currentNumber *-1;
    }
    updateScreen(currentNumber);
});

const backspace = document.querySelector('.backspace');

backspace.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0,-1);
    updateScreen(currentNumber);
});

var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        //if output is a number
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
            
        }
    });
}

let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
    }
})

/*const audio = document
.querySelector('audio');

buttons 
.addEventListener('click', (e) => {
    let value = e.target.textContent;
    let updateScreen = screen.textContent;

    audio.play();

    switch (value) {
        case 'AC':
            screen.textContent = '';
            return;
        
        case '-':
            screen.textContent = eval(screenVal.replace('x', '*'));
            return;
        case '':
            screen.textContent = updateScreen.substring (0, updateScreen.length-1);
            return;
    }
    screen.textContent = updateScreen + value;
})*/
