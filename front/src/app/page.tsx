import { Boutique, Product } from "@/@types/types";
import CardShopSection from "@/components/pages/home/CardShopSection";
import PresentationSection from "@/components/pages/home/PresentationSection";
import FilterForm from "@/components/pages/home/FilterForm";
import HeroSection from "@/components/pages/home/HeroSection";
import CategoryShowcase from "@/components/pages/home/CategorySowcase";
import ProductSlider from "@/components/pages/home/ProductSlider";

export default async function Home() {
  const API_URL = process.env.API_URL;

  const [boutiquesRes, productsRes] = await Promise.all([
    fetch(`${API_URL}/shops/promotedshops`),
    fetch(`${API_URL}/products`),
  ]);

  // Parse responses
  const boutiques: Boutique[] = await boutiquesRes.json();
  const products: Product[] = await productsRes.json();

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
