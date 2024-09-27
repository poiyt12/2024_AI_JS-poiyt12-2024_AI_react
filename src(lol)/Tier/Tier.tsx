import { CSSProperties } from "react";

export type TierProps = { tierImage: number };
const Tier = (props: TierProps) => {
  const tierMap: any = {
    1: "https://s-lol-web.op.gg/images/icon/icon-tier-1.svg?v=1724034092925",
    2: "https://s-lol-web.op.gg/images/icon/icon-tier-2.svg?v=1724034092925",
    3: "https://s-lol-web.op.gg/images/icon/icon-tier-3.svg?v=1724034092925",
    4: "https://s-lol-web.op.gg/images/icon/icon-tier-4.svg?v=1724034092925",
    5: "https://s-lol-web.op.gg/images/icon/icon-tier-5.svg?v=1724034092925",
  };
  const TierStyle: CSSProperties = {};
  return (
    <div style={TierStyle}>
      <img src={tierMap[props.tierImage]} alt="" />
    </div>
  );
};
export default Tier;
