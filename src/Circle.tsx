import { CSSProperties } from "react";

type CircleType = {
  backgroundColor: string;
};
const Circle = (props: CircleType) => {
  const CircleStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    width: "50px",
    height: "50px",
    borderRadius: "9999px",
  };

  return <div style={CircleStyle}></div>;
};
export default Circle;
