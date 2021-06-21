import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  const tasksInOrder = React.useMemo(() => {
    let pinnedTask = [];
    let nonPinnedTask = [];
    if (!tasks || tasks.length === 0) return [];
    tasks.forEach((task) => {
      if (task.state === "TASK_PINNED") pinnedTask.push(task);
      else nonPinnedTask.push(task);
    });
    return [...pinnedTask, ...nonPinnedTask];
  }, [loading, tasks]);

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (!tasks || (tasks && tasks.length === 0)) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  // const tasksInOrder = [
  //   ...tasks.filter((t) => t.state === "TASK_PINNED"),
  //   ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  // ];

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => {
        return <Task key={task.id} task={task} {...events} />;
      })}
    </div>
  );
};

export default TaskList;

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
};

TaskList.defaultProps = {
  loading: false,
};
