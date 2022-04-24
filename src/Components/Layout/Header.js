import React from 'react'
import bookImg from '../../Essets/pexels-min-an-694740.jpg'
import HeaderBtn from './HeaderBtn';
import './Header.css';


function Header(props) {
  return (
    <>
      <header className='header'>
          <h1>React Books</h1>
          <HeaderBtn onClick={props.onShowCard}/>
      </header>
      <div className='main-image'>
          <img src={bookImg} alt="image for books !!" />
      </div>
    </>
  )
}

export default Header
