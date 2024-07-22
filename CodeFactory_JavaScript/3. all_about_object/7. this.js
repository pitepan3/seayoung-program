/**
 * this
 * 
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가된다. **
 * 
 * 하지만 this키워드는 바인딩이 객체가 생성되는 시점에 결정된다*****
 */
function testFunction() {
  return this;
}
console.log(testFunction());
console.log(testFunction() === global); // true
console.log('----------------------');

const yuJin = {
  name: '안유진',
  year: 2003,
  sayHello: function() {
    return `안녕하세요 저는 ${this.name} 입니다.`;
  },
}
console.log(yuJin.sayHello());
console.log('----------------------');

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function() {
    return `안녕하세요 저는 ${this.name} 입니다.`;
  }
}

const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello());
console.log('----------------------');

Person.prototype.dance = function() {
  function dance2() {
    return `${this.name}이 춤을춥니다.`;
  }
  return dance2();
}
console.log(yuJin2.dance()); // undefined이 춤을 춥니다
// 최상위 객체 외의 위치에 this를 호출하면 global this에 맵핑되게 때문에(최상위에 this는 선언된적잉 없음)
console.log('----------------------');

/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면 된다
 * 
 * 1. 일반 함수 호출할때는 this가 최상의 객체 (global or window)를 가르킨다.
 * 2. 메서드로 호출할때는 호출된 객체를 가르킨다
 * 3. new키워드를 사용해서 객체를 생성했을땐 객체를 가르킨다
 */

/**
 * 예상하는, 원하는 this값으로 this를 맵핑하는 방법
 * 
 * 1. apply()
 * 2. call()
 * 3. bind()
 */
function returnName() {
  return this.name;
}
console.log(returnName()); // 여기서 this는 1번인 global

const yuJin3 = {
  name: '안유진',
}
// returnName에 this를 yuJin3에 맵핑하고싶다면
console.log(returnName.call(yuJin3)); // 안유진
console.log(returnName.apply(yuJin3)); // 안유진
console.log('----------------------');

/**
 * 1. call => 컴마를 기반으로 아규먼트를 순서대로 넘겨주고 (바로실행)
 * 2. apply => 아규먼트를 리스트로 입력해야한다. (바로실행)
 */
function multiply(x, y, z) {
  return `${this.name} / 결과값 : ${ x * y * z }`;
}
console.log(multiply.call(yuJin, 3, 4, 5)); // 안유진 / 결과값 : 60
console.log(multiply.apply(yuJin3, [3, 4, 5])); // 안유진 / 결과값 : 60
console.log('----------------------');

/**
 * 3. bind() (나중에 실행)
 */
const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc); // [Function: bound multiply];
                        // laterFunc는 multiply라는 함수이고, bound(bind되었다라는 과거형)
console.log(laterFunc()); // 안유진 / 결과값 : 60

