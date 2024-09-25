// |(union) : or , 합집합
const b: String | Number = "1";

// 배열이면서 name[문자], age[문자 or 숫자]

const c: { name: String; age: String | Number }[] = [
  { name: "kim", age: 17 },
  { name: "park", age: "17" },
  { name: "choi", age: 17 },
];

// &(intersection) : [and]
// const c2: String & Number = "1"; // never 타입 (두가지 문법은 동시에 될 수 없다.)
const c2: { name: string } & { age: number } = { name: "choi", age: 17 };

const c3: any = 1; // any : 뭐든지 가능

const c4: (x: string) => string = (x) => "${x} 맛 아이스크림";

const c5: (x: number) => number = (x) => x ** 2;
