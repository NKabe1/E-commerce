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
  { id: "4", title: <FormattedMessage id="categories.skincare"/>, to: "/categories/skincare" },
  { id: "5", title: <FormattedMessage id="categories.groceries"/>, to: "/categories/groceries" },
  { id: "6", title: <FormattedMessage id="categories.home-decoration"/>, to: "/categories/home-decoration" },
  { id: "7", title: <FormattedMessage id="categories.furniture"/>, to: "/categories/furniture" },
  { id: "8", title: <FormattedMessage id="categories.tops"/>, to: "/categories/tops" },
  { id: "9", title: <FormattedMessage id="categories.womens-dresses"/>, to: "/categories/womens-dresses" },
  { id: "10", title: <FormattedMessage id="categories.womens-shoes"/>, to: "/categories/womens-shoes" },
  { id: "11", title: <FormattedMessage id="categories.mens-shirts"/>, to: "/categories/mens-shirts" },
  { id: "12", title: <FormattedMessage id="categories.mens-shoes"/>, to: "/categories/mens-shoes" },
  { id: "13", title: <FormattedMessage id="categories.mens-watches"/>, to: "/categories/mens-watches" },
  { id: "14", title: <FormattedMessage id="categories.womens-watches"/>, to: "/categories/womens-watches" },
  { id: "15", title: <FormattedMessage id="categories.womens-bags"/>, to: "/categories/womens-bags" },
  { id: "16", title: <FormattedMessage id="categories.womens-jewellery"/>, to: "/categories/womens-jewellery" },
  { id: "17", title: <FormattedMessage id="categories.sunglasses"/>, to: "/categories/sunglasses" },
  { id: "18", title: <FormattedMessage id="categories.automotive"/>, to: "/categories/automotive" },
  { id: "19", title: <FormattedMessage id="categories.motorcycle"/>, to: "/categories/motorcycle" },
  { id: "20", title: <FormattedMessage id="categories.lighting"/>, to: "/categories/lighting" },
];
