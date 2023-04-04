import { Form, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTaskInList } from "../slices/taskSlice";

function Update(props) {
  const { taskSelected } = useSelector((state) => state.tasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(taskSelected).length !== 0) {
      setId(taskSelected.id);
      setTitle(taskSelected.title);
      setDescription(taskSelected.description);
    }
  }, [taskSelected]);
  const updateTask = (e) => {
    props.onHide();
    dispatch(editTaskInList({ id, title, description }));
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontWeight: "bold", color: "orangered" }}
        >
          Update Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{
            backgroundColor: "orangered",
            fontWeight: "bold",
            border: "none",
          }}
          onClick={(e) => updateTask(e)}
        >
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Update;
