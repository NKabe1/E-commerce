import { useState, useEffect } from "react";
import axios from "axios";

type useGetProductArguments = {
  cartItemId: number;
};

type TProduct = {
  title: string;
  thumbnail: string;
  price: number;
};

export function useGetProduct({ cartItemId }: useGetProductArguments) {
  const [product, setProduct] = useState<TProduct>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const getproduct = async (cartItemId: number) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://dummyjson.com/products/${cartItemId}`
      );
      setProduct(resp.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    getproduct(cartItemId);
  }, [cartItemId]);
  return { product };
}
