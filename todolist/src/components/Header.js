import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { taskList } = useSelector((state) => state.tasks);
  return (
    <div
      style={{ textAlign: "center", color: "orangered", marginTop: "1.5rem" }}
    >
      <h2>Project Management</h2>
      <div style={{ color: "grey", fontSize: "15px" }}>
        {`Currently ${taskList.length} task(s) pending`}
      </div>
    </div>
  );
};

export default Header;
