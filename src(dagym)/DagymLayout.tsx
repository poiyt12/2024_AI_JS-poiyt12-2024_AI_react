import Card from "./Card";
import { centerList } from "./Data";

const DagymLayout = () => {
  return (
    <main style={{ width: "100vw" }}>
      <section
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {" "}
        {centerList.map((v) => (
          <Card
            image={v.gymPhotoSmall}
            GymName={v.gymName}
            address={v.address}
            price={
              v.price.lowestPrice / Number(v.price.period) ||
              v.price.lowestPrice
            }
            starRate={v.review.rate}
            reviews={v.review.count}
            Tag={"일일권"}
            categories={v.tags.join("")}
          />
        ))}
      </section>
    </main>
  );
};
export default DagymLayout;
