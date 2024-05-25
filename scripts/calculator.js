let calculation = document.getElementById('.display');


function addDigit(userInput){
    display.value += userInput;
    updateGiven();
}   

function updateGiven(){
    document.getElementById('.display')
    .innerHTML = `${calculation}`;
}

function resetDigit(){
    display.value = '';
    updateGiven();
}

function solveFunction(){
    display.value = eval(display.value);
}