/*
  클래스의 정의 = 정보를 일반화해서 정리하는 방법이다!! -코드팩토리
  클래스의 정의 = 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한
               변수와 메소드(함수)를 정의하는 일종의 틀이다 -Wikipedia
  Class Keyword
*/
class IdolModel { 
  name; // name; year; 생략 가능 but 권하지 않는다.
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  
  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`
  }
}

// cunstructor = 생성자

const yuJin = new IdolModel('안유진', 2003); // 안유진, 2003 = this.name, this.year
console.log(yuJin); // IdolModel { name: '안유진', year: 2003 }
// constructor를 이용하면 여러개의 인스턴스를 찍어낼 수 있다
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul); // IdolModel { name: '가을', year: 2002 }

// 객체처럼 사용할 수 있다
console.log(yuJin.name); // 안유진
console.log(yuJin.year); // 2003

console.log(yuJin.sayName()); // 안녕하세요 저는 안유진입니다.
console.log(gaeul.sayName()); // 안녕하세요 저는 가을입니다
console.log('------------------');

// class는 함수이다!!
console.log(typeof IdolModel); // function
console.log(typeof yuJin); // object

