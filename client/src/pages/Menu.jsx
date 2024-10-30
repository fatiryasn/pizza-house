import React, { useEffect, useState } from "react";
import axios from "axios";

import logo from "../assets/logo.png";
import halal from "../assets/halal.png";
import ProductCard2 from "../components/ProductCard2";
import Loader from "../components/Loader";

const Menu = () => {
  const [loading, setLoading] = useState(false);
  const [pizzas, setPizzas] = useState([]);
  const [beverages, setBeverages] = useState([]);
  const [others, setOthers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pizza-house-eight.vercel.app/api/product")
      .then((res) => {
        const allProducts = res.data.data;
        const pizza = allProducts.filter((p) => p.category === "pizza");
        setPizzas(pizza);

        const beverage = allProducts.filter((p) => p.category === "beverage");
        setBeverages(beverage);

        const other = allProducts.filter((p) => p.category === "others");
        setOthers(other);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);
  return (
    <div className="lg:px-32 pt-32 mb-96 flex flex-col min-h-[100vh]">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex gap-3 items-center justify-center">
          <img src={logo} alt="logo" className="h-28" />
          <img src={halal} alt="halal" className="h-36" />
        </div>
        <h1 className="font-bold font-playwrite text-center translate-x-2">
          Pizza House{" "}
          <span className="font-quicksand text-center font-normal tracking-[1rem]">
            MENU
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center lg:items-stretch mt-32 lg:px-10">
        <h2 className="text-2xl font-bold font-playwrite">🍕Pizza</h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-10 pt-10">
            {pizzas.map((pizza) => (
              <ProductCard2 key={pizza._id} data={pizza} />
            ))}
          </div>
        )}
        <h2 className="text-2xl font-bold mt-40 font-playwrite">🍺Beverage</h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-10 pt-10">
            {beverages.map((beverage) => (
              <ProductCard2 key={beverage._id} data={beverage} />
            ))}
          </div>
        )}
        <h2 className="text-2xl font-bold mt-40 font-playwrite">Others</h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-10 pt-10">
            {others.map((other) => (
              <ProductCard2 key={other._id} data={other} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
