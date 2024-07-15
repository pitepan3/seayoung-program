import React, { useState } from "react";


function TodoWriteForm({newTodoTitle, setNewTodoTitle, addTodo}) {
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

function TodoListItem({todo, todos, index, setTodos}) {
  
  const removeTodo = () => {
    const newTodos = todos.filter((_, _index) => index != _index);
    setTodos(newTodos);
  }

  return(
    <li>
      {index + 1}.
      &nbsp;
      {todo}
      &nbsp;
      <button onClick={removeTodo}>삭제</button>
    </li>
  )
}

function TodoList({todos, setTodos}) {
  return(
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoListItem key={index} index={index} 
          todo={todo} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
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
      <TodoWriteForm newTodoTitle={newTodoTitle} 
      setNewTodoTitle={setNewTodoTitle} addTodo={addTodo}/>
      
      <hr />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}




export default App;
