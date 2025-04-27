import { Boutique } from "@/@types/types";
import BoutiquesClientPage from "@/components/pages/boutiques/BoutiquesClientPage";

async function getBoutiques(): Promise<Boutique[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/shops`, {
      headers: {
        "x-api-key": process.env.API_KEY,
      } as HeadersInit,
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch boutiques: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const data: Boutique[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching boutiques:", error);
    return [];
  }
}

export default async function BoutiquesPage() {
  const boutiques = await getBoutiques();

  return <BoutiquesClientPage boutiques={boutiques} />;
}
