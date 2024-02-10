import React from "react";
import { Price } from "../types";

const Price = ({ price }: { price: Price }) => {
  return (
    <div className="price"
      aria-label={`${price.amount} ${price.currency}`}
      aria-roledescription="Precio"
    >
      <span className="currency">{price.currency}</span>
      <span className="amount">{price.amount}</span>
    </div>
  )
}

export default Price;
