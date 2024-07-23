// Callback

// function waitAndRun() {
//   setTimeout(() => { // 콜백함수 실행하고 나중에 실행되는 함수
//     console.log('끝');
//   }, 2000);
// }

// waitAndRun();

// function waitAndRun2() {
//   setTimeout(() => {
//     console.log('1번 콜백 끝');
//     setTimeout(() => {
//       console.log('2번 콜백 끝');
//       setTimeout(() => {
//         console.log('3번 콜백 끝');
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }

// waitAndRun2();

// Promise
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('완료');
  }, 2000);
});
// res 아큐먼트는 resolve('완료') 값이 들어가기때문에 console.log(res); // 완료
// timeoutPromise.then((res) => { 
//   console.log('---then---');
//   console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
  setTimeout(() => { // resolvr를 실행하면 then을 실행시키고, reject는 catch실행
    // if(xxx) {
    //   resolve('성공');
    // }else {
    //   reject('에러');
    // }
    // resolve('에러');
    resolve('에러');
  }, seconds * 1000);
});

// getPromise(3).then((res) => {
//   console.log('---first then---')
//   console.log(res);
// })
// .catch((res) => {
//   console.log('---first catch---');
//   console.log(res);
// })
// .finally(() => { // resolve, reject 관계없이 무조건 마지막에 실행되는 코드
//   console.log('---finally---');
// });

Promise.all([ // 모든 Promise를 한번에 실행하는 코드
  getPromise(1),
  getPromise(4),
  getPromise(1),
]).then((res) => {
  console.log(res);
}); // [ '에러', '에러', '에러' ]   가장 늦은 Promise뒤에 동시실행된다 위의 코드는 4초뒤 모두 실행
