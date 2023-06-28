import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";

export type TCategory = {
  id: string;
  title: ReactNode;
  to: string;
};

export const navCategories: TCategory[] = [
  { id: "1", title: <FormattedMessage id="categories.smartphones" />, to: "/categories/smartphones" },
  { id: "2", title: <FormattedMessage id="categories.laptops"/>, to: "/categories/laptops" },
  { id: "3", title: <FormattedMessage id="categories.fragrances"/>, to: "/categories/fragrances" },
  { id: "4", title: "Skincare", to: "/categories/skincare" },
  { id: "5", title: "Groceries", to: "/categories/groceries" },
  { id: "6", title: "Home-decoration", to: "/categories/home-decoration" },
  { id: "7", title: "Furniture", to: "/categories/furniture" },
  { id: "8", title: "Tops", to: "/categories/tops" },
  { id: "9", title: "Womens-dresses", to: "/categories/womens-dresses" },
  { id: "10", title: "Womens-shoes", to: "/categories/womens-shoes" },
  { id: "11", title: "Mens-shirts", to: "/categories/mens-shirts" },
  { id: "12", title: "Mens-shoes", to: "/categories/mens-shoes" },
  { id: "13", title: "Mens-watches", to: "/categories/mens-watches" },
  { id: "14", title: "Womens-watches", to: "/categories/womens-watches" },
  { id: "15", title: "Womens-bags", to: "/categories/womens-bags" },
  { id: "16", title: "Womens-jewellery", to: "/categories/womens-jewellery" },
  { id: "17", title: "Sunglasses", to: "/categories/sunglasses" },
  { id: "18", title: "Automotive", to: "/categories/automotive" },
  { id: "19", title: "Motorcycle", to: "/categories/motorcycle" },
  { id: "20", title: "Lighting", to: "/categories/lighting" },
];
