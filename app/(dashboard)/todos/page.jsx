"use client";

import { useEffect, useState } from "react";
import TodoItem from "@/components/TodoItem";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const loadTodos = async () => {
    const res = await fetch("/api/todos");
    setTodos(await res.json());
  };

  const addTodo = async () => {
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    loadTodos();
  };

  const toggleTodo = async (id, completed) => {
    await fetch("/api/todos", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, completed }),
    });
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`/api/todos?id=${id}`, { method: "DELETE" });
    loadTodos();
  };
    const editTodo = async (id,newTitle) => {
      console.log('hai')
    await fetch(`/api/todos`,
       {
         method: "PUT" ,
           headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, newTitle })
       }
      )
    loadTodos();
  };



  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="todo-container">
      <div  className="todo-input">

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button className="btn-add" onClick={addTodo}>Add</button>
      </div>

      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit = {editTodo}
        />
      ))}
      
    </div>
  );
}
