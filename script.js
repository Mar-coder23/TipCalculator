// grabbing the elements from the HTML
const billAmount = document.getElementById('billAmount');
const tipAmount = document.getElementById('tipAmount');
const calcBtn = document.getElementById('calculateBtn');
const displayTotal = document.getElementById('hiddenTotal');
const notNumberMessage = document.getElementById('hiddenNotNumberMessage');


// function for calculating value
function calculation() {
    // this gets the value from bill amount and tip amount
    // parseFloat is changing from string to number. Gave NaN error
    const billValue = parseFloat(billAmount.value);
    const tipValue = parseFloat(tipAmount.value);


    // calculates the tip percentage
    const tipTotal = billValue * (tipValue / 100);

    // calculates the bill amount plus the tip %
    const finalTotal = billValue + tipTotal;



    // to check if any value is not a number to display hidden red text saying invalid input
    if (isNaN(billValue) || isNaN(tipValue)){
        notNumberMessage.style.display = 'block';
    }
    else{
        notNumberMessage.style.display = 'none';
    }


    // calling the function
    updateDisplay(finalTotal);
 
}



// function for updating the display
function updateDisplay(finalTotal) {
    // the display. it's text content is equal to 
    displayTotal.textContent = `$${finalTotal.toFixed(2)}`
}





// adding event listener and listening for a click on the calculate button, when clicked it will run the calculation function above
calcBtn.addEventListener('click', calculation);