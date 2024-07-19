// Imutable Object
const yuJin = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
}

console.log(yuJin)

// Extensible(확장 가능여부)
console.log(Object.isExtensible(yuJin)); // true 확장가능

yuJin['position'] = 'vocal';
console.log(yuJin) // position: 'vocal' 추가

Object.preventExtensions(yuJin); // Object.preventExtensions = Extensible을 false로
console.log(Object.isExtensible(yuJin));  // false

yuJin['groupName'] = '아이브';
console.log(yuJin); // groupName 추가 불가능
console.log('-------------');

delete yuJin['position'];
console.log(yuJin); // 추가는 안되지만 삭제는 가능하다
console.log('-------------');

// Seal(봉인여부)
const yuJin2 = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
}
console.log(yuJin2);

console.log(Object.isSealed(yuJin2)); // false

Object.seal(yuJin2); // 봉인하는 메서드
console.log(Object.isSealed(yuJin2)); // true

yuJin2['groupName'] = '아이브';
console.log(yuJin2); // Sealed(봉인)되었기 때문에 groupName 추가 불가능

delete yuJin2['name'];
console.log(yuJin2); // Sealed되어있으면 삭제도 불가능
console.log('-------------');

Object.defineProperty(yuJin2, 'name', {
  writable: false,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')); 
// seal되어있어도 property attribute 변경 가능, configurable이 false가 된다
console.log('-------------');

// Freezed(가장 강력한 동결): 읽기 외에 모든 기능을 불가능하게 만든다
const yuJin3 = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
}
console.log(Object.isFrozen(yuJin3)); // false
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3)); // true

yuJin3['groupName'] = '아이브';
console.log(yuJin3); // groupName 추가 불가능

delete yuJin3['name'];
console.log(yuJin3); // name 삭제 불가능
console.log('-------------');

// Object.defineProperty(yuJin3, 'name', {
//   value: '코드팩토리',
// }) // freez되어있으면 property attribute도 변경 불가능
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'))
// enumerable(열거가능) 외에 모든 기능 false
console.log('-------------');

const yuJin4 = {
  name: '안유진',
  year: 2003,
  wonYoung: {
    name: '장원영',
    year: 2002,
  },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4)); // true
console.log(Object.isFrozen(yuJin4['wonYoung'])); // false
// 상의 오브젝트가 freeze되어도 하위 오브젝트는 freeze는 아니다