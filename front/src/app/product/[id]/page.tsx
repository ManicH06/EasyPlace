import { Product } from "@/@types/types";
import ProductClientPage from "@/components/pages/product/ProductClientPage";

async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${process.env.API_URL}/products/${id}`, {
      headers: {
        "x-api-key": process.env.API_KEY,
      } as HeadersInit,
      cache: "no-store", // Adjust caching as needed
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch product with ID ${id}: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await getProduct(id);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return <ProductClientPage product={product} />;
}
