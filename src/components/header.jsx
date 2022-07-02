import React from 'react'

function Header() {
  return (
    <header className='flex justify-between p-1 border border-black'>
      <div>
        <h1>
          FireStore
        </h1>
      </div>
      <div>
        <h2>
          Carrinho de compras
        </h2>
      </div>
    </header>
  )
}

export default Header;