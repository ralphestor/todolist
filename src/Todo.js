import React, { useState } from 'react';
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

function Todo(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [todo, setTodo] = useState(props.todo);

    function handleRemove(){
        props.removeTodo(props.id);
    }
    function handleToggle(){
        props.toggleTodo(props.id);
    }
    function editToggle(){
        setIsEditing(!isEditing);
        setTodo(props.todo);
    }
    function handleEditChange(evt){
        setTodo(evt.target.value);
    }
    function handleUpdate(evt) {
        evt.preventDefault(); 
        props.updateTodo(props.id, todo);
        setIsEditing(!isEditing);
    }


    let result; 
        
    if(isEditing) {
        result = (
            <form onSubmit={handleUpdate}>
                <TextField fullWidth label="Edit Todo" id="fullWidth" defaultValue={props.todo} onChange={handleEditChange}/>
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
                        onClick={editToggle}
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
                className={props.completed ? "completed" : ""}
            >
                <Grid item xs={1.5}>
                    <Checkbox
                        sx={{
                        color: teal[800],
                        '&.Mui-checked': {
                            color: teal[600],
                        },
                        }}
                        onClick={handleToggle}
                        checked={props.completed ? true : false}
                    />
                </Grid>
                <Grid item zeroMinWidth  className="textContain" xs={7.5}>
                    <Typography noWrap>
                        {props.todo}
                    </Typography>
                </Grid>
                <Grid item zeroMinWidth xs={1.5}>
                    <IconButton aria-label='Edit' onClick={editToggle}>
                        <EditIcon />
                    </IconButton>
                </Grid>
                <Grid item zeroMinWidth xs={1.5}>
                    <IconButton aria-label='Delete' onClick={handleRemove}>
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

export default Todo;