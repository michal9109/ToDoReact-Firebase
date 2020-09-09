import React, { useState } from "react";
import "./Todo.css";
import {
  ListItemText,
  ListItem,
  List,
  Modal,
  makeStyles,
  Button,
} from "@material-ui/core";
import db from "./firebase";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  list: {
    display: "flex",
    alignItems: "center",
    width: "80%",
  },
  edit: {
    margin: "0 5px",
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Edit todo</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List className={classes.list}>
        <ListItem>
          <ListItemText primary={props.todo.todo} />
        </ListItem>
        <Button
          className={classes.edit}
          variant='contained'
          onClick={handleOpen}
        >
          Edit
        </Button>
        <HighlightOffIcon
          color='error'
          fontSize='large'
          className='delete'
          onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
        ></HighlightOffIcon>
      </List>
    </>
  );
}

export default Todo;
