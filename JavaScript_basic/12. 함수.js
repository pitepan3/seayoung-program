// function
// 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서 반환받고싶다면?

console.log((2 * 10 / 2 % 3).toString()); // 1

function calculate() { // 함수 정의
  console.log((2 * 10 / 2 % 3).toString());
}

// calculate(); // 1   함수 호출

function calculate(number){
  console.log((number * 10 / 2 % 3).toString());
}

calculate(4); // 2

// 함수에서 입력받는 값에대한 정의 = Parameter   number
// 실제 입력하는 값 = argument               4

function multiply(x, y){
  console.log(x * y);
}
multiply(2, 4); // 8

function multiply(x, y = 10){
  console.log(x * y);
}
multiply(2, 4); // 8
multiply(2); // 20 default parameter y=20을 지정했기 때문

// 반환받기(return)
function multiply(x, y){
  return x * y;
}
const result1 = multiply(2, 4);
console.log(result1); // 8

const result2 = multiply(4, 5);
console.log(result2); // 20

// 화살표 함수(Arrow function)
const multiply2 = (x, y) => {
  return x * y;
}
console.log(multiply2(3, 4)); // 12

const multiply3 = (x, y) => x * y; // 상단 코드와 같은 코드
console.log(multiply3(4, 5)); // 20

const multiply4 = x => x * 2; // 파라미터가 1개면 소괄호 생략가능
console.log(multiply4(2)); // 4

const multiply5 = x => y => z => `x: ${x} y: ${y} z:${z}`;
console.log(multiply5(2)(5)(7)); // x: 2 y: 5 z:7

function multiply6(x){ // 상단 코드와 같은 함수
  return function(y){
    return function(z){
      return `x: ${x} y: ${y} z:${z}`
    }
  }
}
console.log(multiply6(2)(5)(7)); // x: 2 y: 5 z:7

const multiplyTwo = function(x, y) {
  return x * y;
}
console.log(multiplyTwo(4, 5)); // 20
console.log('-----------------------');

const multiplyThree = function(x, y, z){
  console.log(arguments); // [Arguments] { '0': 4, '1': 5, '2': 6 }
  return x * y * z; // arguments를 이용하면 실제 입력한 값을 볼수있다
}
console.log(multiplyThree(4, 5, 6)); // 120
console.log('-----------------------');

const multiplyAll = function(...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
} // 모든 arguments를 받아서 곱하는 함수

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10)); // 1814400
console.log('-----------------------');

// 즉시실행함수(immediately invoked function)
(function(x, y){
  console.log(x * y)
})(4, 5) // 20

console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true = 함수는 Object이다


