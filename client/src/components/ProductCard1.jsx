import React from 'react';

const ProductCard1 = ({ data }) => {
  return (
    <div className="shadow-md border border-gray-500 px-1 py-4 lg:px-2 w-40 max-w-44 lg:w-48 hover:scale-105 transition cursor-pointer">
      <div className="flex justify-center items-center mb-2">
        <img
          src={`data:image/png;base64,${data.image}`}
          alt={data.productName}
          className="lg:h-36 lg:w-36 h-28 w-28 object-cover"
        />
      </div>
      <div className="text-center">
        <p className="text-sm lg:text-base font-semibold font-quicksand">{data.productName}</p>
      </div>
    </div>
  );
};

export default ProductCard1;
