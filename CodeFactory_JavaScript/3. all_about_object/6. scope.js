// Scope
var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}
// levelOne(); // 20

function levelOne() {
  var numberOne = 40;
  console.log(numberOne);
}
// levelOne(); // 40

// console.log(numberOne); // 20

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo : ${numberTwo}`);
    console.log(`levelTwo numberOne : ${numberOne}`);
  }

  levelTwo();
  console.log(`leverOne numberOne : ${numberOne}`);
}

levelOne();
console.log(numberOne); // 20
// console.log(numberTwo); // 하위스코프에 접근할 수 없다
console.log('----------------------');

// Lexical Scope(선언된 위치가 상위 스코프를 정한다)
// Dynamic Scope(실행한 위치가 상위 스코프를 정한다)

// Lexical Scope 예시
var numberThree = 3;

function functionOne() {
  var numberThree = 100;

  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}

functionOne(); // global scope에서 numberThree를 가져와서 3
console.log('----------------------');

var i = 999;

for(var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope : ${i}`); // 0~9, i in global scope : 10
// var를 사용하면 global스코프에 영향이 끼친다
console.log('----------------------');

i = 999;
// block level scope
for(let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope: ${i}`); // 0~9, i in global scope : 999
// let, const를 사용하면 global scope에 영향을 끼치지 않는다
console.log('----------------------');

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와, 블록 레벨 스코프를 만들어낸다
 */