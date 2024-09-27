import { CSSProperties } from "react";
import Card from "../Card/Card";
import { championRankingList } from "../Data/Data";

const LolLayout = () => {
  const LolLayoutStyle: CSSProperties = {
    width: "100%",
    maxWidth: "1000px",
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };
  const sectionStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={LolLayoutStyle}>
      <section style={sectionStyle}>
        {championRankingList.map((v) => (
          <Card
            championName={v.name}
            ChampionImage={v.image_url}
            elevation={v.positionTierData.rank_prev}
            LankLabel={v.positionTierData.rank}
            tierImage={v.positionTierData.tier}
            PickRate={v.positionPickRate}
            winRate={v.positionWinRate}
            BanRate={v.positionBanRate}
            ChampionRoundImage={v.image_url}
            positionName={v.positionName}
          />
        ))}
      </section>
    </div>
  );
};
export default LolLayout;
