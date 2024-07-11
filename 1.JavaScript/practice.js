// 함수를 반환하는 함수
const add = (x) => (y) => x + y;
// 함수를 매개변수로 받는 함수
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
add(1, 2)