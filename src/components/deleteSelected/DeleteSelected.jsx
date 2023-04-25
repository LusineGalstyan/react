import { useState, memo } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import ConfirmDialog from "../ConfirmDialog";
import styles from "./deleteSelected.module.css";

function DeleteSelected(props) {
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const toggleConfirmDialog = () => {
    setIsConfirmDialogOpen(!isConfirmDialogOpen);
  };

  return (
    <>
      <Button
        className={styles.deletSelected}
        variant="danger"
        onClick={toggleConfirmDialog}
        disabled={props.disabled}
      >
        Delete selected
      </Button>
      {isConfirmDialogOpen && (
        <ConfirmDialog
          tasksCount={props.tasksCount}
          onCancel={toggleConfirmDialog}
          onSubmit={()=>{
            props.onSubmit();
            toggleConfirmDialog();
          }}
        />
      )}
    </>
  );
}
DeleteSelected.propTypes={
  disabled: PropTypes.bool.isRequired,
  tasksCount: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  
  };
export default memo(DeleteSelected);
