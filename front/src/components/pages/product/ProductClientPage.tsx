"use client";

import ProductDetails from "@/components/pages/product/ProductDetails";
import SellerInfo from "@/components/pages/product/SellerInfo";
import { Product } from "@/@types/types";

interface ProductClientPageProps {
  product: Product;
}

export default function ProductClientPage({ product }: ProductClientPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ProductDetails product={product} />
        </div>
        <div>
          {product && product.shop && (
            <SellerInfo
              seller={{
                name: product.shop.companyName,
                address: product.shop.city,
                deliveryOptions: ["Livraison gratuite"],
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}