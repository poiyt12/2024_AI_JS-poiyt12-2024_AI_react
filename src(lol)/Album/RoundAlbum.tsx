import { CSSProperties } from "react";
export type RoundAlbumProps = {
  ChampionRoundImage: string;
};
const RoundAlbum = (props: RoundAlbumProps) => {
  const RoundAlbumStyle: CSSProperties = {
    width: "32px",
    height: "32px",
  };
  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "9999px",
  };
  return (
    <div style={RoundAlbumStyle}>
      <img style={imgStyle} src={props.ChampionRoundImage} alt="" />
    </div>
  );
};
export default RoundAlbum;
