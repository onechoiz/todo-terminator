import classes from "../style/input.module.scss";
export default function Input({ titlVal, onTitleChange }) {
  return (
    <div className={classes["container"]}>
      <input
        type="text"
        placeholder="task name "
        className={classes["input"]}
        value={titlVal}
        onChange={onTitleChange}
      />
    </div>
  );
}
