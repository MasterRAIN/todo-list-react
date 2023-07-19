import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import { DoneItem } from './DoneItem'

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  const [activeBtn, setActiveBtn] = useState('ToDo')

  const handleBtnClick = (buttonName) => {
    setActiveBtn(buttonName)
  }

  return (
    <>
      <ul className="list">
        {todos.length === 0 && <NoToDo />}
        {todos.map(todo => {
          if (activeBtn === 'ToDo') {
            return (
              <TodoItem 
                {...todo} 
                key={todo.id} 
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            )
          } else if (activeBtn === 'Completed') {
            return (
              <DoneItem 
                {...todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            )
          } 
        })}
      </ul>
      <div className="header">
        <button onClick={() => handleBtnClick('ToDo')} className={`todo-btn ${activeBtn === 'ToDo' ? 'active' : ''}`}>To Do</button>
        <button onClick={() => handleBtnClick('Completed')} className={`completed-btn ${activeBtn === 'Completed' ? 'active' : ''}`}>Completed</button>
      </div>
    </>
  )
}

function NoToDo() {
  return <h4 className="notodos">No to do's</h4>
}