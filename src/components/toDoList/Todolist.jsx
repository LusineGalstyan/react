import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { Container, Button, Row, Col } from 'react-bootstrap';
import Task from '../task/Task';
import ConfirmDialog from "../ConfirmDialog";
import DeleteSelected from "../deleteSelected/DeleteSelected";
import styles from "./todo.module.css";
import TaskModal from '../taskModal/TaskModal';
import NavBar from "../navBar/NavBar";
import Filters from "../filters/Filters";
import TaskApi from '../../api/taskApi';


const taskApi = new TaskApi();

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState(new Set());
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [editableTask, setEditableTask] = useState(null);
  
  const getTasks = (filters) => {
    taskApi.getAll(filters)
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  
  useEffect(() => {
    getTasks();
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
        toast.error(err.message);
      });
  };
  const onTaskDelete = (taskId) => {
    taskApi
      .delete(taskId)
      .then(() => {
        const newTasks = tasks.filter((task) => task._id !== taskId);
        setTasks(newTasks);
        if (selectedTasks.has(taskId)) {
          const newSelectedTasks = new Set(selectedTasks);
          newSelectedTasks.delete(taskId);
          setSelectedTasks(newSelectedTasks);
        }
        
        toast.success("The task has been deleted successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  
  const onTaskSelect = (taskId) => {
    const selectedTasksCopy = new Set(selectedTasks);
    if (selectedTasksCopy.has(taskId)) {
      selectedTasksCopy.delete(taskId);
    } else {
      selectedTasksCopy.add(taskId);
    }
    setSelectedTasks(selectedTasksCopy);
  };
  
  const deleteSelectedTasks = () => {
    taskApi
      .deleteMany([...selectedTasks])
      .then(() => {
        const newTasks = [];
        const deletedTasksCount = selectedTasks.size;
        tasks.forEach((task) => {
          if (!selectedTasks.has(task._id)) {
            newTasks.push(task);
          }
        });
        setTasks(newTasks);
        setSelectedTasks(new Set());
        toast.success(
          `${deletedTasksCount} tasks have been deleted successfully!`
        );
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  
  const selectAllTasks = () => {
    const taskIds = tasks.map((task) => task._id);
    setSelectedTasks(new Set(taskIds));
  };
 
  const resetSelectedTasks = () => {
    setSelectedTasks(new Set());
  };
 
  const onEditTask = (editedTask) => {
    taskApi
      .update(editedTask)
      .then((task) => {
        
        const newTasks = [...tasks];
        const foundIndex = newTasks.findIndex((t) => t._id === task._id);
        newTasks[foundIndex] = task;
        toast.success(`Tasks havs been updated successfully!`);
        setTasks(newTasks);
        setEditableTask(null);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
 
  const onFilter = (filters) => {
    getTasks(filters);
  };
  
  return (
    <main>
      <NavBar />
     <Container>
       
        <Row className="justify-content-right mt-3 mb-3 ">
          <Col xs="12" sm="12" md="12" className={styles.flexEnd}>
            <Button variant="success" onClick={() => setIsAddTaskModalOpen(true)}>
              Add new task
            </Button>
          
            <Button variant="warning" onClick={selectAllTasks}>
              Select all
            </Button>
          
            <Button variant="secondary" onClick={resetSelectedTasks}>
              Reset selected
            </Button>
          </Col>
        </Row>
        <Row>
          <Filters onFilter={onFilter} />
        </Row>
        <Row className={styles.mb_100}>
          {tasks.map((task) => {
            return (
              <Task
                data={task}
                key={task._id}
                onTaskDelete={setTaskToDelete}
                onTaskSelect={onTaskSelect}
                checked={selectedTasks.has(task._id)}
                onTaskEdit={setEditableTask}
                onStatusChange={onEditTask}
              />
            );
          })}
        </Row>
      </Container>
      <div className={styles.todoBottom} >
        <Container className={styles.flexRight}> 
          
          <DeleteSelected
              disabled={!selectedTasks.size}
              tasksCount={selectedTasks.size}
              onSubmit={deleteSelectedTasks}
            />
          
        </Container> 
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
        {editableTask && (
          <TaskModal
            onCancel={() => setEditableTask(null)}
            onSave={onEditTask}
            data={editableTask}
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
    </main>
 
 );
};

export default Todolist;
