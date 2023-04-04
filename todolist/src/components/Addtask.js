import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTaskToList } from "../slices/taskSlice";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    dispatch(addTaskToList({ title, description }));
  };
  return (
    <div className="container w-50 mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold", color: "orangered" }}>
            Task Title
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold", color: "orangered" }}>
            Task Description
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <div style={{ float: "right" }}>
          <Button
            onClick={(e) => handleSubmit(e)}
            style={{
              backgroundColor: "orangered",
              border: "none",
              fontWeight: "bold",
            }}
            type="submit"
          >
            Add Task
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddTask;
