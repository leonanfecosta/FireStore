import React from "react";
import Header from "../components/header";
import SideBar from "../components/SideBar";
import SearchInput from "../components/SearchInput";
import ProductList from "../components/ProductsList";

function Home() {
  return (
    <div>
     <Header />
     <SearchInput />
     <ProductList />
     <SideBar />
    </div>
    )
}

export default Home;
