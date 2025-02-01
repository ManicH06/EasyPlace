"use client"

import ProductList from "@/components/pages/market/ProductList";
import FilterPanel from "@/components/pages/market/FilterPanel";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MarketplacePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, [])

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-4 mb-10">
        <h1 className="text-2xl font-bold text-center mb-5">
          Trouvez des produits pour vous!
        </h1>
        <FilterPanel />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <ProductList products={products} />
      </div>
    </div>
  );
}
