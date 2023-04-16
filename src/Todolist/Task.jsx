<<<<<<< HEAD
import {memo} from 'react';
=======
>>>>>>> 250e9a40f138269cdf9bae5e2a1462f7c9ff3bc4
import { Button, Col, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./task/task.module.css";

function Task(props) {
    const task = props.data;
    return (
<<<<<<< HEAD
=======

>>>>>>> 250e9a40f138269cdf9bae5e2a1462f7c9ff3bc4
        <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='mt-2 mb-2'>
                <Card.Body>
                <Form.Check 
<<<<<<< HEAD
                    className={styles.selectTask}
                    onClick={()=>props.onTaskSelect(task._id)}
                    />
=======
        className={styles.selectTask}
        onClick={()=>props.onTaskSelect(task.id)}
        />
>>>>>>> 250e9a40f138269cdf9bae5e2a1462f7c9ff3bc4
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Text>
                        Description
                    </Card.Text>
                    <div className={styles.actionButtons}>
                        <Button variant="warning">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                        <Button variant="danger" className={styles.deleteButton}
<<<<<<< HEAD
                            onClick={()=>props.onTaskDelete(task._id)}>
=======
                            onClick={()=>props.onTaskDelete(task.id)}>
>>>>>>> 250e9a40f138269cdf9bae5e2a1462f7c9ff3bc4
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        </div>
                </Card.Body>
            </Card>
        </Col>
    );
}
<<<<<<< HEAD
export default memo(Task);
=======
export default Task;
>>>>>>> 250e9a40f138269cdf9bae5e2a1462f7c9ff3bc4
