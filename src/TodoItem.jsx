export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  if (completed) {
    return null;
  }
  return (
    <>
      <li className={completed === false ? 'todo' : ''}>
        <label>
          <ion-icon class={`check-mark ${completed === false ? 'check-icon' : ''}`} name="checkmark-outline"></ion-icon>
          <input 
            type="checkbox" 
            checked={completed} 
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          <span>{title}</span>
        </label>
        <button className="btn-delete" onClick={() => deleteTodo(id)}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </li>
    </>
  )
}