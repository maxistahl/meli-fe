import React from "react";

type FreeShippingProps = {
  show: boolean;
}

const FreeShipping = ({ show }: FreeShippingProps) => show && <span className="free-shipping">Envío gratis</span>;

export default FreeShipping;
