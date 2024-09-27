import { CSSProperties } from "react";
import Album, { AlbumProps } from "../Album/Album";
import RoundAlbum, { RoundAlbumProps } from "../Album/RoundAlbum";
import ChampionName, { ChampionNameProps } from "../ChampionName/ChampionName";
import Elevation, { ElevationProps } from "../Elevation/Elevation";
import LankLabel, { LankLabelProps } from "../Lank/Lanklabel";
import Position, { PositionProps } from "../Position/Position";
import BanRate, { BanRateProps } from "../Rate/BanRate";
import PickRate, { PickRateProps } from "../Rate/PickRate";
import WinRate, { WinRateProps } from "../Rate/WinRate";
import Tier, { TierProps } from "../Tier/Tier";

export type InnerProps = AlbumProps &
  RoundAlbumProps &
  ChampionNameProps &
  ElevationProps &
  LankLabelProps &
  PositionProps &
  BanRateProps &
  WinRateProps &
  PickRateProps &
  TierProps;

const Inner = (props: InnerProps) => {
  const innerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",

    gap: "20px",
  };
  const rankStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    textAlign: "start",
    gap: "20px",
  };
  const nameStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  };
  const rateStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  };
  const roundStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  };
  return (
    <div style={innerStyle}>
      <span style={rankStyle}>
        <LankLabel LankLabel={props.LankLabel} />
        <Elevation elevation={props.elevation} />
      </span>
      <span style={nameStyle}>
        <Album ChampionImage={props.ChampionImage} />
        <ChampionName championName={props.championName} />
      </span>
      <span>
        <Tier tierImage={props.tierImage} />
        <Position positionName={props.positionName} />
      </span>
      <span style={rateStyle}>
        <WinRate winRate={Math.round(props.winRate * 100)} />
        <PickRate PickRate={Math.round(props.PickRate * 100)} />
        <BanRate BanRate={Math.round(props.BanRate * 100)} />
      </span>
      <span style={roundStyle}>
        <RoundAlbum ChampionRoundImage={props.ChampionRoundImage} />
        <RoundAlbum ChampionRoundImage={props.ChampionRoundImage} />
        <RoundAlbum ChampionRoundImage={props.ChampionRoundImage} />
      </span>
    </div>
  );
};
export default Inner;
