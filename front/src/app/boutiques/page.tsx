"use client";
import CardShopSection from "@/components/pages/home/CardShopSection";
import SearchSegment from "@/components/pages/boutiques/SearchSegment";
import axios from "axios";
import { Boutique } from "@/@types/types";
import { useEffect, useState } from "react";

export default function BoutiquesPage() {
  const [boutiques, setBoutiques] = useState<Boutique[]>([]);

  useEffect(() => {
    const getBoutiques = async () => {
      try {
        const response = await axios.get("http://localhost:5000/shops");
        console.log(response);
        setBoutiques(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getBoutiques();
  }, []);
  return (
    <div className="container mx-auto py-10">
      <SearchSegment />
      <CardShopSection boutiques={boutiques} />
    </div>
  );
}
