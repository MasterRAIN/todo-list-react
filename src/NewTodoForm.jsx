import { useState } from 'react'

export function NewTodoForm({ onSubmit }) {
    
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)
    
    setNewItem("")
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="task-wrapper">
        <input 
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text" 
          id="task"
          className="input-text"
          placeholder="Enter to do . . ."
        />
        <button className="btn-add"><ion-icon name="add-outline"></ion-icon></button>
      </div>
    </form>
  )
}