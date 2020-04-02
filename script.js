let nums = '';
let operator = '';
let numAnswer = '';
let answerDisplay = document.querySelector('#calcDisplay');

function displayAnswer(choice){ //displaying the current number
    let number = choice.currentTarget.id;
    if (nums === ''){ //checking if it is first number so it checks decimal
        if (number === '.'){ 
            alert('Numbers come first!!')
        }else {nums = number;}
    }else if (nums.length === 15){ //making sure it fits on screen
        alert("Sorry, too large! (That's what she said)")
    }else if (number === '.'){ // making sure only one decimal
        if (nums.includes('.')){
            alert('Only, one decimal!')
        }else { nums += number;}
    }else {nums += number;} // adding in a string the next numbers
    answerDisplay.innerHTML = nums;
}

function operate(){ //does the actual math
    if (operator === '+'){
        numAnswer = Number(numAnswer) + Number(nums);
        answerDisplay.innerHTML = numAnswer;
        nums = '';
    } else if (operator === '-'){
        numAnswer = Number(numAnswer) - Number(nums);
        answerDisplay.innerHTML = numAnswer;
        nums = '';
    } else if (operator === '/'){
        numAnswer = Number(numAnswer) / Number(nums);
        answerDisplay.innerHTML = numAnswer;
        nums = '';
    } else if (operator === '*'){
        numAnswer = Number(numAnswer) * Number(nums);
        answerDisplay.innerHTML = numAnswer;
    }
}

function control(choice){
    if (numAnswer === ''){ // to see if it is first number input
        numAnswer = nums;
        nums = '';
        operator = choice.currentTarget.id;
    }else if (choice.currentTarget.id != 'equals'){
        operate();
        operator = choice.currentTarget.id;
        nums = '';
    }else if (choice.currentTarget.id === 'equals'){ //runs the math to show answer
        operate();
        operator = 'x';
        nums = '';
    }else if (operator === 'x'){ //if last button was equals then sets operator
        operator = choice.currentTarget.id;
        operate();
        nums = '';
    }
}

function funcs(choice){ //the clear and delete buttons
    let edit = choice.currentTarget.id;
    if (edit === 'backspace'){
        nums = nums.slice(0, -1);
        answerDisplay.innerHTML = nums;
    }else { // clears everything
        nums = '';
        numAnswer = '';
        operator = '';
        answerDisplay.innerHTML = nums;       
}

}

//all of the buttons
const numBtns = document.querySelectorAll('.numbers');
numBtns.forEach(button => button.addEventListener('click', displayAnswer));

const opsBtns = document.querySelectorAll('.operators');
opsBtns.forEach(button => button.addEventListener('click', control));

const funcBtns = document.querySelectorAll('.funcs')
funcBtns.forEach(button => button.addEventListener('click', funcs));