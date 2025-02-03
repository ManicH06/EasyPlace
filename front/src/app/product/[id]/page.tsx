"use client";

import ProductDetails from "../../../components/pages/product/ProductDetails";
import SellerInfo from "../../../components/pages/product/SellerInfo";
import { Product } from "@/@types/types";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = params;
  console.log(id);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
      if (!product) {
        return <div>Produit non trouvé</div>;
      }
    };
    getProduct();
  }, [id, product]);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {product && <ProductDetails product={product} />}
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
      {/*       <div className="mt-12">
        {product && <SuggestedProducts {...[product]} />}
      </div> */}
    </div>
  );
}
