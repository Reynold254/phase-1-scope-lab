// 1. Declare a global variable customerName using var
var customerName = "bob";

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to declare a global variable bestCustomer
function setBestCustomer() {
  bestCustomer = "not bob"; // Implicit global variable (bad practice)
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = "some customer";

// 6. Function attempting to change the constant (will cause an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "another customer"; // This will throw an error
}
