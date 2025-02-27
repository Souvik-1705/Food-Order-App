import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart =(props)=>{
    const cartCtx=useContext(CartContext);
    const totalAmout=`$${cartCtx.totalAmout.toFixed(2)}`;
    const hasItems=cartCtx.items.length>0;

    const cartItemRemoveHandler=(id)=>{};
    const cartItemAddHandler=(item)=>{};

    const CartItems=(<ul className={classes['cart-items']}>{cartCtx.items.map((item)=>(
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
        ))}
    </ul>
    );

    return(
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmout}</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems &&<button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;