import React from "react";

type RenderPriceProps = {
  price: number;
  priceBoxClass: string;
  lineClass: string;
  priceClass: string;
  ilsIconClass: string;
};

export const renderPrice = ({
  price,
  priceBoxClass,
  lineClass,
  priceClass,
  ilsIconClass,
}: RenderPriceProps) => (
  <div className={priceBoxClass}>
    <hr className={lineClass} />
    <span className={priceClass}>{price}</span>
    <img src="/src/assets/icons/ILS.svg" alt="ILS" className={ilsIconClass} />
    <hr className={lineClass} />
  </div>
);
