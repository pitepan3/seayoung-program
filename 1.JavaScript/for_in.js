const arr = ["바나나", "사과", "딸기", "파인애플"];

for(const key in arr) {
  const a = arr[key];
  alert(a);
  console.log(key); // 0 1 2 3 출력     key = 배열의 인덱스 번호
}