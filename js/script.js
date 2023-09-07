// Ecommerce IA Images //
let totalCost = 0;
let selectedProducts = []; // Array para almacenar productos seleccionados

function addToTotal(cost, product) {
  totalCost += cost;
  selectedProducts.push(product); // Agregar el producto al array de productos seleccionados
  console.log('Total: $' + totalCost);
}

let idProduct = parseInt(prompt('Let\'s buy an IA Image with us\n1-Realistic style\n2-Anime Style\n3-Fantasy style\n0-Exit/Pay'));

while (idProduct !== 0) {
  switch (idProduct) {
    case 1:
      alert('You added Realistic style to your cart.');
      addToTotal(50, 'Realistic style');
      break;
    case 2:
      alert('You added Anime Style to your cart.');
      addToTotal(40, 'Anime Style');
      break;
    case 3:
      alert('You added Fantasy style to your cart.');
      addToTotal(60, 'Fantasy style');
      break;
    default:
      alert('Invalid product code.');
      break;
  }

  idProduct = parseInt(prompt('Let\'s buy an IA Image with us\n1-Realistic style $50\n2-Anime Style $40\n3-Fantasy style $60\n0-Exit'));
}

// Tabla de productos seleccionadoe y costo total
console.log('Products selected and total cost:');
console.table(selectedProducts);
console.log('Total: $' + totalCost);

if (totalCost !== 0) {
  let paymentMethod = parseInt(prompt('Select your payment method:\n1 - Credit Card\n2 - PayPal\n3 - Bitcoin'));

  switch (paymentMethod) {
    case 1:
      alert('You chose to pay with a Credit Card.\nIn a few seconds, you will be redirected. Thank you for your purchase.');
      break;
    case 2:
      alert('You chose to pay with PayPal.\nIn a few seconds, you will be redirected. Thank you for your purchase.');
      break;
    case 3:
      alert('You chose to pay with Bitcoin.\nIn a few seconds, you will be redirected. Thank you for your purchase.');
      break;
    default:
      alert('Invalid payment method.\n Please try again.');
      break;
  }
}
