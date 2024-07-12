const fs = require('fs');
const filename = 'example.txt'; // 읽고자 하는 파일의 이름

fs.readFile(filename, (err, content) => {
  // 파일을 읽는 작업이 완료되면 이 콜백 함수가 호출됩니다.
  if (err) {
    // 파일을 읽는 도중 오류가 발생하면 오류를 던집니다.
    throw err;
  }
  // 파일을 성공적으로 읽으면 파일의 내용을 출력합니다.
  console.log(content.toString());
});

// 파일 읽기를 기다리는 동안 여기의 코드가 실행됩니다.
console.log('파일을 읽는 중...');