import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { useSearchParams } from "react-router-dom";
import { PaginationLimit } from "@src/components/Pagination/PaginationLimit";
import { SearchBarContext } from "@src/contexts/SearchBarContext";

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
  const { setSearchBarValue } = useContext(SearchBarContext);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [skip, setSkip] = useState<number>(0);
  const [numberOfProducts, setNumberOfProducts] = useState<number>(); // for pagination purposes
  const [searchParams] = useSearchParams();

  // sending request to backend API with a delay after user fills the search bar
  const debouncedGetProducts = useRef(
    debounce((searchValue: string, skipValue: number) => {
      getProducts(searchValue, skipValue);
    }, 400)
  ).current;

  const getProducts = async (searchValue: string, skipValue: number) => {
    try {
      setLoading(true);

      // return no results, in case user tries to search products with one letter
      if (searchValue.length === 1) {
        setLoading(false);
        setNumberOfProducts(0);
        return;
      }
      const productsUrl = searchValue // to fetch initial/searched products
        ? `https://dummyjson.com/products/search?q=${searchValue}&limit=${PaginationLimit}&skip=${skipValue}`
        : `https://dummyjson.com/products?limit=${PaginationLimit}&skip=${skipValue}`;

      const countUrl = searchValue // to fetch number of products in order pagination to calculate pages
        ? `https://dummyjson.com/products/search?q=${searchValue}`
        : `https://dummyjson.com/products`;

      // to fetch both information simultaneously
      const [productsResponse, countResponse] = await Promise.all([
        axios.get(productsUrl),
        axios.get(countUrl),
      ]);

      setProducts(productsResponse.data?.products);
      setNumberOfProducts(countResponse.data?.total);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    const search = searchParams.get("search");
    const searchValue = search || "";
    setSearchBarValue(searchValue);
    debouncedGetProducts(searchValue, skip);
  }, [searchParams, setSearchBarValue, debouncedGetProducts, skip]);

  return { products, skip, setSkip, numberOfProducts };
}
