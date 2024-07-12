// ProductDetail.js

import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <img src={product.img} alt={product.title} className="mb-4" />
      <p className="text-lg font-bold mb-2">{product.price}</p>
      <p className="text-gray-500 mb-4">{product.description}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Sotib olish
      </button>
    </div>
  );
};

export default ProductDetail;
