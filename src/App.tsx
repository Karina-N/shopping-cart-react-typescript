import { LinearProgress } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";

// Components

// Styles
import { Wrapper } from "./App.styles";

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

// const getProducts = async (): Promise<CartItemType> => {
//   await (await fetch("https://fakestoreapi.com/products")).json();
// };

const getProducts = (): Promise<CartItemType[]> => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>("products", getProducts);

  const getTotalItems = () => null;
  const handleAddToCart = () => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return <div className="App">My App</div>;
}
export default App;
