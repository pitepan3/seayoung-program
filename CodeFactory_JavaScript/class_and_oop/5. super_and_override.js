// Super and Override

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name} 입니다.`
  }
}

class FemaleIdolModel extends IdolModel {
  // 노래, 춤
  part;

  constructor(name, year, part) {
    super(name, year); // 부모클래스를 의미한다 = IdolModel(name, year)
    this.part = part;
  }

  sayHello() {
    // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`
    return `${super.sayHello()} ${this.part}를 맡고있습니다.`
  }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello()); // 안녕하세요 장원영 입니다.
console.log(yuJin.sayHello()); // 안녕하세요 안유진 입니다. 보컬를 맡고있습니다.