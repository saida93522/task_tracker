import PropTypes from "prop-types";
import Task from "./Task";
const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => {
        return <Task key={task.id} text={task.text} day={task.day} />;
      })}
    </>
  );
};

Tasks.protoTypes = {
  tasks: PropTypes.object,
};
export default Tasks;
