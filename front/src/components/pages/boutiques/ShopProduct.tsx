"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/context/CartContext";
import Image from "next/image"

// Types pour les produits
interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  isPopular?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Baguette Tradition",
    description: "Baguette traditionnelle à la croûte dorée et croustillante",
    price: 1.20,
    category: "Pains",
    isPopular: true
  },
  {
    id: 2,
    name: "Croissant au Beurre",
    description: "Croissant pur beurre, croustillant et feuilleté",
    price: 1.50,
    category: "Viennoiseries",
    isPopular: true
  },
  {
    id: 3,
    name: "Pain au Chocolat",
    description: "Viennoiserie feuilletée garnie de deux barres de chocolat noir",
    price: 1.60,
    category: "Viennoiseries"
  },
  {
    id: 4,
    name: "Pain Complet",
    description: "Pain aux céréales complètes, riche en fibres",
    price: 2.50,
    category: "Pains"
  },
  {
    id: 5,
    name: "Tarte aux Pommes",
    description: "Tarte garnie de pommes fraîches et de cannelle",
    price: 3.50,
    category: "Pâtisseries"
  },
  {
    id: 6,
    name: "Éclair au Chocolat",
    description: "Pâte à choux garnie de crème pâtissière au chocolat",
    price: 2.80,
    category: "Pâtisseries",
    isPopular: true
  }
]

export default function ShopProducts() {
  const { addItem } = useCart();
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Nos Produits</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Tous</Button>
          <Button variant="outline" size="sm">Pains</Button>
          <Button variant="outline" size="sm">Viennoiseries</Button>
          <Button variant="outline" size="sm">Pâtisseries</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
                {product.isPopular && (
                  <Badge className="absolute top-2 right-2">
                    Populaire
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-4">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <span className="font-bold text-lg">
                  {product.price.toFixed(2)}€
                </span>
              </div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <p className="text-muted-foreground text-sm">
                {product.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
            <Button
              onClick={() => {
                addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  shopName: "MeublesPro", // Nom de la boutique à récupérer dynamiquement
                });
              }}
            >
              Ajouter au panier
            </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

