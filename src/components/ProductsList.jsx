import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/reducers/addToCart";

function ProductList () {
  const products = useSelector(state => state.fetchProducts.products);
  const search = useSelector(state => state.fetchProducts.searchProducts);
  const dispatch = useDispatch();

  const addCart = (product) => {
    const item = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.thumbnail,
      quantity: 1,
    }
    dispatch(addToCart(item));
  };

  return (
    <section>
      <div>
        { search && <h1>{`Busca por: ${search}`}</h1> }
        { products.length > 0 && <h4>{`${products.length} produtos encontrados`}</h4> }
      </div>
      <div>
        { products.map(product => (
          <Link to={`details/${product.id}`}>
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{`R$ ${ product.price.toFixed(2) }`}</p>
              <img src={product.thumbnail} alt={product.title} />
              { product.shipping.free_shipping && <p>Frete grátis</p> }
              <button type="button" onClick={ () => addCart(product) }>Adicionar ao carrinho</button>
            </div>
          </Link>
        )) }
      </div>
    </section>
  );
}

export default ProductList;
