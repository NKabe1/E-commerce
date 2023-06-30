import { useState, useEffect } from "react";
import axios from "axios";
import { useGetTotalNumOfProducts } from "./useGetTotalNumOfProducts";

type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export function useGetSortedProducts() {
  const [topProducts, setTopProducts] = useState<TProduct[]>([]);
  const [expensiveProducts, setExpensiveProducts] = useState<TProduct[]>([]);
  const { total } = useGetTotalNumOfProducts();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const getTopProducts = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://dummyjson.com/products?limit=${total}`
      );

      const sortedTopProducts = resp.data?.products
        .sort((a: any, b: any) => b.rating - a.rating)
        .slice(0, 12);

      const sortedExpensiveProducts = resp.data.products
        .sort((a: any, b: any) => b.price - a.price)
        .slice(0, 6);

      setTopProducts(sortedTopProducts);
      setExpensiveProducts(sortedExpensiveProducts);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getTopProducts();
  }, []);

  return { topProducts, expensiveProducts };
}
