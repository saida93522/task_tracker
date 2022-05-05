import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        //if task.id(current iteration id) == id(db-clicked passed id)
        //update reminder bool
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      <hr />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
