import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles.js";
import PriceTag from "./styles/PriceTag.js";
import formatMoney from "../lib/formatMoney.js";
import DeleteItem from "./DeleteItem.js";
import AddToCart from "./AddToCart.js";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link
            href={{
              pathname: "/item",
              query: { id: item.id }
            }}
          >
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: "update",
              query: { id: item.id }
            }}
          >
            <a>
              Edit <FaPencilAlt />
            </a>
          </Link>
          <AddToCart id={item.id} />
          <DeleteItem id={item.id}>Delete this item</DeleteItem>
        </div>
      </ItemStyles>
    );
  }
}
