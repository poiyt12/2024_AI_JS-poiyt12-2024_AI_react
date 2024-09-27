import { CSSProperties } from "react";

export type AlbumProps = {
  ChampionImage: string;
};
const Album = (props: AlbumProps) => {
  const AlbumStyle: CSSProperties = {
    width: "32px",
    height: "32px",
  };
  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  return (
    <div style={AlbumStyle}>
      <img style={imgStyle} src={props.ChampionImage} alt="" />
    </div>
  );
};
export default Album;
