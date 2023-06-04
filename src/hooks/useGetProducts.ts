import { useState, useEffect } from "react";
import axios from "axios";
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

export function useGetProducts() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [skip, setSkip] = useState<number>(0);

  const getProducts = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://dummyjson.com/products?limit=${PaginationLimit}&skip=${skip}`
      );
      setProducts(resp.data?.products);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, [skip]);

  return { products, skip, setSkip };
}
