import React, { Component } from 'react';
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

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = { 
            task: ''
         }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            task : evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({
            todo: this.state.task,
            id: uuidv4(),
            completed: false
        })
        this.setState({ 
            task: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                    <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    >
                        <TextField fullWidth label="New Todo" id="fullWidth" onChange={this.handleChange} value={this.state.task}/>
                    </Box>
                    <Button type="submit" variant="contained" style={btnStyle}>Add New Todo</Button>
                </Paper>
            </form>
        );
    }
}

export default NewTodoForm;