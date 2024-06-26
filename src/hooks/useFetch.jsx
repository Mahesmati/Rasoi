import fetchDataFromApi from "../util/api";
import React, { useEffect, useState } from "react";

const useFetch = (type ,queryStr) => {
 
  //states
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("...loading");
    setData(null);
    setError(null);

    fetchDataFromApi(type, queryStr)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong");
      });
  },[]);

  return {data,loading,error};
};

export default useFetch;
