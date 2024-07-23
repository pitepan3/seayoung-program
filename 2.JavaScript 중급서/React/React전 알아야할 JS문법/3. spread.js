// spread
let person = {name: "noona", age: 12};

let person2 = {...person}; // 새로운 주소를 갖는, person2에 person을 복사
                          // let person2 = {...person, name: "hoon"} 처럼 내용 변경, 추가 가능
let person3 = person; // person의 주소값만 참고하는것
console.log(person2);
console.log(person3);

console.log(person === person2); // false
console.log(person === person3); // true

let a = [1, 2];
let b = [...a, 3];
console.log(b); // [1, 2, 3];

let c = [...a, ...b];
console.log(c); // [1, 2, 1, 2, 3];