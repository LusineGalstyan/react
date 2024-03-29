import { memo } from 'react';
import PropTypes from "prop-types";
import { Button, Col, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faCheck,  faHistory } from "@fortawesome/free-solid-svg-icons";
import { formatDate} from '../../utils/helpers';
import styles from "./task.module.css";

function Task(props) {
    const task = props.data;
     
    return (
        <Col lg={12} xl={6} className='mt-2 mb-2' >
            <Card className={styles.card}>
                <Card.Body className={styles.cardBody}>
                    
                    <div className={styles.Status} title={task.status} ></div>
                    <Form.Check
                        className={styles.selectTask}
                        onChange={()=>props.onTaskSelect(task._id)}
        		checked={props.checked}
                    />
                    <div className={styles.Text}>
                        <Card.Title className={styles.textElipsis}>{task.title}</Card.Title>
                        <Card.Text className={styles.textElipsis}>{task.description}</Card.Text>
                        <div className={styles.date}>
                            <div className={styles.dateItem}>Created At: {formatDate(task.created_at)}</div>
                            <div className={styles.dateItem}>Deadline: {formatDate(task.date)}</div>
                        </div>
                        
                    </div>
                    
                    
                    <div className={styles.BtnGroup}>
                        <div className={styles.actionButtons}>
                        {
                            task.status === 'active' ?
                            <Button 
                            title="Mark as done" 
                            variant="success" 
                            onClick={() => props.onStatusChange({status: 'done', _id: task._id})}>
                            <FontAwesomeIcon icon={faCheck} />
                            </Button> :
                            <Button 
                            title="Mark as active" 
                            variant="info" 
                            onClick={() => props.onStatusChange({status: 'active', _id: task._id})}>
                            <FontAwesomeIcon icon={faHistory} />
                            </Button>
                        }
                    </div>
                    <Button 
                        title="Edit"
                        className={styles.actionButton}
                        variant="warning"
                        onClick={()=>props.onTaskEdit(task)}
                                >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                    <Button 
                        title="Delete"
                        variant="danger" 
                        className={styles.actionButton}
                        onClick={() => props.onTaskDelete(task._id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    </div>
                    
                    
                </Card.Body>
            </Card>
        </Col>
    );
}
Task.propTypes = {
    data: PropTypes.object.isRequired,
    onTaskDelete: PropTypes.func.isRequired,
    onTaskSelect: PropTypes.func.isRequired,
onTaskEdit: PropTypes.func.isRequired,
checked: PropTypes.bool.isRequired,
};

export default memo(Task);
