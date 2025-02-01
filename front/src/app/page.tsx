// Import components
import CardShopSection from "@/components/pages/home/CardShopSection";
import PresentationSection from "@/components/pages/home/PresentationSection";
import FilterForm from "@/components/pages/home/FilterForm";
import HeroSection from "@/components/pages/home/HeroSection";
import CategoryShowcase from "@/components/pages/home/CategorySowcase";

// Import data
import { boutiques } from "../../data/boutiques";
import ProductSlider from "@/components/pages/home/ProductSlider";


const sampleProducts = [
  { id: '1', name: 'Smartphone XYZ', price: 699.99, image: '/placeholder.svg?height=300&width=300' },
  { id: '2', name: 'Laptop ABC', price: 1299.99, image: '/placeholder.svg?height=300&width=300' },
  { id: '3', name: 'Casque audio', price: 199.99, image: '/placeholder.svg?height=300&width=300' },
  { id: '4', name: 'Montre connectée', price: 249.99, image: '/placeholder.svg?height=300&width=300' },
  { id: '5', name: 'Enceinte Bluetooth', price: 89.99, image: '/placeholder.svg?height=300&width=300' },
]


export default function Home() {
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
              <ProductSlider products={sampleProducts} title="Quelques produits populaires" />
            </section>
          </div>
          <PresentationSection />
        </main>
      </div>
    </>
  );
}
