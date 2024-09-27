import { CSSProperties } from "react";
import Album, { AlbumProps } from "./Album";
import CategoryList, { CategoryListProps } from "./CategoryList";
import GymName, { GymNameProps } from "./GymName";
import StarRate, { StarRateProps } from "./StarRate";
import Reviews, { ReviewsProps } from "./Reviews";
import Address, { AddressProps } from "./Address";
import Tag, { tagProps } from "./Tag";
import Price, { PriceProps } from "./Price";

export type CardUpperProps = AlbumProps &
  CategoryListProps &
  GymNameProps &
  StarRateProps &
  ReviewsProps &
  tagProps &
  AddressProps &
  PriceProps;

const CardUpper = (props: CardUpperProps) => {
  const cardUpperStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  };
  const rightStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "10px",
    width: "90%",
  };
  const infoStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };
  const eventStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const info2Style: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
  };
  return (
    <div style={cardUpperStyle}>
      <Album image={props.image}></Album>
      <div style={rightStyle}>
        <div style={infoStyle}>
          {" "}
          <CategoryList categories={props.categories}></CategoryList>
          <GymName GymName={props.GymName}></GymName>
          <div style={info2Style}>
            <StarRate starRate={props.starRate}></StarRate>
            <Reviews reviews={props.reviews}></Reviews>
            <Address address={props.address}></Address>
          </div>
        </div>
        <div style={eventStyle}>
          <Tag Tag={props.Tag}></Tag>
          <Price price={props.price}></Price>
        </div>
      </div>
    </div>
  );
};

export default CardUpper;
