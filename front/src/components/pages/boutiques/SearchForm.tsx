"use client";

import * as React from "react";
import { MapPinIcon, PanelTopDashed, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";

export function SearchForm() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="relative">
          <ShoppingCart className="absolute left-2.5 top-2.5 h-5 w-5" />
          <Input className="pl-9" placeholder="Nom du commerce" />
        </div>
        <div className="relative">
          <MapPinIcon className="absolute left-2.5 top-2.5 h-5 w-5" />
          <Input
            className="pl-9"
            placeholder="Choisissez une ville"
          />
        </div>
        <Select>
          <SelectTrigger>
            <PanelTopDashed className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Alimentation </SelectLabel>
              <SelectItem value="1">Boulangerie</SelectItem>
              <SelectItem value="2">Pâtisserie</SelectItem>
              <SelectItem value="3">Poissonnerie</SelectItem>
              <SelectItem value="4">Épicerie fine</SelectItem>
              <SelectItem value="5">Fromagerie</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Artisanat </SelectLabel>
              <SelectItem value="6">Menuiserie</SelectItem>
              <SelectItem value="7">Bijouterie</SelectItem>
              <SelectItem value="8">Poterie</SelectItem>
              <SelectItem value="9">Couture et mode</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-center">
      <Button className=" bg-green-500 hover:bg-green-600 text-white rounded-full">
        Search
      </Button>
    </div>
    </div>
  );
}
