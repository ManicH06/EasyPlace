"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function FilterPanel() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [categories, setCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleApplyFilters = () => {
    console.log("Applying filters:", { priceRange, categories });
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-6 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Recherche</h3>
          <Input type="text" placeholder="Rechercher un produit..." />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Catégories</h3>
          <div className="space-y-2">
            {["Alimentation", "Electronique", "Artisanat", "Services"].map(
              (category) => (
                <div key={category} className="flex items-center">
                  <Checkbox
                    id={category}
                    checked={categories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={category} className="ml-2">
                    {category}
                  </Label>
                </div>
              )
            )}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Prix</h3>
          <Slider
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{priceRange[0]}€</span>
            <span>{priceRange[1]}€</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={handleApplyFilters}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full"
        >
          Rechercher
        </Button>
      </div>
    </div>
  );
}
