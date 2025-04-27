"use client";

import ProductList from "@/components/pages/market/ProductList";
import FilterPanel from "@/components/pages/market/FilterPanel";
import { Product } from "@/@types/types";
import { useState } from "react";

interface MarketplaceClientPageProps {
  products: Product[];
}

export default function MarketplaceClientPage({
  products: initialProducts,
}: MarketplaceClientPageProps) {
  const [products] = useState(initialProducts);

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-4 mb-10">
        <h1 className="text-2xl font-bold text-center mb-5">
          Trouvez des produits pour vous!
        </h1>
        <FilterPanel />{" "}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <ProductList products={products} />{" "}
      </div>
    </div>
  );
}
