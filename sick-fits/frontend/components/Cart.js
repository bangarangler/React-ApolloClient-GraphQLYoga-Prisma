import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { adopt } from "react-adopt";
import User from "./User.js";
import CartItem from "./CartItem.js";
import calcTotalPrice from "../lib/calcTotalPrice.js";
import formatMoney from "../lib/formatMoney.js";
import CartStyles from "./styles/CartStyles.js";
import Supreme from "./styles/Supreme.js";
import CloseButton from "./styles/CloseButton.js";
import SickButton from "./styles/SickButton.js";

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => (
    <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>
});

const Cart = () => {
  return (
    <Composed>
      {({ user, toggleCart, localState }) => {
        const me = user.data.me;
        if (!me) return null;
        return (
          <CartStyles open={localState.data.cartOpen}>
            <header>
              <CloseButton onClick={toggleCart} title="close">
                &times;
              </CloseButton>
              <Supreme>{me.name}'s Cart</Supreme>
              <p>
                You Have {me.cart.length} Item
                {me.cart.length === 1 ? "" : "s"} in your cart.
              </p>
            </header>
            <ul>
              {me.cart.map(cartItem => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </ul>
            <footer>
              <p>{formatMoney(calcTotalPrice(me.cart))}</p>
              <SickButton>Checkout</SickButton>
            </footer>
          </CartStyles>
        );
      }}
    </Composed>
  );
};

//const Cart = () => {
//return (
//<User>
//{({ data: { me } }) => {
//if (!me) return null;
//console.log(me);
//return (
//<Mutation mutation={TOGGLE_CART_MUTATION}>
//{toggleCart => (
//<Query query={LOCAL_STATE_QUERY}>
//{({ data }) => (
//<CartStyles open={data.cartOpen}>
//<header>
//<CloseButton onClick={toggleCart} title="close">
//&times;
//</CloseButton>
//<Supreme>{me.name}'s Cart</Supreme>
//<p>
//You Have {me.cart.length} Item
//{me.cart.length === 1 ? "" : "s"} in your cart.
//</p>
//</header>
//<ul>
//{me.cart.map(cartItem => (
//<CartItem key={cartItem.id} cartItem={cartItem} />
//))}
//</ul>
//<footer>
//<p>{formatMoney(calcTotalPrice(me.cart))}</p>
//<SickButton>Checkout</SickButton>
//</footer>
//</CartStyles>
//)}
//</Query>
//)}
//</Mutation>
//);
//}}
//</User>
//);
//};

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
