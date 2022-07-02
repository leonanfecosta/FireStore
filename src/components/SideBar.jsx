import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/reducers/fetchCategories';

function SideBar () {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.fetchCategories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <aside className='flex flex-col justify-center p-1 border border-black'>
    <ul>
      { categories.map(category => (
        <li key={category.id}>
          {category.name}
        </li>
      ))}
    </ul>
    </aside>
  )
}

export default SideBar;