import { Component, PureComponent} from 'react';
import { Container, Button, InputGroup, Form, Row, Col } from 'react-bootstrap';
import { idGenerator } from "../utils/helpers";
import Task from './Task';
import styles from './todo.module.css';

class Todolist extends PureComponent {
      
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
    
        if(selectedTasks.has(taskId)){
          const newSelectedTasks = new Set(selectedTasks);
          newSelectedTasks.delete(taskId);
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