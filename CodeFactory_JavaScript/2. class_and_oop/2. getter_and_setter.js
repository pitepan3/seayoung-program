// getter and setter
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  // 1. 데이터를 가공해서 새로운 데이터를 반환할때
  // 2. private한 값을 반환할때
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  set setName(name) {
    this.name = name;
  }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); // IdolModel { name: '안유진', year: 2003 }
console.log(yuJin.nameAndYear); // 안유진-2003

yuJin.setName = '장원영';
console.log(yuJin); // IdolModel { name: '장원영', year: 2003 }

// private
class IdolModel2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2) // IdolModel2 { year: 2003 } #name은 가져오지 못한다
console.log(yuJin2.name); // 안유진  getter를 이용하면 #name을 가져올 수 있다

yuJin2.name = '코드팩토리';
console.log(yuJin2.name); // 코드팩토리   setter를 이용하여 #name 변경 가능(권장 ㄴㄴ)

