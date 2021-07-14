let buttons = document.getElementsByClassName("operation-buttons");

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function getNumber1() {
    return Number(input1.value);
}

function getNumber2() {
    return Number(input2.value);
}


function makeOperation(operationCode) {
    if (operationCode === "+") {
        let result = getNumber1() + getNumber2();
        alert(result);
    }
    else if (operationCode === "-") {
        let result = getNumber1() - getNumber2();
        alert(result);
    }
    else if (operationCode === "*") {
        let result = getNumber1() * getNumber2();
        alert(result);
    }
    else if (operationCode === "/") {
        let result = getNumber1() / getNumber2();
        alert(result);
    }

    else {
        alert("operation is unknown");
    }

}


function onOperationButtonClick(eventObject){
let clickedElement = eventObject.currentTarget;
let operationCode = clickedElement.innerHTML;
makeOperation(operationCode);
}


for(let i = 0; i < buttons.length; i++){
    let button = buttons[i];
    button.addEventListener("click", onOperationButtonClick);
}