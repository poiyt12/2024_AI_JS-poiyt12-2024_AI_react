import { CSSProperties } from "react";

export type GymNameProps = {
  GymName: string;
};

const GymName = (props: GymNameProps) => {
  const gymNameStyle: CSSProperties = {
    fontWeight: "bold",
    lineHeight: "26px",
    // "&:hover":{}
  };

  return <span style={gymNameStyle}>{props.GymName}</span>;
};
export default GymName;
