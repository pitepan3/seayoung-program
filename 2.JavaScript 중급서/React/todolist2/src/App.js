import React, { useState } from "react";


function TodoWightForm({newTodoTitle, setNewTodoTitle, addTodo}) {
  return(
    <div>
      <input type="text" placeholder="새 할일을 입력해주세요"
      value={newTodoTitle}
      onChange={(e) => setNewTodoTitle(e.target.value)} />
      &nbsp;
      <button onClick={addTodo}>할 일 추가</button>
    </div>
  )
}


function App() {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const[todos, setTodos] = useState([]);

  const addTodo = () => {
    if(newTodoTitle.trim().length == 0) return; //trim() = 양옆 공백 제거

    setTodos([...todos, newTodoTitle.trim()]);
    setNewTodoTitle('');
  }

  return(
    <div>
      <TodoWightForm newTodoTitle={newTodoTitle} 
      setNewTodoTitle={setNewTodoTitle} addTodo={addTodo}/>
      
      <hr />

      <div>
        {JSON.stringify(todos)}
      </div>
    </div>
  )
}




export default App;
