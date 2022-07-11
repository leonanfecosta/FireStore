import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductById } from "../helpers/fetchAllApi";
import { addToCart } from "../redux/reducers/addToCart";
import Header from "../components/header";

function ProductDetails () {
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const id = location.pathname.split("/")[2];
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

  useEffect (() => {
    const fetchProduct = async () => {
      const product = await getProductById(id);
      setProduct(product);
    }
    fetchProduct();
  }, [id]);

  return (
    <div>
      <Header />
      <h1>Product Details</h1>
      { product && (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{`R$ ${ product?.price?.toFixed(2) }`}</p>
          <img src={product.thumbnail} alt={product.title} />
          { product?.shipping?.free_shipping && <p>Frete grátis</p> }
          { product?.attributes?.map(attribute => (
            <p key={attribute.id}>{`${attribute.name}: ${attribute.value_name}`}</p>
          ))}
        </div>
      ) }
      <button type="button" onClick={() => addCart(product)}>Adicionar ao Carrinho</button>
    </div>
  )
}

export default ProductDetails
