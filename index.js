var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName.toUpperCase;
}

// function setBestCustomer() {
//     var bestCustomer = 'not bob';
// }
function setBestCustomer(){
    window.bestCustomer = 'not bob';
  }

  function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
  }

  const leastFavoriteCustomer = 'def not bob';

  function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'maybe jane';
  }