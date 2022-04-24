import React, { useContext } from 'react';
import {BsCartCheckFill} from "react-icons/bs";
import CartContext from '../../Store/Cart_Context';
import './HeaderBtn.css';


const HeaderBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const numOfItem =cartCtx.items.reduce((current, item)=>{
    return current + item.amount ;
  },0);
  
  return (
    <>
    <button className='button' onClick={props.onClick}>
        <span className='icon '>
            <BsCartCheckFill />
        </span>
        <span>Your Card</span>
        <span className='badge'>{numOfItem}</span>
    </button>
    </>
  )
}

export default HeaderBtn
