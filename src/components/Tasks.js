import PropTypes from "prop-types";
import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            text={task.text}
            day={task.day}
            remainder={task.reminder}
            id={task.id}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

Tasks.protoTypes = {
  tasks: PropTypes.object,
};
export default Tasks;
