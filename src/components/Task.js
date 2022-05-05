import { FaTimes } from "react-icons/fa";

const Task = ({ text, day, id, onDelete }) => {
  return (
    <section className="task">
      <h3>
        {text}
        <FaTimes
          color="red"
          className="fa fa-del"
          onClick={() => onDelete(id)}
        />
      </h3>
      <p>{day}</p>
      <br />
    </section>
  );
};

export default Task;
