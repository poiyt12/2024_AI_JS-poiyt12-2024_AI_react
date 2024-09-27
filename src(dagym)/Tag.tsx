import { CSSProperties } from "react";

export type tagProps = {
  Tag: string;
};
const Tag = (props: tagProps) => {
  const tagStyle: CSSProperties = {
    color: "#5467f5",
    fontSize: "10px",
    padding: "3px 6px",
    borderRadius: "4px",
    fontWeight: "bold",
    backgroundColor: "#eaeeff",
  };
  return <span style={tagStyle}>{props.Tag}</span>;
};

export default Tag;
