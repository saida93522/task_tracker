import { FaTimesCircle, FaBell } from "react-icons/fa";

const Task = ({ text, day, remainder, id, onDelete, onToggle }) => {
  return (
    <section
      onDoubleClick={() => onToggle(id)}
      className={`task ${remainder ? "reminder" : ""}`}
    >
      {remainder ? <FaBell color="gold" className="fa fa-bell" /> : ""}
      <h3>
        {text}
        <FaTimesCircle className="fa fa-del" onClick={() => onDelete(id)} />
      </h3>
      <p>{day}</p>
      <br />
    </section>
  );
};

export default Task;
