import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };


  return (
    <div className="App">
     
     <Typography variant="h4" gutterBottom>
        To-Do List
      </Typography>
      <div className="task-form">
        <TextField
          label="Task"
          variant="outlined"
          value={taskText}
          onChange={handleInputChange}
          fullWidth
    

        />
        <Button variant="contained" onClick={handleAddTask}>
          Add
        </Button>
      </div>
      <List>
      {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
            <Button variant="outlined" onClick={() => handleDeleteTask(index)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
