//module
import React from "react";

//component
const Loader = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Loader;
