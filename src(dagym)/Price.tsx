import { CSSProperties } from "react";

export type PriceProps = {
  price: number;
};
const Price = (props: PriceProps) => {
  const priceLeftStyle: CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3d4149",
  };
  const priceRightStyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#3d4149",
  };
  return (
    <div>
      <span style={priceLeftStyle}>{props.price}원</span>
      <span style={priceRightStyle}>/월</span>
    </div>
  );
};
export default Price;
