// Array Functions
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// push() = 배열 마지막에 아이템 추가
iveMembers.push('코드팩토리'); 
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서', '코드팩토리' ]
// console.log(iveMembers.length); = console.log(iveMembers.push('코드팩토리'));  배열의 길이인 7이 반환된다
console.log('------------------------');

// pop() = 마지막 값을 반환하고 삭제한다
console.log(iveMembers.pop()); // 코드팩토리
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log('------------------------');

// shift() = 첫번째 값을 반환받고 삭제한다
console.log(iveMembers.shift()); // 안유진
console.log(iveMembers); // [ '가을', '레이', '장원영', '리즈', '이서' ]
console.log('------------------------');

// unshift = 맨 처음 값을 추가하고 길이를 반환한다
console.log(iveMembers.unshift('안유진')); // 6
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log('------------------------');

// splice() 첫번째 파라미터부터 시작해서 두번째 파라미터의 수만큼 삭제한다
console.log(iveMembers.splice(0, 3)); // 0번 index값부터 3개의 값을 삭제하고 반환한다 = [ '안유진', '가을', '레이' ]
console.log(iveMembers); // [ '장원영', '리즈', '이서' ]
console.log('------------------------');

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers);

// concat(); = 기존 배열을 변경하는 개념이 아닌, concat('')으로 추가한 새로운 배열을 만든다
console.log(iveMembers.concat('코드팩토리')); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서', '코드팩토리' ]
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log('------------------------');

// slice() = 첫번째 파라미터 index번호 부터 두번째 파라미터 인덱스 번호 전까지 삭제한다(기존 배열을 변경하는것이 아니고 새로운 배열을 만든다)
console.log(iveMembers.slice(0, 3)); // [ '안유진', '가을', '레이' ]
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log('------------------------');

// spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
// ...을 넣으면 펼쳐지고, 넣지않으면 배열 안에 배열이 생긴다
let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3); // [ [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] ]
console.log('------------------------');

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers); // true

// console.log([
//     ...iveMembers,
// ] === iveMembers); // false    ...iveMembers는 왅전히 새로운 array가 생성되기 때문
// console.log('------------------------');

// join() = array값을 string값으로 엮을때 쓰인다
console.log(iveMembers.join()); // 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/')); // 안유진/가을/레이/장원영/리즈/이서
console.log(iveMembers.join(', ')); // 안유진, 가을, 레이, 장원영, 리즈, 이서
console.log('------------------------');

// sort() = 오름차순 정렬 , reverse() = 거꾸로
iveMembers.sort();
console.log(iveMembers); // [ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]
console.log(iveMembers.reverse()); // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers); // [ 1, 9, 7, 5, 3 ]

// a, b를 비교했을때
// 1. a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2. a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3. 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers); // [ 1, 3, 5, 7, 9 ]


numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers); // [ 9, 7, 5, 3, 1 ]
console.log('------------------------');

// map()
console.log(iveMembers.map((x) => x)); // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]
console.log(iveMembers.map((x) => `아이브: ${x}`)); // [ '아이브: 장원영', '아이브: 이서', '아이브: 안유진', '아이브: 리즈', '아이브: 레이', '아이브: 가을' ]
console.log(iveMembers.map((x) => {
    if( x === '안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
})); // [ '장원영', '이서', '아이브: 안유진', '리즈', '레이', '가을' ]
// 기존 array를 변경하지 않고 새로운 array를 반환한다
console.log(iveMembers); // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]
console.log('------------------------');

// filter() = 1개의 파라미터를 받는 함수에서 true일 경우에만 반환해라
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0)); // [ 8, 6 ]
console.log('------------------------');

// find() = 1개의 파라미터를 받는 함수에서 true일 경우에, 첫번째 값만 반환
console.log(numbers.find((x) => x % 2 === 0)); // 8
console.log('------------------------');

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1    = 8값의 index번호인 1이 출력된다
console.log('------------------------');

// reduce()                                 0은 초기값
console.log(numbers.reduce((p, n) => p + n, 0)); // 25
/*
    1. 초기값인 0이 p에 입력된다
    2. numbers어레이의 첫번째 값인 1이 n에 입력된다
    3. p+n 즉, 0+1의 결과값인 1이 반환된다
    4. 3에서 반환한 값 1이 p에 입력된다
    5. 어레이이 두번째 값인 8이 n에 입력된다
    6. p+n 즉, 1+8의 결과값인 9가 반환된다
    7. 6엣 ㅓ반환한 값 9가 p에 입력된다
    8. numbers 리스트의 모든 값들을 다 순회할때까지 반복, 결국 모든 값을 다 더한 25가 반환된다.
*/