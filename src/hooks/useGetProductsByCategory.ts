import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export function useGetProductsByCategory() {
  const { category } = useParams<string>();
  const [categoryProducts, setCategoryProducts] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getCategory = async (category_name: string | undefined) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://dummyjson.com/products/category/${category_name}`
      );
      setCategoryProducts(resp.data.products);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    getCategory(category);
  }, [category]);
  return { categoryProducts, category };
}
