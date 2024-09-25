// variable
const a = "아메리카노";
const a1 = "라떼";
// 타입 어노테이션
const a2: string = "1";
const a3: boolean = !!"";
const a4: Number[] = [1, 2, 3, 4, 5];
const a5: {
  name: string;
  price: Number;
}[] = [
  { name: "ame", price: 3000 },
  { name: "ame2", price: 4000 },
];

// age, isMan, nation
const a6: {
  age: Number;
  isMan: boolean;
  nation: string;
}[] = [
  {
    age: 30,
    isMan: true,
    nation: "sk",
  },
  {
    age: 40,
    isMan: false,
    nation: "nk",
  },
  {
    age: 50,
    isMan: true,
    nation: "jp",
  },
];
