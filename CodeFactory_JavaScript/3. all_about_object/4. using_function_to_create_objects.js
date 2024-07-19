// Using function to create objects
function IdolModel(name, year) {
  if(!new.target) {
    return new IdolModel(name, year);
  }
  this.name = name;
  this.year = year;
  
  this.dance = function() {
    return `${this.name}이 춤을 춥니다.`
  }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// console.log(yuJin.dance());
const yuJin2 = IdolModel('안유진', 2003); // new키워드가 꼭 필요하다
console.log(yuJin2); // undefined
// console.log(global.name); // 안유진
console.log('-------------------------');

const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
}
const yuJin3 = new IdolModelArrow('안유진', 2003);
// 화살표 함수에서는 new키워드를 사용할 수 없다