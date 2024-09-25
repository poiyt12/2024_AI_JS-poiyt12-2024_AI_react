//typeliteral

type angryDepth = 1 | 2 | 3 | 4 | 5;
type jobType = "전사" | "마법사" | "도적" | "궁수";

const e1: angryDepth = 3;
const e2: { id: string; level: number; job: jobType } = {
  id: "응급대불",
  level: 267,
  job: "도적",
};

type burger =
  | "불고기버거"
  | "새우버거"
  | "상하이치킨버거"
  | "빅맥"
  | "진주고추장버거";

type side = "감자튀김" | "치즈스틱" | "콘솔로우" | "해쉬브라운";

type drinks = "콜라" | "제로콜라" | "사이다" | "제로사이다" | "아메리카노";

type setMenu = {
  main: burger;
  side: side;
  drinks: drinks;
};

const myMacdonald: setMenu = {
  main: "빅맥",
  side: "감자튀김",
  drinks: "제로콜라",
};

//서브웨이

type subway = {
  메인: main;
  빵: bread;
  치즈: cheese;
  야채: vagi[];
  소스: sause[];
};
type main =
  | "안창비프"
  | "안창비프썹픽"
  | "머쉬룸"
  | "머쉬룸썹픽"
  | "이탈리안비엠티";
type bread =
  | "화이트"
  | "하티"
  | "파마산오레가노"
  | "위트"
  | "허니오트"
  | "플랫브레드";
type cheese = "슈레드치즈" | "아메리칸치즈" | "모짜렐라치즈";
type vagi = "양배추" | "아보카도" | "올리브" | "양파" | "토마토";
type sause =
  | "마요네즈"
  | "스위트칠리"
  | "핫칠리"
  | "렌치"
  | "사우스웨스트"
  | "허니머스타드"
  | "사우전아일랜드"
  | "디종홀스래디쉬"
  | "이탈리안드레싱"
  | "마리나라소스";

const order: subway = {
  메인: "안창비프",
  빵: "플랫브레드",
  치즈: "슈레드치즈",
  야채: ["양배추", "아보카도", "올리브", "토마토"],
  소스: ["렌치", "마요네즈"],
};
