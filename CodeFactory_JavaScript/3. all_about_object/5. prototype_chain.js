// Prototype
const testObj = {};

// (언더스코어 2개) __proto__는 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__); // [Object: null prototype] {}

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype); // {}  숨겨져있는 값이 있다

console.dir(IdolModel.prototype, {
  showHidden: true, // 숨겨진 값을 보이게 하는 코드
});

// circular reference (서로가 서로를 참조하는)
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true
console.log('--------------------------');

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__); // {}
console.log(yuJin.__proto__ === IdolModel.prototype); // true

console.log(testObj.__proto__ === Object.prototype); // true
console.log('--------------------------');

console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true
// 모든 값들의 프로토타입은 Object.prototype을 가르킨다(Object.prototype이 최상위다)
console.log('--------------------------');

console.log(yuJin.toString()); // object Object
console.log(Object.prototype.toString()); // object Object
// yuJin에서 toString()을 정의한적은 없지만, Object.prototype안에 toString이 있기 때문에
// Object.prototype에게서 상속받아 toStirng()을 사용 가능하게 된것이다
console.log('--------------------------');

function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function() {
    return `${this.name}이 인사를 합니다.`
  }
}
const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false

console.log(yuJin2.hasOwnProperty('sayHello')); // true = yuJin2의 고유의 프로퍼티이다

function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel3.prototype.sayHello = function() {
  return `${this.name}이 인사를 합니다.`;
} // IdolModel3에 직접 sayHello()함수를 넣지않고 IdolModel3.prototype에 넣어줌으로써
// sayHello()함수는 상속이 되어서 실행이 가능하게 된다

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello); // true
// sayHello()함수를 IdolModel3.prototype에 의해 상속받았기 때문에 한곳에서 받는 상황이라 true

console.log(yuJin3.hasOwnProperty('sayHello')); // false yuJin3에서 선언된게 아니다
// IdolModel3.prototype에게서 상속받은 sayHello()함수이기에 false이다.

/*
  결론: IdolModel함수에서 뻗어나온 yuJin, wonYoung이 있다.
  IdolModel함수의 부모?인 IdolModel.prototype이 있다.
  yuJin,wonYoung상위에 IdolModel상위에 IdolModel.prototype이 있는것이다.
  때문에 yuJin, wonYoung에 sayHello()함수는 IdolModel이 아닌
  더 상위부모인 IdolModel.prototype에게서 상속받은 것이다
*/
console.log('--------------------------');

IdolModel3.sayStaticHello = function() {
  return '안녕하세요 저는 static 메서드 입니다';
}
console.log(IdolModel3.sayStaticHello()); // 안녕하세요 저는 static 메서드 입니다
console.log('--------------------------');

// Overriding
function IdolModel4(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function() {
    return '안녕하세요 저는 인스턴스 메서드입니다.';
  } // Overriding 덮어씌우기
}
IdolModel4.prototype.sayHello = function() {
  return '안녕하세요 저는 프로토타입 메서드입니다.';
}

const yuJin4 = new IdolModel4('안유진', 2003);
console.log(yuJin4.sayHello()); // 안녕하세요 저는 인스턴스 메서드입니다.
console.log('--------------------------');

/*
  getPrototypeOf, setPrototypeOf

  인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
*/
function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}
IdolModel.prototype.sayHello = function() {
  return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function() {
    return `${this.name}가 춤을 춥니다.`;
  }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__); // { sayHello: [Function (anonymous)] }
console.log(gaEul.__proto__ === IdolModel.prototype); // true
// getPrototypeOf(x) = x의 __proto__ 값을 가져온다
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true

console.log(gaEul.sayHello());
console.log(ray.dance());
// console.log(ray.sayHello()); // 상속받지 않은 함수여서 실행 불가능
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // true

Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello()); 
// setPrototypeOf로 IdolModel을 상속받아서 가능해지고, ray.constructor도 IdolModel로 변경되었다
console.log(ray.constructor === FemaleIdolModel); // false
console.log(ray.constructor === IdolModel); // true
console.log(gaEul.constructor === IdolModel); // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false

FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true