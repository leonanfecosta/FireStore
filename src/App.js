import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "./redux/reducers/fetchAPI";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>OnlineStore</h1>
    </div>
  );
}

export default App;
