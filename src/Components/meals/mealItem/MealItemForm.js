import { useRef,useState } from "react";
import classes from "./MealItemForm.module.css";
import {Input} from "../../UI/Input";
export const MealItemForm=(props)=>{
    const[amountIsValis,setAmoutIsValid]=useState(true);
    const amountInputRef=useRef();

    const submitHandler=event=>{
        event.preventDefault();
        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber=+enteredAmount;

        if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmount>5){
            setAmoutIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
            label="Amout"
            input={{
                id:"amount",
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:"1",
            }}
            />
            <button>+ Add</button>
            {!amountIsValis && <p>Please enter a valid amount(1-5).</p>}
        </form>
    )
}