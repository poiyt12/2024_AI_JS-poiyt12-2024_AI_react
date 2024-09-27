import Inner, { InnerProps } from "./Inner";

type cardProps = InnerProps;
const Card = (props: cardProps) => {
  const CardStyle = {
    gap: "10px",
    width: "100%",
    maxWidth: "800px",
  };
  return (
    <div style={CardStyle}>
      <Inner {...props}></Inner>
    </div>
  );
};
export default Card;
