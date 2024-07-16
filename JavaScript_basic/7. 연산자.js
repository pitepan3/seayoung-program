// Operators(연산자)

// 산술 연산자 = 사칙연산, 나머지
console.log(10+10); // 20
console.log(10%3); // 10을 3으로 나눈 나머지 = 1
// 괄호를 통해 우선순위 변경 가능
console.log(10 * (10+10)); // 200
console.log('------------------------')


// 증가와 감소
let number = 1;
number ++;
console.log(number); // number = number + 1
number --;
console.log(number); // number = number - 1
console.log('------------------------')

// 연산자의 위치
let result = 1;
console.log(result); // 1

result = number ++;
console.log(result, number); // 1 2 (result = number)가 먼저 실해되고 증가됨

result = ++number;
console.log(result, number); // 3 3 ++가 앞에 있기 떄문에 증가된 수 = result가 된다
console.log('------------------------')

// 숫자 타입이 아닌 타입에 +, -를 사용하면 어떻게 될까
let sample = "99";
console.log(+sample); // 99 (문자열 앞에 +를 붙이면 문자형 => 숫자형)
console.log(typeof +sample); // number

sample = true;
console.log(+sample); // 1 (true는 수자형1, false는 숫자형 -1)
console.log(typeof +sample); // number

sample = "안유진";
console.log(+sample); // NaN(not a number)
console.log('------------------------')


// 할당 연산자(assignment operator)
number = 100;
console.log(number); // 100

number += 10; // number = number + 10
console.log(number); // 110
console.log('------------------------')

// 비교 연산자
// 1. 값의 비교
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(0 == ""); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true == "1"); // true
console.log('------------------------')

console.log(5 != 5); // false
console.log(5 != "5"); // false
console.log(0 != ""); // false
console.log(true != 1); // false
console.log(false != 0); // false
console.log(true != "1"); // false
console.log('------------------------')

// 2. 값과 타입의 비교
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(0 === ""); // false
console.log(true === 1); // false
console.log(false === 0); // false
console.log(true === "1"); // false
console.log('------------------------')

console.log(5 !== 5); //false
console.log(5 !== "5"); // true
console.log(0 !== ""); // true
console.log(true !== 1); // true
console.log(false !== 0); // true
console.log(true !== "1"); // true

