import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts, setSearchProducts } from "../redux/reducers/fetchProducts";

function SearchInput () {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchAllProducts(search));
    dispatch(setSearchProducts(search));
  }

  return (
    <section>
      <input
        onChange={({target}) => setSearch(target.value)}
        type='text'
        placeholder='Search'
      />
      <button
        type='button'
        onClick={handleClick}
        value={search}
      >
        Buscar
      </button>
    </section>
  )
}

export default SearchInput;