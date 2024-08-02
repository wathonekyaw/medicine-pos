import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import {
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import EditProductModal from "./EditProductModal";
import CreateProduct from "./CreateProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    setProducts(response.data);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (productId) => {
    await axios.delete(`http://localhost:5000/api/products/${productId}`);
    fetchProducts();
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProduct(null);
    fetchProducts();
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
    fetchProducts();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h4">Products</Typography>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setIsCreateModalOpen(true)}
        >
          Create Product
        </button>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/12 py-3 px-4 text-left">Product</th>
            <th className="w-1/12 py-3 px-4 text-left">Name</th>
            <th className="w-1/12 py-3 px-4 text-left">Code</th>
            <th className="w-1/12 py-3 px-4 text-left">Brand</th>
            <th className="w-1/12 py-3 px-4 text-left">Price</th>
            <th className="w-1/12 py-3 px-4 text-left">Product Unit</th>
            <th className="w-1/12 py-3 px-4 text-left">In Stock</th>
            <th className="w-1/12 py-3 px-4 text-left">Created On</th>
            <th className="w-1/12 py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-3 px-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
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
          onClose={handleCloseEditModal}
        />
      )}
      {isCreateModalOpen && (
        <CreateProduct
          onClose={handleCloseCreateModal}
          fetchProducts={fetchProducts}
        />
      )}
    </div>
  );
};

export default Products;
