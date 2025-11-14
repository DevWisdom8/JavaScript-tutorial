// 1. Declare inventory array
let inventory = [];

// 2. findProductIndex function
function findProductIndex(productName) {
  productName = productName.toLowerCase();
  return inventory.findIndex(item => item.name === productName);
}

// 3. addProduct function
function addProduct(product) {
  let index = findProductIndex(product.name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(product.name + " " + inventory[index].quantity);
  } else {
    inventory.push({ name: product.name.toLowerCase(), quantity: product.quantity });
    console.log(product.name + " added to inventory");
  }
}

// 4. removeProduct function
function removeProduct(productName, quantity) {
  let index = findProductIndex(productName);

  if (index === -1) {
    console.log(productName + " not found");
    return;
  }

  let product = inventory[index];

  if (product.quantity < quantity) {
    console.log(`Not enough ${product.name} available, remaining pieces: ${product.quantity}`);
  } else {
    product.quantity -= quantity;
    if (product.quantity === 0) {
      inventory.splice(index, 1);
    } else {
      console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
    }
  }
}
