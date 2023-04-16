
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
    
        if(selectedTasks.has(taskId)){
          const newSelectedTasks = new Set(selectedTasks);
          newSelectedTasks.delete(taskId);
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
