import React from 'react';
import { useSelector } from 'react-redux';

function CartList() {
  const cart = useSelector(state => state.addToCart.products);
  return (
    <div>
      <h1>Lista compras</h1>

      {cart.map(product => ((
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{`Quantidade: ${product.quantity}`}</p>
          <p>{`R$ ${product.price.toFixed(2)}`}</p>
        </div>
      ))
      )}
    </div>
  );
}

export default CartList;
