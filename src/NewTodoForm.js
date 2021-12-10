import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { teal } from '@mui/material/colors';
import { v4 as uuidv4 } from 'uuid';

const btnStyle = {
    backgroundColor: teal[600],
    margin: "10px 0",
    left: "50%",
    transform: "translateX(-50%)"
}

function NewTodoForm(props) {
    const [todo, setTodo] = useState("");
    
    function handleChange(evt) {
        setTodo(evt.target.value);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        props.createTodo({
            todo: todo,
            id: uuidv4(),
            completed: false
        })
        setTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                >
                    <TextField fullWidth label="New Todo" id="fullWidth" onChange={handleChange} value={todo}/>
                </Box>
                <Button type="submit" variant="contained" style={btnStyle}>Add New Todo</Button>
            </Paper>
        </form>
    );
}

export default NewTodoForm;