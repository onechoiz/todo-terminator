import classes from '../style/description.module.scss'
export default function Description({deskValue, handleDescriptionChange}) {
    return(
        <div className={classes["container"]}>
            <textarea placeholder='decribe your task' 
              value={deskValue}
              onChange={handleDescriptionChange}
             ></textarea>
        </div>
    )
};
