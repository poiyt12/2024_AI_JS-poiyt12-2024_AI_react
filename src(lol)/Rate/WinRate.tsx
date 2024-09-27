import { CSSProperties } from "react";

export type WinRateProps = {
  winRate: number;
};
const WinRate = (props: WinRateProps) => {
  const WinRateStyle: CSSProperties = {};
  return <div style={WinRateStyle}>{props.winRate}</div>;
};
export default WinRate;
