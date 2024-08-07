import React, { useState } from "react";
import axios from "axios";

const ImportProducts = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/products/import", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file");
    }
  };

  const downloadSampleFile = () => {
    const link = document.createElement("a");
    link.href = "path/to/sample.csv"; // Replace with the path to your sample file
    link.download = "sample.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Import Products</h2>
        <p className="mb-4">
          The first line in the downloaded CSV file should remain as it is.
          Please do not change the order of columns. The correct column order is
          <strong>
            {" "}
            Product Code, Product Name, Purchase Price, Product Tax, Product
            Price, Category Code
          </strong>{" "}
          and you must follow this. If you are using any other language than
          English, please make sure the CSV file is UTF-8 encoded and not saved
          with byte order mark (BOM).
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
          onClick={downloadSampleFile}
        >
          Download Sample File
        </button>
        <div className="mb-4">
          <input type="file" onChange={handleFileChange} />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleFileUpload}
          disabled={!file}
        >
          Import
        </button>
      </div>
    </div>
  );
};

export default ImportProducts;
