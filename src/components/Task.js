const Task = ({ text, day }) => {
  return (
    <section className="task">
      <h3>{text}</h3>
      <p>{day}</p>
      <br />
    </section>
  );
};

export default Task;
