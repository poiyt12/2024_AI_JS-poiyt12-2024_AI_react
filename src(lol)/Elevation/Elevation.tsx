import { CSSProperties } from "react";

export type ElevationProps = {
  elevation: number;
};
const Elevation = (props: ElevationProps) => {
  const ElevationStyle: CSSProperties = {};
  return <div style={ElevationStyle}>{props.elevation}</div>;
};
export default Elevation;
