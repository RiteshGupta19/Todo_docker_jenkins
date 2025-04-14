import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

 const API_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await fetch(`${API_URL}/todos`);
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } 
  };

  const addTodo = async () => {
    if (!title.trim()) return;
    try {
      await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      setTitle("");
      fetchTodos();
    } catch (error) {
      console.error("Failed to add todo", error);
    }
  };

  const handleUpdateTodo = async (id, updatedTitle) => {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: updatedTitle }),
      });
      const data = await response.json();
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? data : todo))
      );
    } catch (error) {
      console.error("Failed to update todo", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE",
      });
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Failed to delete todo", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={title}
          placeholder="Enter a task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            index={index}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
