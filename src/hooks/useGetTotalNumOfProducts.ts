import axios from "axios";
import { useState, useEffect } from "react";

export function useGetTotalNumOfProducts() {
  const [total, setTotal] = useState(0);
  const getTotal = async () => {
    const resp = await axios.get(`https://dummyjson.com/products?limit=0`);
    setTotal(resp.data?.total);
  };

  useEffect(() => {
    getTotal();
  }, []);

  return { total };
}
