<<<<<<< HEAD

import { Container, Button, InputGroup, Form, Row, Col } from 'react-bootstrap';
import Task from './Task';
import React, { useState } from 'react';
import ConfirmDialog from "./ConfirmDialog";
import DeleteSelected from "./deleteSelected/DeleteSelected";
import styles from "./todo.module.css";






function Todolist () {
    const[tasks, setTasks]=useState([]);
    const[newTaskTitle, setNewTaskTitle]=useState("");
    const[selectedTasks, setSelectedTasks]=useState(new Set());
    const [taskToDelete, setTaskToDelete] = useState(null);
      
    
    
    
    const handleInputChange = (event) => {

        setNewTaskTitle(event.target.value); 
        
    };

    const handleInputKeyDown = (event) => {
        if (event.code === 'Enter') {
            addNewTask();
        }
    };

    const addNewTask = () => {
        const trimmedTitle = newTaskTitle.trim();
        if (!trimmedTitle) {
            return;
        }
        const apiUrl = "http://localhost:3001/task";
        const newTask = {
            title: trimmedTitle,
        };
        fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
          })
            .then((result) => result.json())
            .then((task) => {
              const tasksCopy = [...tasks];
              tasksCopy.push(task);
              setTasks(tasksCopy);
              setNewTaskTitle("");
            });
    };



    const onTaskDelete = (taskId) => {
        
        const newTasks = tasks.filter((task) => task._id !== taskId);
        setTasks(newTasks);
=======
import { Component } from 'react';
import { Container, Button, InputGroup, Form, Row, Col } from 'react-bootstrap';
import { idGenerator } from "../utils/helpers";
import Task from './Task';
import styles from './todo.module.css';

class Todolist extends Component {
    state = {
        tasks: [],
        newTaskTitle: "",
        selectedTasks: new Set(),
    };
    handleInputChange = (event) => {

        const newTaskTitle = event.target.value;
        this.setState({
            newTaskTitle,
        });
    };
    handleInputKeyDown = (event) => {
        if (event.code === 'Enter') {
            this.addNewTask();
        }
    };
    addNewTask = () => {
        const trimmedTitle = this.state.newTaskTitle.trim();
        if (!trimmedTitle) {
            return;
        }
        const newTask = {
            id: idGenerator(),
            title: trimmedTitle,
        };
        const tasks = [...this.state.tasks];
        tasks.push(newTask);
        this.setState({
            tasks,
            newTaskTitle: ''
        });
    };
    onTaskDelete = (taskId) => {
        const {selectedTasks, tasks} = this.state;
        const newTasks = tasks.filter(task => task.id !== taskId);
        const newState = {tasks: newTasks};
>>>>>>> 250e9a40f138269cdf9bae5e2a1462f7c9ff3bc4
    
        if(selectedTasks.has(taskId)){
          const newSelectedTasks = new Set(selectedTasks);
          newSelectedTasks.delete(taskId);
<<<<<<< HEAD
          setSelectedTasks(newSelectedTasks);
        }
        
      };

      const onTaskSelect = (taskId)=>{
        const selectedTasksCopy  = new Set(selectedTasks);
        if(selectedTasksCopy.has(taskId)){
            selectedTasksCopy.delete(taskId);
        }
        else {
            selectedTasksCopy.add(taskId);
        }
        setSelectedTasks(selectedTasksCopy);
      };

      const deleteSelectedTasks = ()=>{
        const newTasks = [];
        tasks.forEach((task)=>{
            if(!selectedTasks.has(task._id)){
                newTasks.push(task);
            }
        });

        setTasks(newTasks);
        setSelectedTasks(new Set());
      };
      const isAddNewTaskButtonDisabled = !newTaskTitle.trim();
      
    return (
        <Container>
            
            <Row className="justify-content-center" >
                <Col xs='12' sm='8' mds='6'>
                    <InputGroup className="mb-3 mt-4">
                        <Form.Control
                            placeholder="Task title"
                            onChange={handleInputChange}
                            onKeyDown={handleInputKeyDown}
                            value={newTaskTitle}
                        />
                        <Button 
                            variant="success"
                            onClick={addNewTask}
                            disabled={isAddNewTaskButtonDisabled}
                        >
                            Add
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row className={styles.todo_mb-100}>
                {tasks.map((task) => {
                    return (
                        <Task
                            data={task}
                            key={task._id}
                            onTaskDelete={setTaskToDelete}
                            onTaskSelect={onTaskSelect}
                        />
                    );
                })}
            </Row>
            <div className={styles.todo_todoBottom}>
            <DeleteSelected
                disabled={!selectedTasks.size}
                tasksCount={selectedTasks.size}
                onSubmit={deleteSelectedTasks}
            />
            </div>
            
            {taskToDelete && (
            <ConfirmDialog 
                tasksCount={1}
                onCancel={()=>setTaskToDelete(null)}
                onSubmit={()=>{
                onTaskDelete(taskToDelete);
                setTaskToDelete(null);
                }}
            />
           ) }
        </Container>
    );
            }

export default Todolist;
=======
          newState.selectedTasks = newSelectedTasks;
        }
        this.setState(newState);
      };
      onTaskSelect = (taskId)=>{
        const selectedTasks = new Set(this.state.selectedTasks);
        if(selectedTasks.has(taskId)){
          selectedTasks.delete(taskId);
        }
        else {
          selectedTasks.add(taskId);
        }
        this.setState({ selectedTasks });
      };
      deleteSelectedTasks = ()=>{
          const newTasks = [];
          const {selectedTasks, tasks} = this.state;
        
        tasks.forEach((task)=>{
              if(!selectedTasks.has(task.id)){
                newTasks.push(task);
              }
        });
        this.setState({
          tasks: newTasks,
          selectedTasks: new Set(),
        });
      };

    render() {
        const isAddNewTaskButtonDisabled = !this.state.newTaskTitle.trim();
        return (
            <Container>
                <Row className="justify-content-center" >
                    <Col xs='12' sm='8' mds='6'>
                        <InputGroup className="mb-3 mt-4">
                            <Form.Control
                                placeholder="Task title"
                                onChange={this.handleInputChange}
                                onKeyDown={this.handleInputKeyDown}
                                value={this.state.newTaskTitle}

                            />
                            <Button 
                                variant="success"
                                onClick={this.addNewTask}
                                disabled={isAddNewTaskButtonDisabled}
                            >
                                Add
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    {this.state.tasks.map((task) => {
                        return (
                            <Task
                                data={task}
                                key={task.id}
                                onTaskDelete={this.onTaskDelete}
                                onTaskSelect={this.onTaskSelect}
                            />
                        );
                    })}
                </Row>
                <Button
                    className={styles.deletSelected}
                    variant="danger"
                    onClick={this.deleteSelectedTasks}
                    disabled={!this.state.selectedTasks.size}
                >
                    Delete selected
                </Button>
            </Container>
        );
    }
}

export default Todolist;
>>>>>>> 250e9a40f138269cdf9bae5e2a1462f7c9ff3bc4
