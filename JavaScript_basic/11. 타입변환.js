// 타입변환(Type Conversion)

// 1. 명시적 변환
// 2. 암묵적 변환

let age = 32;
// 명시적
let stringAge = age.toString(); // String으로 타입변환
console.log(typeof stringAge, stringAge)

// 암묵적 => 권장되지 않는다
let test = age + '';
console.log(typeof test, test)
console.log('-------------------');

// 명시적 변환 몇가지 더 배우기
// 문자형으로 변환
console.log(typeof (99).toString(), (99).toString()); // string 99
console.log(typeof (true).toString(), (true).toString()); // string true
console.log(typeof (Infinity).toString(), (Infinity).toString()); // string Infinity
console.log('-------------------');

// 숫자형으로 변환
console.log(typeof parseInt('0'), parseInt('0')); // number 0
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // number 0.99
console.log(typeof +'1', +'1'); // number 1
console.log('-------------------');

// Boolean 타타입
console.log(!!'x'); // true    
console.log(!!''); // false    빈문자열 = false
console.log(!!0); // false     0 = false, 1 = true
console.log(!!'0'); // true
console.log(!!'false'); // true
console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null); // false

console.log(!!{}); // true        object값, array갑은 불리언값에서 트루이다
console.log(!![]); // true




