import Description from "./Description";
import Input from "./Input";
import classes from '../style/newToDo.module.scss'
import Btn from "./Btn";
import {TiDelete} from 'react-icons/ti'

export default function NewToDo({onAddNewToDo, deskValue,handleDescriptionChange, onTitleChange, titlVal, onCloseCreateNew}) {
    return(
      
             <div className={classes["container"]}> 
              <div className={classes["new-todo-box"]}>
               <TiDelete className={classes['new-todo-box__close']} onClick={onCloseCreateNew}/>
                <h2  className={classes["new-todo-box__title"]}>what shall we do ? </h2>
        <Input  titlVal={titlVal} onTitleChange={onTitleChange}/>
        <Description  deskValue={deskValue} handleDescriptionChange ={handleDescriptionChange} />
        <Btn btnTxt={'+'} btnClass={'addBtn'} onClick={onAddNewToDo} />
        </div>
        </div>
       
   
    )
};
