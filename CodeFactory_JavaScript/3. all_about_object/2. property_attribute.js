/*
  Property Attribute
  
  1. 데이터 프로퍼티 = 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
  2. 엑세서 프로퍼티 = 자체적으로 값을 갖고있지 않지만, 다른 값을 가져오거나
                   설정할때 호출되는 함수로 구성된 프로퍼티
                   예를들면 getter와 setter
*/
const yuJin = {
  name: '안유진',
  year: 2003,
};
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
// { value: 2003, writable: true, enumerable: true, configurable: true }
/*
  1. value - 실제 프로퍼티의 값
  2. writable - 값을 수정할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정할 수 없다.
  3. enumerable - 열거가 가능한지 여부이다. for...in반복문 등을 사용할 . 수있으면 true로 반환된다.
  4. configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
                    false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 
                    단, writable이 true인 경우 값 변경과 writable을 변견하는건 가능하다
*/
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
// { value: '안유진', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptors(yuJin)); // 참고
console.log('-----------------------');

const yuJin2 = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year; // 현재 나이를 출력하는 코드
  },

  set age(age) {
    this.year = new Date().getFullYear() - age; // 출생년도 출력하는 코드
  }
}

console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] }
console.log(yuJin2.age); // 21

yuJin2.age = 32;
console.log(yuJin2.age); // 32
console.log(yuJin2.year); // 1992
console.log('-----------------------');

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
//  { get: [Function: get age], set: [Function: set age], enumerable: true, configurable: true }
console.log('-----------------------');

// Object.defineProperty를 이용하면 
// property_attribute = Object.getOwnPropertyDescriptor 까지 설정할 수 있다.
Object.defineProperty(yuJin2, 'height', {
  value: 172, // value를 제외한 다르 값을 설정하지 않으면 모두 false로 설정된다
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
console.log('-----------------------');

// writable 테스트
yuJin2.height = 180;
console.log(yuJin2); // writable이 true일때 수정이 되는것을 볼수있다
console.log('-----------------------');

Object.defineProperty(yuJin2, 'height', {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
yuJin2.height = 172;
console.log(yuJin2); // 기존값인 180으로 writable: false여서 수정이 되지 않는다
console.log('-----------------------');

// enumerable 테스트(열거할수있는지)
console.log(Object.keys(yuJin2));
for(let key in yuJin2) {
  console.log(key); // yuJin2의 값들이 열거된다
}

Object.defineProperty(yuJin2, 'name', {
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')); // name의 enumerable:false로 설정
console.log('-----------------------');
console.log(Object.keys(yuJin2)); // [ 'year', 'age', 'height' ]  name은 빠져있음을 볼 수있다
for(let key in yuJin2) {
  console.log(key)
}; // name을 제외한 키값들이 열거되는 모습을 볼 수 있다
console.log(yuJin2); // { year: 1992, age: [Getter/Setter], height: 180 }  name제외
console.log(yuJin2.name); // 안유진    으로 남아있지만, enumerable(열거불가)일 뿐이다
console.log('-----------------------');


// Configurable(제정의) 테스트
Object.defineProperty(yuJin2, 'height', {
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); // configurable:false 확인

// Object.defineProperty(yuJin2, 'height', {
//   enumerable: false,
// }); // configurable이 false이기 때문에 enumerable 수정 불가

Object.defineProperty(yuJin2, 'height', {
  value: 172,
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
// enumerable은 수정 불가하지만, vlaue값, writable은 수정 가능하다

Object.defineProperty(yuJin2, 'height', {
  writable: true,
}); // configurable이 false이면 writable: false => true는 불가능하다