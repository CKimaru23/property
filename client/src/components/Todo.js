import React, { useState, useEffect } from "react";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    dueDate: "",
    completed: false,
  });

  useEffect(() => {
    axios.get("/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    axios.post("/todos", newTodo)
      .then((response) => {
        setTodos(todos.concat(response.data));
        setNewTodo({
          title: "",
          description: "",
          category: "",
          priority: "",
          dueDate: "",
          completed: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTodo = (id, updatedTodo) => {
    axios.put(`/todos/${id}`, updatedTodo)
      .then((response) => {
        setTodos(todos.map((todo) => (todo.id === response.data.id ? response.data : todo)));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTodoChange = (event) => {
    const { name, value } = event.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleCompletedToggle = (id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.completed = !updatedTodo.completed;
    updateTodo(id, updatedTodo);
  };

  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={addTodo}>
        <input type="text" name="title" placeholder="Title" value={newTodo.title} onChange={handleTodoChange} />
        <input type="text" name="description" placeholder="Description" value={newTodo.description} onChange={handleTodoChange} />
        <input type="text" name="category" placeholder="Category" value={newTodo.category} onChange={handleTodoChange} />
        <input type="text" name="priority" placeholder="Priority" value={newTodo.priority} onChange={handleTodoChange} />
        <input type="date" name="dueDate" placeholder="Due Date" value={newTodo.dueDate} onChange={handleTodoChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleCompletedToggle(todo.id)} />
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
