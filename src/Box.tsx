import { CSSProperties } from "react";

type boxType = {
  width: string;
  height: string;
  backgroundColor: backgroundColors;
  text: string;
};
type backgroundColors = "red" | "blue" | "orange" | "yellow";
const Box = (props: boxType) => {
  const BoxStyle: CSSProperties = {
    height: props.height,
    width: props.width,
    backgroundColor: props.backgroundColor,
  };
  return <div style={BoxStyle}>{props.text}</div>;
};
export default Box;
