import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='flex justify-between p-1 border border-black'>
      <div>
        <h1>
          FireStore
        </h1>
      </div>
      <div>
        <Link to='/shoppingCart'>
        <h2>
          Carrinho de compras
        </h2>
        </Link>
      </div>
    </header>
  )
}

export default Header;