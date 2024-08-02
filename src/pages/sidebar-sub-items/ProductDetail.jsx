import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={`http://localhost:5000/${product.images[0]}`}
        alt={product.name}
        className="w-48 h-48 rounded-full mb-4"
      />
      <p>
        <strong>Code:</strong> {product.code}
      </p>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <p>
        <strong>Unit:</strong> {product.unit}
      </p>
      <p>
        <strong>In Stock:</strong> {product.stock}
      </p>
      <p>
        <strong>Created On:</strong>{" "}
        {new Date(product.createdOn).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ProductDetail;
