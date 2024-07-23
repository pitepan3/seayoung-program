// Async theory
// function longWork() {
//   const now = new Date();

//   /**
//    * milliseconds since epoch
//    * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//    * 밀리초로 반환한다
//    */
//   const milliseconds = now.getTime();
//   const afterTwoSeconds = milliseconds + 2 * 1000;

//   while(new Date().getTime() < afterTwoSeconds) {
//     // 2초동안 하고싶은 작업
//   }

//   console.log('완료');
// }

// console.log('Hello');
// longWork();
// console.log('World');
// 위는 동기 프로그래밍 예시
// Hello출력 , 2초동안 아무것도 못하고 longWork(), World출력

// 비동기 프로그래밍 예시

function longWork() {
  setTimeout(() => {
    console.log('완료');
  }, 2000);
}
console.log('Hello');
longWork();
console.log('World');
// 위의 코드를 비동기 프로그래밍으로 바꿈
// 'Hello', 'World'출력, 2초뒤 '완료' 출력