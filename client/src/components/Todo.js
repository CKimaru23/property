import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Message, List, Icon } from 'semantic-ui-react';
import Footer from './Footer';
import {useHistory} from 'react-router-dom'


const Todo = () => {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[category, setCategory] = useState("");
    const[priority, setPriority] = useState("");
    const[due_date, setDueDate] = useState("");
    const [formError, setFormError] = useState(null);
    const [formSuccess, setFormSuccess] = useState(false);

    const [todos, setTodos] = useState([]);
    

    const [editing, setEditing] = useState(false);

    useEffect(() => {
        axios.get("/todos")
        .then((response) => {
        setTodos(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    }, []);

    const deleteTodo = (id) => {
        axios.delete(`/todos/${id}`)
        .then(() => {
            setTodos(todos.filter((todo) => todo.id !== id));
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        axios
          .put(`/todos/${todos.id}`, {
            title,
            description,
            category,
            priority,
            due_date
          })
          .then((response) => {
            console.log(response.data);
            setEditing(false);
          })
          .catch((error) => {
            console.log(error);
          });
    };



    const history = useHistory();

    const handleSubmit = (event) => {
      event.preventDefault();

      // perform form validation
      if (!title || !description || !category || !priority || !due_date) {
        setFormError('Please fill in all fields');
        return;
      }

      // create a new to do list
      const newMessage = {
        title: title,
        description: description,
        category: category,
        priority: priority,
        due_date: due_date
      };

      // save the new to do to the database
      fetch('/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMessage)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setFormSuccess(true);
          
        } 
        // history.push("/home")
        // else {
        //   setFormError(data.message);
        // }
      })
      .catch(error => {
        console.error(error);
        setFormError('Oops, something went wrong');
      });
    };

    const myStyle={
      backgroundImage: 
        "url('https://t.ly/MA-z')",
      height:'100vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: 0.9,
    };

    return (
      <div>
        {editing ? (
        <div>
        <h1>Edit Todo</h1>
          <input
            type="text"
            value={title}
            defaultValue={todos.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
          <input
            type="date"
            value={due_date}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
      <div style={myStyle}>
        <div className="contact-page" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: "https://rb.gy/idlq"}}>
          <Form onSubmit={handleSubmit} error={!!formError} success={formSuccess}>
          <h1>Add Todo</h1>
            <Form.Input label="Title" name="title" value={title} onChange={event => setTitle(event.target.value)} required />
            <Form.Input label="Category" name="category" value={category} onChange={event => setCategory(event.target.value)} required />
            <Form.Input label="Priority" name="priority" value={priority} onChange={event => setPriority(event.target.value)} required />
            <Form.Input type="date" label="Due Date" name="due_date" value={due_date} onChange={event => setDueDate(event.target.value)} required />
            <Form.TextArea label="Description" name="description" type="description" value={description} onChange={event => setDescription(event.target.value)} required />
            {formError && <Message error header="Error" content={formError} />}
            {formSuccess && <Message success header="Success" content="Your message has been sent" />}
            <Button primary type="submit">Send</Button>
          </Form>
        </div>
      </div>
      )}
      <div>
        <h1 style={{textAlign:"center"}}>My To Do List</h1>
         <ul>
            {todos.map((todo) => (
                <List divided verticalAlign='middle'>
                    <List.Item  key={todo.id}>
                        <Icon name='right triangle' />
                        <List.Content>
                            <List.Header>{todo.title}</List.Header>
                            <List.Description>
                                Category: {todo.category} 
                                Priority: {todo.priority} 
                                Due Date: {todo.due_date}

                                <Button onClick={() => handleEdit(todo.id)} floated='right'>Edit</Button>
                                <Button onClick={() => deleteTodo(todo.id)} floated='right'>Delete</Button>
                            
                            </List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            ))}
        </ul>
         </div>
      <Footer/>
      </div>
      
    );
};

export default Todo;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button, Form as SemanticForm, Header, Icon, Message, Label, Grid, Form } from 'semantic-ui-react';

// const Todo = () => {
// const [todos, setTodos] = useState([]);
// const [newTodo, setNewTodo] = useState({
// title: "",
// description: "",
// category: "",
// priority: "",
// due_date: "",
// completed: false,
// });

// const[title, setTitle] = useState("");
// const[description, setDescription] = useState("");
// const[category, setCategory] = useState("");
// const[priority, setPriority] = useState("");
// const[due_date, setDueDate] = useState("");

// // useEffect(() => {
// // axios.get("/todos")
// // .then((response) => {
// // setTodos(response.data);
// // })
// // .catch((error) => {
// // console.log(error);
// // });
// // }, []);

// useEffect(() => {
// fetch("/todos")
// .then(response => response.json())
// .then(data => setTodos(data))
// .catch(error => console.log(error));
// }, []);

// // const addTodo = (event) => {
// // event.preventDefault();
// // axios.post("/todos", newTodo)
// // .then((response) => {
// // setTodos(todos.concat(response.data));
// // setNewTodo({
// // title: "",
// // description: "",
// // category: "",
// // priority: "",
// // due_date: "",
// // completed: false,
// // });
// // })
// // .catch((error) => {
// // console.log(error);
// // });
// // };

// function addTodo() {
// const data = { 
// title: title,
// description: description,
// category: category,
// priority: priority,
// dueDate: dueDate,
// completed: false,
// };
// fetch('/todos', {
// method: 'POST',
// headers: {
// 'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(todo => {
// setTodos([...todos, todo]);
// setTitle('');
// setDescription('');
// setCategory('');
// setPriority('');
// setDueDate('');
// })
// .catch(error => {
// console.error('Error:', error);
// });
// }

// const deleteTodo = (id) => {
// axios.delete(`/todos/${id}`)
// .then(() => {
// setTodos(todos.filter((todo) => todo.id !== id));
// })
// .catch((error) => {
// console.log(error);
// });
// };

// const updateTodo = (id, updatedTodo) => {
// axios.put(`/todos/${id}`, updatedTodo)
// .then((response) => {
// setTodos(todos.map((todo) => (todo.id === response.data.id ? response.data : todo)));
// })
// .catch((error) => {
// console.log(error);
// });
// };

// const handleTodoChange = (event) => {
// const { name, value } = event.target;
// setNewTodo((prevTodo) => ({
// ...prevTodo,
// [name]: value,
// }));
// };

// const handleCompletedToggle = (id) => {
// const updatedTodo = todos.find((todo) => todo.id === id);
// updatedTodo.completed = !updatedTodo.completed;
// updateTodo(id, updatedTodo);
// };

// const myStyle={
// backgroundImage: 
// "url('https://t.ly/MA-z')",
// height:'100vh',
// marginTop:'50px',
// fontSize:'50px',
// backgroundSize: 'cover',
// backgroundRepeat: 'no-repeat',
// // opacity: 0.1,
// };

// return (
// <div style={myStyle}>
// <Grid
// textAlign="center"
// style={{ height: "100vh"}}
// verticalAlign="middle"
// >
// <Grid.Column style={{ maxWidth: 450, marginTop: "50px" }}>
// <Header as="h2" color="blue" textAlign="center" marginTop="50px">
// <Icon name="user" /> Create your To Do List
// </Header>

// <Form size="large" onSubmit={addTodo}>
// <SemanticForm.Input
// fluid
// icon="edit"
// iconPosition="left"
// placeholder="Title"
// name="title"
// id="title"
// autoComplete="off"
// value={newTodo.title}
// onChange={handleTodoChange}
// />

// <SemanticForm.Input
// fluid
// icon="edit"
// iconPosition="left"
// placeholder="Description"
// name="description"
// id="description"
// autoComplete="off"
// value={newTodo.description}
// onChange={handleTodoChange}
// />
// <SemanticForm.Input
// fluid
// icon="edit"
// iconPosition="left"
// placeholder="Category"
// name="category"
// id="category"
// autoComplete="off"
// value={newTodo.category}
// onChange={handleTodoChange}
// />

// <SemanticForm.Input
// fluid
// icon="edit"
// iconPosition="left"
// placeholder="Priority"
// name="priority"
// id="priority"
// autoComplete="off"
// value={newTodo.priority}
// onChange={handleTodoChange}
// />

// <SemanticForm.Input
// fluid
// icon="calendar"
// iconPosition="left"
// placeholder="Due Date"
// name="dueDate"
// id="dueDate"
// type="date"
// autoComplete="off"
// value={newTodo.dueDate}
// onChange={handleTodoChange}
// />
// <Button
// type="submit"
// color="orange"
// fluid
// size="large"
// >
// Add Todo
// </Button>

// {/* <input type="text" name="title" placeholder="Title" value={newTodo.title} onChange={handleTodoChange} /> */}
// {/* <input type="text" name="description" placeholder="Description" value={newTodo.description} onChange={handleTodoChange} /> */}
// {/* <input type="text" name="category" placeholder="Category" value={newTodo.category} onChange={handleTodoChange} /> */}
// {/* <input type="text" name="priority" placeholder="Priority" value={newTodo.priority} onChange={handleTodoChange} /> */}
// {/* <input type="date" name="dueDate" placeholder="Due Date" value={newTodo.dueDate} onChange={handleTodoChange} /> */}
// {/* <button type="submit">Add Todo</button> */}
// </Form>
// <ul>
// {todos.map((todo) => (
// <li key={todo.id}>
// <input type="checkbox" checked={todo.completed} onChange={() => handleCompletedToggle(todo.id)} />
// <span>{todo.title}</span>
// <button onClick={() => deleteTodo(todo.id)}>Delete</button>
// <button>Edit</button>
// </li>
// ))}
// </ul>
// </Grid.Column>
// </Grid>
// </div>
// );
// };

// export default Todo;
