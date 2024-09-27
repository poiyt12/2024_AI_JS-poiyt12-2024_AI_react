import { CSSProperties } from "react";
export type PositionProps = {
  positionName: string;
};
// export type PositionProps = {
//   positionName: "TOP" | "JUNGLE" | "MID" | "BOTTOM" | "SUPPORT" | string;
// };
const Position = (Props: PositionProps) => {
  // const positionMap = {
  //   TOP: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-top.svg?v=1724034092925",
  //   JUNGLE:
  //     "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-jng.svg?v=1724034092925",
  //   MID: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-mid.svg?v=1724034092925",
  //   BOTTOM:
  //     "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-bot.svg?v=1724034092925",
  //   SUPPORT:
  //     "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-sup.svg?v=1724034092925",
  // };
  const PositionStyle: CSSProperties = {};
  return (
    <div style={PositionStyle}>
      <img src={Props.positionName} alt="" />
    </div>
  );
};
export default Position;
