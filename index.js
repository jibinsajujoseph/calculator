// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value == "Error") {
        clearDisplay();
        display.value += input;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function clearLastDigit() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = math.evaluate(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}    

const calcButtons = document.querySelectorAll('button'); // Selecting all button tags

const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'Enter', 'Backspace', 'Escape'];

document.addEventListener('keydown', function(event) {
    let key = event.key;

    display.focus();

    if (allowedKeys.includes(key)) {

        const pressedButton = document.querySelector(`button[data-key="${key}"]`);
        
        if (pressedButton) {
            pressedButton.classList.add("active");
            setTimeout(() => {
                pressedButton.classList.remove("active");
            },100);
        }
        
        
        if (key === 'Escape') {
            clearDisplay();
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            clearLastDigit();
        } else {
            appendToDisplay(key)
        }
    } else {
        console.log("Invalid Key");
    }
});

window.onload = function() {
    display.focus();
};
