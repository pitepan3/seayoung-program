/**
 * Closure
 * 
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.
 * = 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다
 */
function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber();
}
// console.log(getNumber()); // 5

function getNumber() {
  var number = 5;
  
  function innerGetNumber() {
    return number;
  }
  return innerGetNumber;
}

const runner = getNumber();

console.log(runner); // [Function: innerGetNumber];
console.log(runner()); // 5
// runner(하위함수)를 실행한 시점 = getNumber(상위함수)가 이미 실행되고 난 이후
// == 상위함수가 callstack에서 사라지고, 하위함수가 실행된다 = 상위함수보다 하위함수가 더 오래 살아남는다
console.log('--------------------');

// closure는 왜쓰는가
// 1. 데이터 캐싱
function cacheFunction() {
  // 아래 계싼은 매우 오래걸린다는 가정을 했을때
  var number = 10 * 10;

  function innerCacheFunction(newNumb) {
    return number * newNumb;
  }

  return innerCacheFunction;
}
// 매우 오래걸린다는 가정인 계산식을 아래 코드 한줄로 딱 한번만 했고, var number라는 값을 closure에서 기억을
// 해서 바로바로 가져다 쓸 수 있다는 장점이 있다 (효율적이다)
const runner2 = cacheFunction();
console.log(runner2(10)); // 1000
console.log(runner2(20)); // 2000

// 2.
function cacheFunction2() {
  var number = 99;

  function increment() {
    number ++;
    return number;
  }

  return increment;
}
const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101
// 외부에서 number값을 기억할수는 없지만 increment를 통해 가져다쓸수있다

// 3. 정보 은닉
function Idol(name, year) {
  this.name = name;
  var _year = year;

  this.sayNameAndYear = function() {
    reuturn `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
  }
}
const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear()); // 안녕하세요 저는 안유진 입니다. 2003에 태어났습니다

console.log(yuJin.name); // 안유진
console.log(yuJin._year); // undefined
// this객체를 사용하지 않았고, 생성자 함수만 사용했기때문에 함수 안에서의 사용은 가능하지만,
// 외부에서 가져다 볼 수는 없다.