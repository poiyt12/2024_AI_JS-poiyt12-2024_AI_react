import { CSSProperties } from "react";

type ButtonType = {
  borderRadius: "hard" | "smooth" | "circle";
  backgroundColor: "Primary" | "Hover" | "Deactive";
  text: string;
};

const Button = (props: ButtonType) => {
  const colorMap = {
    Primary: "#205BF3",
    Hover: "#478DF5",
    Deactive: "#979797",
  };
  const radiusMap = {
    hard: "0px",
    smooth: "5px",
    circle: "100px",
  };
  const ButtonStyle: CSSProperties = {
    borderRadius: radiusMap[props.borderRadius],
    backgroundColor: colorMap[props.backgroundColor],
  };
  return <div style={ButtonStyle}>{props.text}</div>;
};
export default Button;
