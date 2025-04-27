"use client";

import CardShopSection from "@/components/pages/home/CardShopSection";
import SearchSegment from "@/components/pages/boutiques/SearchSegment";
import { Boutique } from "@/@types/types";

interface BoutiquesClientPageProps {
  boutiques: Boutique[];
}

export default function BoutiquesClientPage({ boutiques }: BoutiquesClientPageProps) {
  return (
    <div className="container mx-auto py-10">
      <SearchSegment />
      <CardShopSection boutiques={boutiques} />
    </div>
  );
}