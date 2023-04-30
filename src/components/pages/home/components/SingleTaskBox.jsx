import classes from "../style/singleTask.module.scss";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";

export default function SingleTaskBox({
  todoTitle,
  toDoName,
  todoId,
  onDeleteTodo,
  onDoneTodo,
  checked,
  onHandleToggle,
}) {
  return (
    <div className={classes["container"]}>
      <div className={classes["task-box"]}>
        <label for={toDoName}>
          <input
            type="checkbox"
            name={toDoName}
            id={todoId}
            checked={checked}
            onChange={onDoneTodo}
          />
          <span className={classes["label-text"]}> {todoTitle}</span>
        </label>

        {/* btns */}
      </div>
      <div className={classes["btns"]}>
        <button className={classes["delete"]} onClick={onDeleteTodo}>
          <FaTrashAlt className={classes["fa"]} />
        </button>
        <button className={classes["done"]} onClick={onDoneTodo}>
          <FaCheckCircle />
        </button>
      </div>
    </div>
  );
}
