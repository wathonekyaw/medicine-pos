import React, { useState } from "react";
import EditProductModal from "./EditProductModal";
import {
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleDelete = (productId) => {
    // Implement delete logic here
    console.log("Delete product with ID:", productId);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Products....</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Create Product
        </button>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/6 py-3 px-4 text-left">Productssssss</th>
            <th className="w-1/6 py-3 px-4 text-left">Name</th>
            <th className="w-1/6 py-3 px-4 text-left">Code</th>
            <th className="w-1/6 py-3 px-4 text-left">Brand</th>
            <th className="w-1/6 py-3 px-4 text-left">Price</th>
            <th className="w-1/6 py-3 px-4 text-left">Product Unit</th>
            <th className="w-1/6 py-3 px-4 text-left">In Stock</th>
            <th className="w-1/6 py-3 px-4 text-left">Created On</th>
            <th className="w-1/6 py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-3 px-4">{product.name}</td>
              <td className="py-3 px-4">{product.code}</td>
              <td className="py-3 px-4">{product.brand}</td>
              <td className="py-3 px-4">{product.price}</td>
              <td className="py-3 px-4">{product.unit}</td>
              <td className="py-3 px-4">{product.stock}</td>
              <td className="py-3 px-4">{product.createdOn}</td>
              <td className="py-3 px-4 flex space-x-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded flex items-center"
                  onClick={() => console.log("View product:", product)}
                >
                  <EyeIcon className="h-5 w-5" />
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded flex items-center"
                  onClick={() => handleEdit(product)}
                >
                  <PencilSquareIcon className="h-5 w-5" />
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded flex items-center"
                  onClick={() => handleDelete(product.id)}
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditModalOpen && (
        <EditProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProductList;
