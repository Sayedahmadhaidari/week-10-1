
// Tip Calculator - Week 10 Homework

// Food bill and tip percentage
let foodBill = 120;
let tipPercentage = 15;

// Number of friends
let friends = 4;

// Arithmetic operators
// Calculate the tip amount
let tipAmount = foodBill * tipPercentage / 100;

// Calculate the total bill including tip
let totalBill = foodBill + tipAmount;

// Calculate the amount for each friend
let amountPerPerson = totalBill / friends;

// Round each person's amount to two decimal places
let roundedAmount = Number(amountPerPerson.toFixed(2));

// Use the remainder operator
let remainder = totalBill % friends;

// Comparison operators
let isBillGreaterThanZero = foodBill > 0;
let isTipValid = tipPercentage >= 0 && tipPercentage <= 100;
let areThereFourFriends = friends === 4;
let isBillNotEmpty = foodBill !== 0;

// Logical operators
let isValid = isBillGreaterThanZero && isTipValid && areThereFourFriends;
let hasDiscount = false;
let finalCheck = isValid || hasDiscount;
let isNotValid = !isValid;

// String methods
let receiptTitle = "  tip calculator receipt  ";
let cleanTitle = receiptTitle.trim();

let upperTitle = cleanTitle.toUpperCase();
let billText = ("Food Bill: $" + foodBill).toUpperCase();
let tipText = ("Tip (" + tipPercentage + "%): $" + tipAmount.toFixed(2)).toUpperCase();
let totalText = ("Total Bill: $" + totalBill.toFixed(2)).toUpperCase();
let friendsText = ("Number of Friends: " + friends).toUpperCase();
let personText = ("Each Person Pays: $" + roundedAmount.toFixed(2)).toUpperCase();

// Other string methods
let lowerTitle = cleanTitle.toLowerCase();
let titleLength = cleanTitle.length;
let hasReceiptWord = cleanTitle.includes("receipt");
let shortTitle = cleanTitle.slice(0, 13);

// Print the receipt
console.log("==============================");
console.log(upperTitle);
console.log("==============================");
console.log(billText);
console.log(tipText);
console.log(totalText);
console.log(friendsText);
console.log(personText);
console.log("==============================");

// Print additional information
console.log("REMAINDER: $" + remainder.toFixed(2));
console.log("IS BILL GREATER THAN ZERO: " + isBillGreaterThanZero);
console.log("IS TIP VALID: " + isTipValid);
console.log("ARE THERE FOUR FRIENDS: " + areThereFourFriends);
console.log("IS BILL NOT EMPTY: " + isBillNotEmpty);
console.log("IS THE CALCULATION VALID: " + finalCheck);
console.log("IS NOT VALID: " + isNotValid);

console.log("LOWERCASE TITLE: " + lowerTitle);
console.log("TITLE LENGTH: " + titleLength);
console.log("INCLUDES RECEIPT: " + hasReceiptWord);
console.log("SHORT TITLE: " + shortTitle);
