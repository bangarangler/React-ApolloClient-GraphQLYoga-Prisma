import React from "react";
import CartStyles from "./styles/CartStyles.js";
import Supreme from "./styles/Supreme.js";
import CloseButton from "./styles/CloseButton.js";
import SickButton from "./styles/SickButton.js";

const Cart = () => {
  return (
    <CartStyles open>
      <header>
        <CloseButton title="close">&times;</CloseButton>
        <Supreme>Your Cart</Supreme>
        <p>You Have __ Items in your cart.</p>
      </header>
      <footer>
        <p>$10.10</p>
        <SickButton>Checkout</SickButton>
      </footer>
    </CartStyles>
  );
};

export default Cart;
