"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InteractiveMap from "./InteractiveMap";
import { useState } from "react";

function FilterForm() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <div className="relative flex justify-center items-center flex-col w-full p-4 md:p-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-screen bg-cover bg-center z-0 h-[70%]"
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundPosition: "center 80%",
          transform: "translateY(60%)",
        }}
      />

      {/* Foreground Content */}

      <div className="flex items-center justify-center relative z-10 w-full max-w-screen-lg mx-auto">
        <Card className="w-full max-w-4xl px-4 py-6 md:px-6 md:py-8">
          <h2 className="text-xl md:text-2xl text-center mb-2">
            Trouver votre <span className="text-emerald-500">Commerce</span>
          </h2>
          <div className="mt-2 pb-4 border-t border-slate-600 text-center text-sm" />
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            {/* Form Section */}
            <div className="flex-1 flex items-center justify-center">
              <form className="w-full max-w-xs flex flex-col space-y-4">
                <input
                  type="text"
                  name="boutique"
                  id="boutique"
                  placeholder="Cherchez une boutique"
                  className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Ville / Code Postal"
                  className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Button
                  size="lg"
                  className="w-full bg-[#7AC088] hover:bg-[#68A374] rounded-full"
                >
                  Rechercher
                </Button>
              </form>
            </div>
            {/* Map Section */}
            <div className="flex-1 h-52 md:h-80 flex flex-col items-center justify-center">
              <InteractiveMap onRegionHover={setHoveredRegion} />
              <span>{hoveredRegion ? `${hoveredRegion}` : "\u00A0"}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FilterForm;
