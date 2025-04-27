import CardShopSection from "@/components/pages/home/CardShopSection";
import PresentationSection from "@/components/pages/home/PresentationSection";
import FilterForm from "@/components/pages/home/FilterForm";
import HeroSection from "@/components/pages/home/HeroSection";
import CategoryShowcase from "@/components/pages/home/CategorySowcase";
import ProductSlider from "@/components/pages/home/ProductSlider";

import { Boutique } from "@/@types/types";
import axios from "axios";
import { Product } from "@/@types/types";

export async function getServerSideProps() {
  try {
    const API_URL = process.env.API_URL;

    const [boutiquesRes, productsRes] = await Promise.all([
      axios.get(`${API_URL}/shops/promoteshops`, { timeout: 5000 }),
      axios.get(`${API_URL}/products`, { timeout: 5000 }),
    ]);

    return {
      props: {
        boutiques: boutiquesRes.data,
        products: productsRes.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    // Return empty arrays or a safe fallback in case of error
    return {
      props: {
        boutiques: [],
        products: [],
      },
    };
  }
}

export default function Home({
  boutiques,
  products,
}: {
  boutiques: Boutique[];
  products: Product[];
}) {
  return (
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
  );
}
