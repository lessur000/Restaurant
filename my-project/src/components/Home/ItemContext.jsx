import { createContext, useState, useEffect } from "react";

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  //chef state
  const [chefs, setChefs] = useState([]);
  //Foods state
  const [foods, setFoods] = useState([]);

  //fetch items & chefs
  useEffect(() => {
    const fetchChefs = async () => {
      const chefsResponse = await fetch("http://localhost:3002/Chefs");
      const chefsData = await chefsResponse.json();
      // console.log(itemsdata);
      setChefs(chefsData);
    };
    fetchChefs();
  }, []);

  useEffect(() => {
    const fetchFoods = async () => {
      const foodsResponse = await fetch("http://localhost:3002/Foods");
      const foodsData = await foodsResponse.json();
      // console.log(foodsData);
      setFoods(foodsData);
    };
    fetchFoods();
  }, []);

  return (
    <ItemContext.Provider value={{ chefs, foods }}>{children}</ItemContext.Provider>
  );
};

export default ItemProvider;
