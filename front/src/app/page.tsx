import { Boutique } from "@/@types/types";
import CardShopSection from "@/components/pages/home/CardShopSection";
import PresentationSection from "@/components/pages/home/PresentationSection";
import FilterForm from "@/components/pages/home/FilterForm";
import HeroSection from "@/components/pages/home/HeroSection";
import CategoryShowcase from "@/components/pages/home/CategorySowcase";
import ProductSlider from "@/components/pages/home/ProductSlider";

export default async function Home() {
  const API_URL = process.env.API_URL;
  console.log("API_URL:", process.env.API_URL);
  console.log("API_KEY:", process.env.API_KEY);
  if (!API_URL || !process.env.API_KEY) {
    console.error(
      "API_URL or API_KEY is missing. Please check your environment variables."
    );
    return <div>Error: Missing environment variables</div>;
  }

  try {
    const [boutiquesRes] = await Promise.all([
      fetch(`${API_URL}/shops/promotedshops`, {
        headers: {
          "x-api-key": process.env.API_KEY!,
        },
      }),
    ]);

    console.log("Boutiques Response Status:", boutiquesRes.status);

    if (!boutiquesRes.ok) {
      const text = await boutiquesRes.text(); // Get the response body as text
      console.error("Boutiques response error:", text);
      throw new Error(`Failed to fetch boutiques: ${boutiquesRes.statusText}`);
    }

    const boutiques: Boutique[] = await boutiquesRes.json();

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
              <ProductSlider title="Quelques produits populaires" />
            </section>
          </div>
          <PresentationSection />
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error: Could not fetch data. Please try again later.</div>;
  }
}
