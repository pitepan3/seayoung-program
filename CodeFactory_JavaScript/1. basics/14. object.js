// Object
// key : value pair
let yuJin = {
  name: '안유진',
  group: '아이브',
  dance: function() {
    return `${this.name}이 춤을 춥니다`;
  }
};

console.log(yuJin); // { name: '안유진', group: '아이브', dance: [Function: dance] }
console.log(yuJin.name); // 안유진

const key = 'name';
console.log(yuJin[key]); // 안유진
console.log(yuJin.dance()); // 안유진이 춤을 춥니다

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function(){
    return `${this.name}이 춤을 춥니다.`
  }
}
console.log(yuJin2); // { name: '안유진', group: '아이브', dance: [Function: dance] }
console.log(yuJin2.dance()); // 안유진이 춤을 춥니다.

yuJin2['group'] = '코드팩토리';
console.log(yuJin2); // { name: '안유진', group: '코드팩토리', dance: [Function: dance] }

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2) // 새로운 key값을 넣고 출력하면 새로운 속성이 생긴다

delete yuJin2['englishName']; // 삭제하기
console.log(yuJin2);

// 객체의 특징
/*
  1. const로 선언할 경우 객체 자체를 변경할 수는 없다.
  2. 객체 안의 프로터피나 메서드는 변경할 수 있다.
*/
const wonYoung = {
  name: '장원영',
  group: '아이브',
}
console.log(wonYoung);

// wonYoung = {}; // wonYoung이라는 객체 자체를 건들려고 할 경우 에러가 난다

wonYoung['group'] = '코드팩토리';
console.log(wonYoung); // 객체 안의 프로퍼티 변경 가능

// 모든 키값 다 가져오기
console.log(Object.keys(wonYoung)); // [ 'name', 'group' ]
// 모든 벨류값 다 가져오기
console.log(Object.values(wonYoung)); // [ '장원영', '코드팩토리' ]

const name = '안유진';

const yuJin3 = {
  name, // name: name, 키 벨류가 같은 결우 벨류 작성 생략 가능
};
console.log(yuJin3); // { name: '안유진' }