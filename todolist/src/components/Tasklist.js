import { Table } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import React from "react";
import Update from "./Updatelist";
import { useDispatch, useSelector } from "react-redux";
import { removeTaskFromList, setTaskSelected } from "../slices/taskSlice";

function Tasklist() {
  const { taskList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const updateTask = (task) => {
    setModalShow(true);
    dispatch(setTaskSelected(task));
  };
  const deleteTask = (task) => {
    dispatch(removeTaskFromList(task));
  };
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div style={{ margin: "5rem auto", width: "39rem", textAlign: "center" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskList &&
            taskList.map((task, idx) => {
              return (
                <tr key={task.id}>
                  <td>{idx + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <PencilFill
                      style={{ cursor: "pointer", color: "orangered" }}
                      onClick={() => updateTask(task)}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Trash3Fill
                      style={{ cursor: "pointer", color: "orangered" }}
                      onClick={() => deleteTask(task)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Update show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Tasklist;
