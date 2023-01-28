// inputs
let billAmount = 0;
let tipRate = 0;
// outputs
let tipAmount = 0;
let totalAmount = 0;

// inputs
let billInput = document.getElementById("bill-amount");
let tipRateInput = document.getElementById("tip-Rate");

// button
let calButton = document.getElementById("calculate-button");

// outputs
let tipAmountRes = document.getElementById("tip-amount");
let totalAmountRes = document.getElementById("total-amount");



calButton.addEventListener("click", function(){

    billAmount = parseInt(billInput.value);
    tipRate = parseInt(tipRateInput.value);

    tipAmount = billAmount * tipRate / 100;
    totalAmount = billAmount + tipAmount;

    tipAmountRes.innerHTML = tipAmount;
    totalAmountRes.innerHTML = totalAmount;

});
