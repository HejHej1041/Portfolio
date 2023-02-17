

const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");


console.log(elemCalcScreen)

function btnCalc() {                    // denna funktion tar hand om beräkningen 
    /* your code here */
    sum = result;

    elemCalcScreen.innerHTML = sum;     // show the result on screen
}

function addDigit(thisSign) {           // lägg till siffra
    elemCalcScreen.innerHTML += thisSign;
}

function btnBackSpace() {               // ta bort
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = calcScreen.slice(0, -1);
    elemCalcScreen.innerHTML = calcScreen;

}

function btnConvertToEuro() {
    let value = elemCalcScreen.innerHTML
    value = value * 0.96
    elemCalcScreen.innerHTML = value

}


function btnConvertToDollar() {
    let value = elemCalcScreen.innerHTML
    value = value * 1.04
    elemCalcScreen.innerHTML = value
}

function btnClearAll() {
    display.innerHtml = ""

}
