import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { teal } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            todo: this.props.todo
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.editToggle = this.editToggle.bind(this)
        this.handleEditChange = this.handleEditChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleRemove(){
        this.props.removeTodo(this.props.id);
    }
    handleToggle(){
        this.props.toggleTodo(this.props.id);
    }
    editToggle(){
        this.setState({isEditing: !this.state.isEditing, todo: this.props.todo});
    }
    handleEditChange(evt){
        this.setState({
            todo: evt.target.value
        })
    }
    handleUpdate(evt) {
        evt.preventDefault();git 
        this.props.updateTodo(this.props.id, this.state.todo);
        this.setState({ isEditing: false });
    }


    render() {
        let result;
        
        if(this.state.isEditing) {
            result = (
                <form onSubmit={this.handleUpdate}>
                    <TextField fullWidth label="Edit Todo" id="fullWidth" defaultValue={this.props.todo} onChange={this.handleEditChange}/>
                    <Stack direction="row" spacing={1} sx={{ display: "flex", justifyContent: "center"}}>
                        <IconButton 
                            type="submit"
                            aria-label="edit"
                            sx= {{
                                color: "#6baa6b"
                            }}
                        >
                            <CheckCircleIcon 
                                sx= {{
                                    width: "30px",
                                    height: "30px"
                                }}
                            />
                        </IconButton>
                        <IconButton 
                            onClick={this.editToggle}
                            aria-label="cancel"
                            sx= {{
                                color: "#e25555"
                            }}
                        >
                            <CancelIcon
                                sx= {{
                                    width: "30px",
                                    height: "30px"
                                }}
                            />
                        </IconButton>
                    </Stack>
                </form>
            )
        } else {
            result = (
                <Grid 
                    container 
                    wrap="nowrap" 
                    spacing={2}
                    className={this.props.completed ? "completed" : ""}
                >
                    <Grid item xs={1.5}>
                        <Checkbox
                            sx={{
                            color: teal[800],
                            '&.Mui-checked': {
                                color: teal[600],
                            },
                            }}
                            onClick={this.handleToggle}
                            checked={this.props.completed ? true : false}
                        />
                    </Grid>
                    <Grid item zeroMinWidth  className="textContain" xs={7.5}>
                        <Typography noWrap>
                            {this.props.todo}
                        </Typography>
                    </Grid>
                    <Grid item zeroMinWidth xs={1.5}>
                        <IconButton aria-label='Edit' onClick={this.editToggle}>
                            <EditIcon />
                        </IconButton>
                    </Grid>
                    <Grid item zeroMinWidth xs={1.5}>
                        <IconButton aria-label='Delete' onClick={this.handleRemove}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            )
        }
    



        return (
            <div>
                <Paper 
                    sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }} 
                >
                    {result}
                </Paper>
            </div>
        );
    }
}

export default Todo;