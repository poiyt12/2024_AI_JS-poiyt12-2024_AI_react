import { CSSProperties } from "react";
import CardUpper, { CardUpperProps } from "./CardUpper";
import CardLower from "./CardLower";

type CardProps = CardUpperProps;

const Card = (props: CardProps) => {
  const cardStyle: CSSProperties = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    maxWidth: "800px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  const CardUpperProps = props;
  return (
    <article style={cardStyle}>
      <div>
        <CardUpper {...props}></CardUpper>
      </div>
      <div>
        <CardLower></CardLower>
      </div>
    </article>
  );
};
export default Card;
