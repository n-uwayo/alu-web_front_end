const readline = require('readline');

// Step 1: Define the stock object
let stock = {
  macbook: 2,
  iphone: 4
};

// Step 2: Implement processPayment function
function processPayment(itemName) {
  stock[itemName.toLowerCase()]--;
  console.log(`Payment is being processed for item ${itemName}`);
}

// Step 3: Implement processError function
function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log('Payment is not being processed');
}

// Step 4: Implement processOrder function
function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);

  let lowerCaseItemName = itemName.toLowerCase();
  if (stock[lowerCaseItemName] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

// Step 5: Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Step 6: Prompt user input and process the order
rl.question("Please enter the item you would like to purchase (Macbook, iPhone): ", function(answer) {
  if (answer) {
    let userInput = answer.trim().toLowerCase();
    if (userInput === 'macbook' || userInput === 'iphone') {
      processOrder(userInput, processPayment, processError);
    } else {
      console.log(`Sorry, we do not offer ${userInput}`);
    }
  } else {
    console.log('Invalid input');
  }

  rl.close();
});
