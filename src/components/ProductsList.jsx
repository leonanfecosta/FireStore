import React from "react";
import { useSelector } from "react-redux";

function ProductList () {
  const products = useSelector(state => state.fetchProducts.products);
  const search = useSelector(state => state.fetchProducts.searchProducts);
  return (
    <section>
      
      <div>
        { search && <h1>{`Busca por: ${search}`}</h1> }
        { products.length > 0 && <h4>{`${products.length} produtos encontrados`}</h4> }
      </div>
      <div>
        { products.map(product => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{`R$ ${ product.price.toFixed(2) }`}</p>
            <img src={product.thumbnail} alt={product.title} />
            { product.shipping.free_shipping && <p>Frete grátis</p> }
          </div>
        )) }
      </div>
    </section>
  );
}

export default ProductList;
