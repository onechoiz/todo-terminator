import Btn from "../components/Btn";
import classes from "./alert.module.scss";

export default function Alert({ alertTitl, alertMsg, handleDismissAlert }) {
  return (
    <div className={classes["container"]}>
      <div className={classes["alert-box"]}>
        <h2>{alertTitl}</h2>
        <p>{alertMsg}</p>
        <Btn btnTxt={"ok"} onClick={handleDismissAlert} />
      </div>
    </div>
  );
}
