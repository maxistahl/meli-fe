
import { Price } from "../types";
import formatAmount from "./formatter";
import "./styles.scss";

const Price = ({ price }: { price: Price }) => {
  const { amount, decimal } = formatAmount(price.amount);

  return (
    <div className="price"
      aria-label={`${price.amount} ${price.currency}`}
      aria-roledescription="Precio"
      itemProp="offers" itemScope itemType="http://schema.org/Offer"
      role="img"
    >
      <meta itemProp="price" content="1980" />
      <span className="currency" itemProp="priceCurrency" aria-hidden="true">{price.currency}</span>
      <span className="amount" aria-hidden="true">{amount}<span className="subset">{decimal}</span></span>
    </div>
  )
}

export default Price;
