// 1. for 반복문
for(let i = 0; i < 10; i++) {
  console.log(i);
} // 0~9
console.log('-------------------');

for(let i = 0; i < 3; i++) {
  for(let j = 3; j > 0; j--){
    console.log(i, j);
  }
}
console.log('-------------------');

// *를 이용해서 6x6의 정사각형을 출력해보자
let square = '';
let side = 6;

for(let i = 0; i < 6; i++){
  for(let j = 0; j < side; j++){
    square += '*';
  }
  square += '\n';
}
console.log(square);
console.log('-------------------');

// for...in반복문
const yuJin = {
  name: '안유진',
  year: 2003,
  group: '아이브',
}

for(let key in yuJin){
  console.log(key); // name year group
}
console.log('-------------------');

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for(let key in iveMembersArray){
  console.log(key); // 0~5 인덱스번호
  console.log(`${key}:${iveMembersArray[key]}`) // 0:안유진 1:가을.......
}
console.log('-------------------');

// for...of반복문
for(let value of iveMembersArray){
  console.log(value); // 안유진 가을 레이...
}

// key, index값을 필요로할때는 for...in문, value값을 필요로할때는 for...of문 이용
console.log('-------------------');



// 2. while 반복문(조건이 참일때 실행된다 = 거짓일때까지)
let number = 0;

while(number < 10){
  number++;
  console.log(`number: ${number} 입니다`); // number: 1~10입니다
}

// do...while문
number = 0;
do{
  number++;
}while(number < 10);

console.log(number);

console.log('-------------------');

// break = 반복문 실행 종료!!
for(let i = 0; i < 10; i++){
  if(i === 5){
    break;
  }
  console.log(i); // 0~4까지만 출력
}
console.log('-------------------');

number = 0;

while(number < 10){
  if(number === 5){
    break;
  }
  number++;
  console.log(number); //1~5
}
console.log('-------------------');



// continue(건너뛰기)
for(let i = 0; i < 10; i++){
  if(i === 5){
    continue; // i가5일때는 건너뛰어라
  }
  console.log(i); // 0 1 2 3 4 6 7 8 9
}
console.log('-------------------');

number = 0;
while(number < 10){
  number++;

  if(number === 5){
    continue;
  }
  console.log(number); 
}

