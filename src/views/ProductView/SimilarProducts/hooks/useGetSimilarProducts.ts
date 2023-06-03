import { useState, useEffect } from "react";
import axios from "axios";

type TSingleProduct = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
  discountPercentage: number;
};

export function useGetSimilarProducts({ category }: { category: string }) {
  const [similarProducts, setSimilarProducts] = useState<TSingleProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const getCategoryItems = async (category: string) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      setSimilarProducts(resp.data.products);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getCategoryItems(category);
  }, [category]);
  return { similarProducts };
}
