import React from "react";
import PropTypes from "prop-types";

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => (onArchiveTask ? onArchiveTask(id) : undefined)}
        />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly placeholder="Input title" />
      </div>

      <div className="actions" onClick={(e) => e.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          <a onClick={() => (onPinTask ? onPinTask(id) : undefined)}>
            <span className={`icon-start`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    /** id of the task */
    id: PropTypes.string.isRequired,
    /** title of the task */
    title: PropTypes.string.isRequired,
    /** current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
