import { CSSProperties } from "react";

export type LankLabelProps = {
  LankLabel: number;
};
const LankLabel = (props: LankLabelProps) => {
  const LankLableStyle: CSSProperties = {};
  return <div style={LankLableStyle}>{props.LankLabel}</div>;
};

export default LankLabel;
