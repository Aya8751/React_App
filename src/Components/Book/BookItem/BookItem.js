import React, { useContext } from 'react';
import './BookItem.css';
import BookItemForm from './BookItemForm';
import CartContext from '../../../Store/Cart_Context';

const BookItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.book.price.toFixed(2)}`;
  const onAddToCartHandler =(amount)=>{
    cartCtx.addItem({
      id: props.book.id,
      name: props.book.name,
      amount:amount,
      price: props.book.price
    });
  };
 
  return (
    <><li className='book-item'>
        <div className="book-details">
            <h3>{props.book.name}</h3>
            <p className='description'>{props.book.description}</p>
            <p className='price '>{price}</p>
        </div>
        <div className="book-form">
            <BookItemForm onAddToCart={onAddToCartHandler} id={props.book.id}/>
        </div>
    </li></>
  )
}

export default BookItem
