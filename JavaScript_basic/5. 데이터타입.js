// Data Types
/*
  여섯개의 Primitive Type과
  한개의 오브젝트 타입이 있다.

  1. Number(숫자)
  2. String(문자열)
  3. Boolean(불리언)
  4. undefined(언디파인드)
  5. null(널)
  6. symbol(심볼)

  7. Object(객체)
    - function array object...
*/

// Number
const age = 32;
console.log(typeof age); // number

const infinity = Infinity;
console.log(typeof infinity); // number
console.log('------------------------')
// String
const codeFactory = "코드팩토리";
console.log(typeof codeFactory); // String
// 줄바꿈 = \n   텝 = \t
console.log('------------------------')
// 템플릿 리터럴 기법
const iveWonYoung = `아이브 '" / / / `
console.log(iveWonYoung); // 아이브 '" / / /  한번에 처리 가능
console.log(typeof iveWonYoung); // string

const groupName = "아이브";
console.log(groupName + " 안유진"); // 아이브 안유진
console.log(`${groupName} 안유진`); // 아이브 안유진
console.log('------------------------')

// Blooean 타입
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue); // boolean

// undefined(사용자가 직접 값을 초기화하지 않았을때 지정되는 값)
let noInit;
console.log(noInit); // undefined
console.log(typeof noInit); // undefined
console.log('------------------------')

// null타입
// JS에서는 개발자가 명시적으로 없는 값으로 초기화할때 사용된다.
let init = null;
console.log(init); // null
console.log(typeof init); // object(버그로 인한 object표기)
console.log('------------------------')

// symbol타입
// 유일무이한 값을 생성할 때 사용된다
// 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다
const test1 = '1';
const test2 = '1';

console.log(test1 === test2); // true
const symbol1 = Symbol('1');
const symbol2 = Symbol('2');
console.log(symbol1 === symbol2); // false
console.log('------------------------')

// Object타입
// Map
// key와 value의 쌍으로 이루어져있다.
const dictionary = {
  red: "빨간색",
  orange: "주항색",
  yellow: "노란색",
};

console.log(dictionary); // { red: '빨간색', orange: '주항색', yellow: '노란색' }
console.log(dictionary['red']); // 빨간색
console.log(typeof dictionary); // object
console.log('------------------------')

// Array타입
// 값을 리스트로 나열 할 수 있는 타입
// 0부터 시작하는 index값을 가진다
const iveMembersArray = [
  "안유진",
  "가을",
  "레이",
  "장원영",
  "리즈",
  "이서",
]
console.log(iveMembersArray); //[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log(iveMembersArray[0]); // 안유진
// 재할당 가능
iveMembersArray[0] = "코드팩토리";
console.log(iveMembersArray[0]); // 코드팩토리
console.log('------------------------')

// static typing = 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다 ( C언어에서 주로 사용 )
// dynamic typing = 변수의 타입을 명시적으로 선언하지 않고 갑에의해 타입을 추론한다.(JS에서 주로 사용)







