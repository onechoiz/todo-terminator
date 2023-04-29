import { useEffect, useReducer, useState } from "react";
import Input from "./components/Input";
import NewToDo from "./components/NewToDo";
import SingleTaskBox from "./components/SingleTaskBox";
import classes from "./home.module.scss";
import Btn from "./components/Btn";
import Alert from "./Reusable/Alert";
import ToDoFooter from "./components/ToDoFooter";

export default function Home(params) {
  const defaultAlert = { show: false, alertTitl: "", alertMsg: " " };
  const [showAdd, setShowAdd] = useState(false);
  const [deskValue, setDeskVal] = useState("");
  const [titlVal, setTitlVal] = useState("");
  const [loading, setLoading] = useState("false");
  const [heading, setHeading] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    alertTitl: "",
    alertMsg: " ",
  });
  const [showCLear, setShowClear] = useState(false);
  const ACTIONS = {
    ADD: "add-todo",
    DONE: "done",
    DELETE: "delete-todo",
    CLEAR_COMPLETED: "clear-completed",
  };
  const toDoReducer = (state, action) => {
    if (action.type === ACTIONS.ADD) {
      return [
        ...state,
        {
          id: Math.random(),
          titl: action.payload.titl,
          descripion: action.payload.desc,
          done: false,
          type: "",
          date: "",
        },
      ];
    } else if (action.type === ACTIONS.DELETE) {
      return state.filter((todo) => todo.id !== action.payload.id);
    } else if (action.type === ACTIONS.DONE) {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });
    } else if (action.type === ACTIONS.CLEAR_COMPLETED) {
      return state.filter((todo) => !todo.done);
    }
  };

  const [todo, dispatch] = useReducer(toDoReducer, []);

  const handleDelete = (elId) => {
    dispatch({
      type: ACTIONS.DELETE,
      payload: {
        id: elId,
      },
    });
  };

  const handleDone = (id) => {
    dispatch({
      type: ACTIONS.DONE,
      payload: {
        id: id,
      },
    });
  };

  const handleShowAdd = () => {
    setShowAdd(true);
  };

  const addTodo = () => {
    if (titlVal.length > 1) {
      setShowAdd(false);
      setDeskVal("");
      setTitlVal("");
      dispatch({
        type: ACTIONS.ADD,
        payload: {
          titl: titlVal,
          desc: deskValue,
        },
      });
    } else {
      //  alert
      console.log("at least 2 letters", alert.show, 88);
      setAlert({
        show: true,
        alertMsg: "the task title needs to be at least 2 charachters long",
        alertTitl: "oops",
      });
      setTimeout(() => {
        setAlert(defaultAlert);
      }, 6000);
    }
  };

  //handling the inputs

  const handleDescriptionChange = (e) => {
    setDeskVal(e.target.value);
  };
  const handleTitlChange = (e) => {
    setTitlVal(e.target.value);
  };

  const todoList =
    todo &&
    todo.map((e, i) => {
      let title = "";
      const msxCharLength = 20;
      if (e.titl.length > msxCharLength) {
        title = e.titl.substr(0, msxCharLength) + "...";
      } else {
        title = e.titl;
      }
      return (
        <SingleTaskBox
          todoTitle={title}
          todoId={e.id}
          toDoName={e.titl}
          checked={e.done}
          onDeleteTodo={() => handleDelete(e.id)}
          onDoneTodo={() => handleDone(e.id)}
        />
      );
    });

  const handleDismissAlert = () => {
    setAlert(defaultAlert);
  };

  const completedTodos = todo.filter((e) => e.done).length;

  useEffect(() => {
    setShowClear(completedTodos > 0);
  }, [completedTodos]);

  const handleClearCompleted = () => {
    dispatch({
      type: ACTIONS.CLEAR_COMPLETED,
    });
  };

  const handleCloseAddNew = () => {
    setShowAdd(false)
  };
  return (
    <div className={classes["container"]}>
      {!showAdd && (
        <div className={classes["todo-box"]}>
          {(todo && todo.length > 0 && (
            <h2 className={classes["heading"]}> Task Terminator</h2>
          )) || <h2 className={classes["heading"]}> so what we gonna do ?</h2>}

          {todoList}
          <Btn btnClass={"addBtn"} btnTxt={"+"} onClick={handleShowAdd} />
       { todo && todo.length > 0 &&  <ToDoFooter
            totalTodos={todo.length}
            completed={completedTodos}
            onClearCompled={handleClearCompleted}
            showClear={showCLear}
          />}
        </div>
      )}

      {showAdd && (
        <NewToDo
          deskValue={deskValue}
          handleDescriptionChange={handleDescriptionChange}
          titlVal={titlVal}
          onTitleChange={handleTitlChange}
          onAddNewToDo={addTodo}
          onCloseCreateNew={handleCloseAddNew}
        />
      )}
      {alert.show && (
        <Alert
          alertMsg={alert.alertMsg}
          alertTitl={alert.alertTitl}
          handleDismissAlert={handleDismissAlert}
        />
      )}
    </div>
  );
}
