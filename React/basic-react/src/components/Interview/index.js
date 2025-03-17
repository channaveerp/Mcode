import axios from "axios";
import React, { useEffect, useState } from "react";

/*
https://dummyjson.com/products
 
Use the api above to fetch all the products in your react project, (you can use fetch or axios doesn't really matter),
 
Display all the product titles on the web page
 
API to search : ‘https://dummyjson.com/products/search?q={searchinput}'
 
Use this API to build a search bar to filter the products based on the input
 
Note: The API takes search as a query parameter
*/

export default function Interview() {
  const [productsData, setProductsData] = useState([]);
  const [search, setSearch] = useState("");

  const JSON_URL = "https://dummyjson.com/products";

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const fetchProductData = async () => {
    try {
      const { data } = await axios.get(JSON_URL);
      setProductsData(data);
      console.log("Respose", data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSearchProduct = async () => {
    try {
      const { data } = await axios.get(`${JSON_URL}/search?q=${search}`);
      console.log("SEARCH_RES", data);
      setProductsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleSearch = () => {
    fetchSearchProduct();
  };
  // OR
  // useEffect(() => {
  //   fetchSearchProduct();
  // }, [search]);

  return (
    <div>
      <div>
        <input type='text' placeholder='type here' onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {productsData?.products?.length > 0 ? (
        <div>
          <h2>Products</h2>
          {productsData?.products?.map((product) => (
            <div>
              <h4>{product?.title}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div>NO DATA</div>
      )}
    </div>
  );
}
