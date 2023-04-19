import { ToastContainer, toast } from "react-toastify";
import { Container, Button, Row, Col } from 'react-bootstrap';
import Task from './Task';
import React, { useEffect, useState } from 'react';
import ConfirmDialog from "./ConfirmDialog";
import DeleteSelected from "./deleteSelected/DeleteSelected";
import styles from "./todo.module.css";
import TaskModal from './TaskModal/TaskModal';
import TaskApi from '../api/taskApi';


const taskApi = new TaskApi();

function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [selectedTasks, setSelectedTasks] = useState(new Set());
    const [taskToDelete, setTaskToDelete] = useState(null);
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

    useEffect(() => {
        taskApi.getAll().then((tasks) => {
            setTasks(tasks);
        });

    }, []);

    const onAddNewTask = (newTask) => {

        taskApi.add(newTask)
            .then((task) => {
                const tasksCopy = [...tasks];
                tasksCopy.push(task);
                setTasks(tasksCopy);
                setIsAddTaskModalOpen(false);
                toast.success('The task has been added successfully!');
            })
            .catch((err) => {
                console.log("err", err);
                toast.error(err.message);
            });

    };

    const onTaskDelete = (taskId) => {
        const newTasks = tasks.filter((task) => task._id !== taskId);
        setTasks(newTasks);
        if (selectedTasks.has(taskId)) {
            const newSelectedTasks = new Set(selectedTasks);
            newSelectedTasks.delete(taskId);
            setSelectedTasks(newSelectedTasks);
        }

    };

    const onTaskSelect = (taskId) => {
        const selectedTasksCopy = new Set(selectedTasks);
        if (selectedTasksCopy.has(taskId)) {
            selectedTasksCopy.delete(taskId);
        }
        else {
            selectedTasksCopy.add(taskId);
        }
        setSelectedTasks(selectedTasksCopy);
    };

    const deleteSelectedTasks = () => {
        const newTasks = [];
        tasks.forEach((task) => {
            if (!selectedTasks.has(task._id)) {
                newTasks.push(task);
            }
        });

        setTasks(newTasks);
        setSelectedTasks(new Set());
    };

    return (
        <Container>

            <Row className="justify-content-center" >
                <Col xs='12' sm='8' mds='6'>

                    <Button
                        className="mt-3"
                        variant="success"
                        onClick={() => setIsAddTaskModalOpen(true)}
                    >
                        Add new task
                    </Button>
                </Col>
            </Row>
            <Row className={styles.mb_100}>
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
            <div className={styles.todoBottom}>
                <DeleteSelected
                    disabled={!selectedTasks.size}
                    tasksCount={selectedTasks.size}
                    onSubmit={deleteSelectedTasks}
                />
            </div>

            {taskToDelete && (
                <ConfirmDialog
                    tasksCount={1}
                    onCancel={() => setTaskToDelete(null)}
                    onSubmit={() => {
                        onTaskDelete(taskToDelete);
                        setTaskToDelete(null);
                    }}
                />
            )}
            {isAddTaskModalOpen && (
                <TaskModal
                    onCancel={() => setIsAddTaskModalOpen(false)}
                    onSave={onAddNewTask}
                />
            )}

            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </Container>
    );
}

export default Todolist;
