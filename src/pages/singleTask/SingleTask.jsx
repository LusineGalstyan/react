import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TaskApi from "../../api/taskApi";
import { Col, Button,   Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheck,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import TaskModal from "../../components/taskModal/TaskModal";
import { formatDate } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { setLoader  } from "../../redux/reducers/loaderSlice";
import styles from "./singleTask.module.css";

const taskApi = new TaskApi();

function SingleTask() {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [isEditTaskModalOpen, setEditTaskModalOpen] = useState(false);
const navigate = useNavigate();
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoader(true));
    taskApi
      .getSingle(taskId)
      .then((task) => {
        setTask(task);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(()=>dispatch(setLoader(false)));
  }, [taskId, dispatch]);

  const onEditTask = (editedTask) => {
    dispatch(setLoader(true));
    taskApi
      .update(editedTask)
      .then((updatedTask) => {
        setTask(updatedTask);
        toast.success(`Task has been updated successfully!`);
        setEditTaskModalOpen(false);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(()=>dispatch(setLoader(false)));
  };

  const onTaskDelete = () => {
    dispatch(setLoader(true));
    taskApi
      .delete(taskId)
      .then(() => {
        navigate('/');
        toast.success("The task has been deleted successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(()=>dispatch(setLoader(false)));
  };

  return (
    <div className={styles.taskContainer}>
    <Container>
      <Row className="justify-content-center ">
        <Col xs={12}>
          <article className="mt-5 mb-2">
            {task ? (
              <div className="articleBody">
                <h1 className="mb-5">{task.title}</h1>
                <span className="me-2 me-md-3 text-muted d-inline-block">Status: {task.status}</span>
                <span className="me-2 me-md-3 text-muted d-inline-block">Created At: {formatDate(task.created_at)}</span>
                <span className="me-2 me-md-3 text-muted d-inline-block">Deadline: {formatDate(task.date)}</span>
                <p className="mt-5 mb-5">{task.description}</p>
                
                
                
                <div className={styles.actionButtons}>
                  {task.status === "active" ? (
                    <Button
                      title="Mark as done"
                      variant="success"
                      onClick={() => onEditTask({status: 'done', _id: task._id})}
                    >
                      <FontAwesomeIcon icon={faCheck} /> Mark as done
                    </Button>
                  ) : (
                    <Button
                      title="Mark as active"
                      variant="info"
                      onClick={() => onEditTask({status: 'active', _id: task._id})}
                    >
                      <FontAwesomeIcon icon={faHistory} /> Mark as active
                    </Button>
                  )}
                  <Button
                    title="Edit"
                    className={styles.actionButton}
                    variant="warning"
                    onClick={() => setEditTaskModalOpen(true)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} /> Edit
                  </Button>
                  <Button
                    title="Delete"
                    variant="danger"
                    className={styles.actionButton}
                    onClick={onTaskDelete}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </Button>
                </div>
              </div>
            ) : (
              <h3>Task data is not found</h3>
            )}
          </article>
        </Col>

        {isEditTaskModalOpen && (
          <TaskModal
            onCancel={() => setEditTaskModalOpen(false)}
            onSave={onEditTask}
            data={task}
          />
        )}
      </Row>
    </Container>
    </div>
  );
}

export default SingleTask;