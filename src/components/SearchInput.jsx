import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from "../redux/reducers/fetchAPI";

function SearchInput () {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setSearch(target.value);
    dispatch(fetchAllProducts(search));
  }

  return (
    <input onChange={ handleChange } type='text' placeholder='Search' value={search} />
  )
}

export default SearchInput;