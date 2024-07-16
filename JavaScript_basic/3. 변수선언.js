/* 
  Variable(변수) 선언하기

  1. var - 더이상 쓰지 않는다.
  2. let
  3. const
*/

var name = "코드팩토리";
console.log(name); // 코드팩토리

let ive = "아이브";
console.log(ive); // 아이브

// let과 var로 선언하면 값을 추후 변경할 수 잇다
ive = "안유진";
console.log(ive); // 안유진

const newJeans = "뉴진스";
console.log(newJeans); // 뉴진스
// const로 선언하면 값을 추후 변경할 수 없다
newJeans = "변경불가";
console.log(newJeans); // 오류발생(TypeError)

// 선언과 할당
// 1. 변수를 할당하는 것
// 2. 할당

var name = "코드팩토리";
//  선언       할당

let girlFriend; // 변수 선언만하고, 할당하지않음
console.log(girlFriend); // undefined