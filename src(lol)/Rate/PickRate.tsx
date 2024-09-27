import { CSSProperties } from "react";

export type PickRateProps = {
  PickRate: number;
};
const PickRate = (props: PickRateProps) => {
  const PickRateStyle: CSSProperties = {};
  return <div style={PickRateStyle}>{props.PickRate}</div>;
};
export default PickRate;
