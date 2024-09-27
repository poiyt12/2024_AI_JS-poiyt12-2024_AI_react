import { CSSProperties } from "react";
type FreeCotentsProps = {
  services: string;
};
const FreeCotents = (props: FreeCotentsProps) => {
  const FreeStyle: CSSProperties = {
    backgroundColor: "#f1f3f6",
    padding: "8px 12px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "15px",
  };
  const serviceStyle: CSSProperties = {
    color: "#999fa9",
    fontSize: "12px",
    fontWeight: "bold",
  };
  const listStyle: CSSProperties = {
    fontSize: "12px",
  };

  return (
    <div style={FreeStyle}>
      <span style={serviceStyle}>무료 서비스</span>
      <span style={listStyle}>{props.services}</span>
    </div>
  );
};
export default FreeCotents;
