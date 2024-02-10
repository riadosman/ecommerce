import React from "react";
import ProductList from "./../../components/ProductList/ProductList";
import LogoClouds from "./../../components/LogoClouds/LogoClouds";

const page = () => {
  const Products = [1, 2, 3, 4, 5, 6, 7, 8,1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div style={{marginTop:"100px"}}>
      <ProductList products={Products}/>
      <LogoClouds/>
    </div>
  );
};

export default page;
