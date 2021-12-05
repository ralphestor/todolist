import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { teal } from '@mui/material/colors';
import NewTodoForm from './NewTodoForm';
import Box from '@mui/material/Box';

import Todo from './Todo';




class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map( t => {
            if(id === t.id) {
                return { ...t, todo: updatedTask }
            }
            return t;
        })
        this.setState({ todos: updatedTodos })
    }

    toggleComplete(id){
        const updatedTodo = this.state.todos.map(t => {
            if(id === t.id) {
                return { ...t, completed: !t.completed}
            }
            return t;
        })
        this.setState({ todos: updatedTodo })
    }


    render() {
    const todos = this.state.todos.map( t => {
        return(
            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                <Todo
                key={t.id}
                id={t.id}
                todo={t.todo}
                completed={t.completed}
                removeTodo={this.remove}
                toggleTodo={this.toggleComplete}
                updateTodo={this.update}
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
                <NewTodoForm createTodo={this.create}/>
                <div>
                    {todos}
                </div>
            </div>
        );
    }
}

export default TodoApp;