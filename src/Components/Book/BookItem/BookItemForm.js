import React, { useRef, useState } from 'react';
import './BookItemForm.css';
import Input from '../../UI/Input';

const BookItemForm = (props) => {
  const [numIsVaild, setNumIsVaild] = useState(true);
  const amountInpRef = useRef();

  const submitHandler =(event)=>{
    event.preventDefault();
    const enteredAmount = amountInpRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 10
    ) {
      setNumIsVaild(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  } 

  return (
    <form className='form' onSubmit={submitHandler}>
        <Input ref={amountInpRef} label='Amount' input={{
            id: 'amount_' + props.id,
            type:'number',
            min:'1',
            max:'10',
            step:'1',
            defaultValue:'1'
        }}
        />
        <button>+ Add</button>
        {!numIsVaild && <p>Please enter vaild amount from 1:10 </p>}
    </form>
  )
}

export default BookItemForm
