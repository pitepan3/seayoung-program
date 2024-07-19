/*
  try...catch (에러잡기)
  1. 발생시킬때 => 던진다고한다. (throw)
  2. 명시적으로 인지할때 => 잡는다고 한다. (catch)
*/
function runner() {
  try{
    console.log('hello');

    // throw new Error('큰 문제가 생겼습니다');
  
    console.log('Code Factory');
  }catch(e){ // 에러를 던지면 catch문이 실행된다
    console.log('---catch---');
    console.log(e);
  } finally { // try에서 에러가 나든 안나든 실행되는 코드(선택적 사용 가능)
    console.log('---finally---');
  }
}
runner(); // hello 이후 에러발생