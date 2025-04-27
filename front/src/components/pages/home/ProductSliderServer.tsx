import { Product } from "@/@types/types";
import ProductSliderClient from "./ProductSlider";

interface ProductSliderServerProps {
  title: string;
}

export default async function ProductSliderServer({
  title,
}: ProductSliderServerProps) {
  const API_URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;

  if (!API_URL || !API_KEY) {
    console.error(
      "API_URL or API_KEY is missing. Please check your environment variables."
    );
    return <div>Error: Missing environment variables</div>;
  }

  try {
    const response = await fetch(`${API_URL}/products`, {
      headers: {
        "x-api-key": API_KEY,
      },
      cache: "no-store", // Adjust caching as needed
    });

    if (!response.ok) {
      console.error("Failed to fetch products:", response.statusText);
      return (
        <div>Error: Could not fetch products. Please try again later.</div>
      );
    }

    const products: Product[] = await response.json();

    return <ProductSliderClient title={title} products={products} />;
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Error: Could not fetch products. Please try again later.</div>;
  }
}
