/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  return ( // return()안에는 병렬로 태그 2개 이상 기입금지
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>

        <button onClick={() => {
          let copy = [...글제목.sort()];
          글제목변경(copy);
        }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...글제목]; //[...]을 넣어야지 작동을한다(...을 넣지않으면 신규state와 기존state가 같다고 생각하기 때문
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal/>
    </div>
  );
}

function Modal() {
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
