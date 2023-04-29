import classes from '../style/btn.module.scss'
export default function Btn({btnTxt,onClick,btnClass}) {
    return(
        <div>
            <button  onClick={onClick} className={classes[`${btnClass}`]}>{btnTxt}</button>
        
        </div>
    )
    
};
