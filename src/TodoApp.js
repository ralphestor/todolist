import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { teal } from '@mui/material/colors';
import NewTodoForm from './NewTodoForm';
import Box from '@mui/material/Box';

import Todo from './Todo';




function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);

    function remove(id) {
        setTodos(todos.filter(t => t.id !== id));
    }

    function create(newTodo) {
        setTodos([ ...todos, newTodo ])
    }

    function update(id, updatedTask) {
        const updatedTodos = todos.map( t => {
            if(id === t.id) {
                return { ...t, todo: updatedTask }
            }
            return t;
        })
        setTodos(updatedTodos);
    }

    function toggleComplete(id){
        const updatedTodo = todos.map(t => {
            if(id === t.id) {
                return { ...t, completed: !t.completed }
            }
            return t;
        })
        setTodos(updatedTodo);
    }

    const todoList = todos.map( t => {
        return(
            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                <Todo
                key={t.id}
                id={t.id}
                todo={t.todo}
                completed={t.completed}
                removeTodo={remove}
                toggleTodo={toggleComplete}
                updateTodo={update}
                />
            </Box>
        );
    });

    return (
            <div>
                <AppBar 
                    position="static"
                    style={{ background: teal[900] }}
                >

                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" component="div">
                        TodoApp
                        </Typography>
                    </Toolbar>
                </AppBar>
                <NewTodoForm createTodo={create}/>
                <div>
                    {todoList}
                </div>
            </div>
    );
}

export default TodoApp;