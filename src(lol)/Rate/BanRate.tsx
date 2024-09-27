import { CSSProperties } from "react";

export type BanRateProps = {
  BanRate: number;
};
const BanRate = (props: BanRateProps) => {
  const BanRateStyle: CSSProperties = {};
  return <div style={BanRateStyle}>{props.BanRate}</div>;
};
export default BanRate;
