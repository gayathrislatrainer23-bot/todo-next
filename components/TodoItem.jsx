export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo._id, !todo.completed)}
      />

      <span
        className={`todo-title ${todo.completed ? "completed" : ""}`}
      >
        {todo.title}
      </span>

      <button
        className="btn-edit"
        onClick={() => {
          const newTitle = prompt("Edit todo", todo.title);
          if (newTitle) onEdit(todo._id, newTitle);
        }}
      >
        Edit
      </button>

      <button
        className="btn-delete"
        onClick={() => onDelete(todo._id)}
      >
        X
      </button>
    </div>
  );
}
