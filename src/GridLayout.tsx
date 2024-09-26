import { CSSProperties, ReactNode } from "react";
type GridLAyoutType = {
  columnNumber: number;
  component: ReactNode;
};
const GridLayout = (props: GridLAyoutType) => {
  const GridLayoutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columnNumber},1fr)`,
    gap: "10px",
  };
  return <section style={GridLayoutStyle}>{props.component}</section>;
};
export default GridLayout;
