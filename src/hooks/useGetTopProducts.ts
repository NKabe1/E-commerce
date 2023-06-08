import { useState, useEffect } from "react";
import axios from "axios";
import { useGetTotalNumOfProducts } from "./useGetTotalNumOfProducts";
import { PaginationLimit } from "@src/components/Pagination/PaginationLimit";

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

export function useGetTopProducts() {
  const [topProducts, setTopProducts] = useState<TProduct[]>([]);
  const { total } = useGetTotalNumOfProducts();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const getTopProducts = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(`https://dummyjson.com/products?limit=${total}`);
     
      const sortedProducts = resp.data?.products.sort((a: any, b: any) => b.rating - a.rating).slice(0, PaginationLimit);

      setTopProducts(sortedProducts);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getTopProducts();
  }, []);

  return { topProducts };
}
