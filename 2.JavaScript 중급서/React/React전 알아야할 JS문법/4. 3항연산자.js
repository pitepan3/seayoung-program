// 삼항연산자
let person = null;

if(person) {
  console.log(person.name);
}else {
  console.log("there is no person");
} // there is no person

// React에서 사용하면 상단 코드와 같다
console.log(person?person.name:"there is no person");
