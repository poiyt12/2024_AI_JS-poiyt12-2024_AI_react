import { CSSProperties } from "react";

export type ChampionNameProps = {
  championName: string;
};
const ChampionName = (props: ChampionNameProps) => {
  const ChampionNameStyle: CSSProperties = {};
  return <div style={ChampionNameStyle}>{props.championName}</div>;
};
export default ChampionName;
