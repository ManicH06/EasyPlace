"use client";

// Import components
import CardShopSection from "@/components/pages/home/CardShopSection";
import PresentationSection from "@/components/pages/home/PresentationSection";
import FilterForm from "@/components/pages/home/FilterForm";
import HeroSection from "@/components/pages/home/HeroSection";
import CategoryShowcase from "@/components/pages/home/CategorySowcase";
import axios from "axios";
import { useState, useEffect } from "react";

// Define NEXT_PUBLIC_API_URL
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { Boutique } from "@/@types/types";

// Import data
import ProductSlider from "@/components/pages/home/ProductSlider";

export default function Home() {
  const [boutiques, setBoutiques] = useState<Boutique[]>([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getPromotedProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const getPromotedBoutiques = async () => {
      try {
        const response = await axios.get(`${API_URL}/shops/promoteshops`);
        setBoutiques(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPromotedBoutiques();
    getPromotedProducts();
  }, []);
  return (
    <>
      <div>
        <header className="text-center py-8 transition-transform duration-300">
          <HeroSection />
        </header>
        <main className="text-center my-5">
          <FilterForm />
          <div className="bg-white">
            <section className="container mx-auto px-4 pt-32 pb-6">
              <h1 className="text-2xl font-bold text-center mb-8">
                 Trouvez la boutique qui vous correspond ! 
              </h1>
              <CardShopSection boutiques={boutiques} />
              <CategoryShowcase />
              <ProductSlider
                products={products}
                title="Quelques produits populaires"
              />
            </section>
          </div>
          <PresentationSection />
        </main>
      </div>
    </>
  );
}
