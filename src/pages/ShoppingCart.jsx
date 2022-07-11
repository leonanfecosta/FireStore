import React from 'react';
import CartList from '../components/CartList';

function ShoppingCart() {
  return (
    <div>
      <h1>Carrinho de compras</h1>
      <CartList />
      <button type="button">Finalizar compra</button>
    </div>
  );
}

export default ShoppingCart;
