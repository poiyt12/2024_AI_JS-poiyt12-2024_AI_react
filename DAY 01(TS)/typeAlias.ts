//typeAlias

type person = { name: string; age: number; gender: string };
type college = { ID: number; grade: number; major: string };
type collegestudent = college & person;

const d1: person = { name: "kim", age: 17, gender: "male" };

const d2: person[] = [
  { name: "kim", age: 17, gender: "male" },
  { name: "park", age: 18, gender: "Female" },
  { name: "choi", age: 19, gender: "Female" },
  { name: "lee", age: 20, gender: "male" },
];

const d3: collegestudent = {
  name: "kim",
  age: 21,
  gender: "male",
  ID: 1234567489,
  grade: 2,
  major: "건축학과",
};

// 예제 빵집

type product = { name: string; price: number };
type meal = { calories: number; category: string };
type dessert = { calories: number; sweetnessLevel: number };

const saltBread: product & meal = {
  name: "소금빵",
  price: 2500,
  calories: 150,
  category: "빵",
};
const eggTart: product & dessert = {
  name: "에그타르트",
  price: 3500,
  calories: 250,
  sweetnessLevel: 3,
};
