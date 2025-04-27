import { Product } from "@/@types/types"; // Assuming you have a Product type
import MarketplaceClientPage from "@/components/pages/market/MarketplaceClientPage";

async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/products`, {
      headers: {
        "x-api-key": process.env.API_KEY,
      } as HeadersInit, 
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`Failed to fetch products: ${response.status} ${response.statusText}`);
      return []; 
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
}

export default async function MarketplacePage() {
  const products = await getProducts();

  return (
    <MarketplaceClientPage products={products} />
  );
}