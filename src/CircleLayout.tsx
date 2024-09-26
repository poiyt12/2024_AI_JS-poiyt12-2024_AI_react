import { CSSProperties } from "react";
import Circle from "./Circle";
type gridType = {
  columnNumber: number;
};
const CircleLayout = (props: gridType) => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columnNumber},1fr)`,
    gap: "10px",
  };
  return (
    <div style={gridStyle}>
      <Circle backgroundColor="red"></Circle>
      <Circle backgroundColor="green"></Circle>
      <Circle backgroundColor="yellow"></Circle>
      <Circle backgroundColor="black"></Circle>
      <Circle backgroundColor="blue"></Circle>
      <Circle backgroundColor="red"></Circle>
      <Circle backgroundColor="green"></Circle>
      <Circle backgroundColor="yellow"></Circle>
      <Circle backgroundColor="black"></Circle>
      <Circle backgroundColor="blue"></Circle>
      {["pink", "silver", "skyblue", "purple", "gold"].map((v) => (
        <Circle backgroundColor={v} />
      ))}
    </div>
  );
};
export default CircleLayout;
