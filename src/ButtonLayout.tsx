import { CSSProperties } from "react";
import Button from "./Button";
type girdType = {
  columnNumber: number;
};
const ButtonLayout = (props: girdType) => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columnNumber},1fr)`,
    gap: "10px",
  };
  return (
    <div style={gridStyle}>
      <Button
        backgroundColor="Hover"
        borderRadius="hard"
        text="1번 버튼"
      ></Button>
      <Button
        backgroundColor="Primary"
        borderRadius="smooth"
        text="2번 버튼"
      ></Button>
      <Button
        backgroundColor="Deactive"
        borderRadius="circle"
        text="3번 버튼"
      ></Button>
    </div>
  );
};
export default ButtonLayout;
