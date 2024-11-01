import React, { useState } from "react";

const ProductCard2 = ({ data }) => {
  const [priceIndex, setPriceIndex] = useState(0);

  const handlePriceIndex = (index) => {
    setPriceIndex(index);
  };

  return (
    <div className="flex items-center gap-3 lg:gap-7 px-3 py-1 lg:px-5 lg:py-2 rounded-xl border-2 w-[22rem] lg:w-[38rem]">
      <div
        className="flex-shrink-0 h-28 w-28 lg:h-36 lg:w-36 rounded-lg bg-gray-200"
        style={{
          backgroundImage: `url(data:image/png;base64,${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="flex flex-col items-start justify-center flex-grow">
        <h3 className="font-bold text-base lg:text-xl font-poppins">{data.productName}</h3>
        <p className="text-gray-950 mt-1 text-xs lg:text-sm font-quicksand">{data.description}</p>
        <div className="flex gap-2 items-start mt-2">
          {data.size.map((size, index) =>
            size ? ( 
              <button
                key={index}
                onClick={() => handlePriceIndex(index)}
                className={`capitalize text-xs px-2 py-[0.20rem] lg:px-3 lg:py-1 rounded-2xl font-quicksand font-semibold ${
                  index === priceIndex
                    ? "text-white bg-blue-700 border border-blue-600"
                    : "text-black border border-black bg-slate-200"
                }`}
              >
                {size}
              </button>
            ) : null
          )}
        </div>
        <span className="mt-2 font-poppins">
          Rp. {data.price[priceIndex] || data.price[1] || data.price[2]}
        </span>
      </div>
    </div>
  );
};

export default ProductCard2;
