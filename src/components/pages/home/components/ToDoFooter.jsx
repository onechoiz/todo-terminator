import classes from '../style/toDoFooter.module.scss'

export default function ToDoFooter({totalTodos,completed,onClearCompled, showClear}) {
    return(
        <div className={classes['conatiner']}>
            <p className={classes['count']}>{completed}/{totalTodos}</p>

           { showClear &&  <button onClick={onClearCompled} className={classes['clear-btn']}>clear completed</button>}
        </div>
    )
    
};
