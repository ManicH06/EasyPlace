import ProductList from "@/components/pages/market/ProductList";
import FilterPanel from "@/components/pages/market/FilterPanel";
import { getProducts } from "../../../data/product";

export default async function MarketplacePage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-4 mb-10">
        <h1 className="text-2xl font-bold text-center mb-5">
          Trouvez des produits pour vous!
        </h1>
        <FilterPanel />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <ProductList initialProducts={products} />
      </div>
    </div>
  );
}
