function getShoppingCart() {
  // declare "private" variables and methods here
  let items = [];

  // create the object that uses the "private" variables and methods
  const shoppingCart = {
    // items: [],
    addToCart(item) {
      if (typeof item === "string") {
        items.push(item); // not this.items
      }
    },
    showCart() {
      console.log(items);
    },
  };

  return shoppingCart;
}

let shoppingCart = getShoppingCart();

shoppingCart.addToCart("Soap");
shoppingCart.addToCart("Shampoo");
shoppingCart.addToCart({ name: "Chips" }); // does not add it

// does not work
// shoppingCart.items.push( { name: 'Detergent' } ); // adds it

shoppingCart.showCart();
