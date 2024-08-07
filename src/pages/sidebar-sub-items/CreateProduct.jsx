import React, { useState } from "react";
import axios from "axios";

const CreateProduct = ({ onClose, fetchProducts }) => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    brand: "",
    price: "",
    unit: "",
    stock: "",
    warehouse: "",
    supplier: "",
    status: "Received",
    productCategory: "",
    barcodeSymbology: "",
    saleUnit: "",
    quantityLimitation: "",
    productType: "",
    note: "",
    multipleImage: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      multipleImage: Array.from(e.target.files),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((file) => {
          formDataToSend.append(key, file);
        });
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      await axios.post("http://localhost:5000/api/products", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchProducts();
      onClose();
    } catch (error) {
      console.error(
        "Error creating product:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-2/3 h-3/4 overflow-auto">
        <h2 className="text-2xl mb-4">Create Productssss</h2>
        <form onSubmit={handleSubmit}>
          {/* First Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Code:</label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Brand:</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Product Unit:</label>
              <input
                type="text"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">In Stock:</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          {/* Second Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Warehouse:</label>
              <input
                type="text"
                name="warehouse"
                value={formData.warehouse}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Supplier:</label>
              <input
                type="text"
                name="supplier"
                value={formData.supplier}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Product Category:</label>
              <input
                type="text"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Barcode Symbology:</label>
              <input
                type="text"
                name="barcodeSymbology"
                value={formData.barcodeSymbology}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Sale Unit:</label>
              <input
                type="text"
                name="saleUnit"
                value={formData.saleUnit}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Quantity Limitation:
              </label>
              <input
                type="text"
                name="quantityLimitation"
                value={formData.quantityLimitation}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          {/* Third Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Product Type:</label>
              <input
                type="text"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Status:</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700">Note:</label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700">Upload Images:</label>
              <input
                type="file"
                name="multipleImage"
                onChange={handleFileChange}
                multiple
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
