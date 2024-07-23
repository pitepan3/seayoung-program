// 2. Destructuring
let person =  {
  name: "noona",
  age: 20
}
// let name = person.name;
// let age = person['age'];
let {name, age} = person; // 상위 코드를 줄여쓴것
console.log(name, age);

console.log('==============');

let array = [1, 2, 3, 4];
let [a, b,...rest] = array;

console.log(a, b); // 1, 2
console.log(rest); // [ 3, 4 ]