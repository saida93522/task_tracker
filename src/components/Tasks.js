import PropTypes from "prop-types";
import Task from "./Task";
const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            text={task.text}
            day={task.day}
            id={task.id}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

Tasks.protoTypes = {
  tasks: PropTypes.object,
};
export default Tasks;
