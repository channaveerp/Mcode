import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SearchCheck() {
  const [searchData, setSearchData] = useState();
  const [searchKey, setSearchKey] = useState("");

  // filter based on: original_title
  const fetchSearchData = async () => {
    const { data } = await axios.get(
      `https://imdb.iamidiotareyoutoo.com/search?q=${searchKey}`
    );
    // console.log("Data", data?.description[0]["#TITLE"]);
    console.log("Data", data?.description);
    setSearchData(data?.description);
  };

  // apply debounce

  const debounce = (fn, del) => {
    let timer;

    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, [del]);
    };
  };

  // const handleSearch = () => {
  //   debounce(handleChange, 300);
  // };

  const handleChange = (e) => {
    const val = e.target.value;
    console.log(val);
    setSearchKey(val);
    // debounce(setSearchKey(val), 300);
  };

  useEffect(() => {
    if (searchKey) {
      fetchSearchData();
      // debounce(fetchSearchData, 3000);
    } else {
      setSearchData([]);
    }
  }, [searchKey]);

  return (
    <div>
      <h1>Search Data</h1>
      <input
        type='text'
        value={searchKey}
        placeholder='enter movie name'
        onChange={handleChange}
      />
      <div>
        {/* Show search results */}
        {searchData?.map((movie) => (
          <div key={movie["#IMDB_ID"]}>{movie["#TITLE"]}</div>
        ))}
      </div>
    </div>
  );
}
