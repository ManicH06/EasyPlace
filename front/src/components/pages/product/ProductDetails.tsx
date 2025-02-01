'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export default function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    console.log(`Ajout au panier : ${quantity} x ${product.name}`)
    // logique pour ajouter au panier
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl font-semibold mb-4">{product.price.toFixed(2)} €</p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <div className="flex items-center gap-4 mb-6">
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-20"
          />
          <Button onClick={handleAddToCart}>Ajouter au panier</Button>
        </div>
      </div>
    </div>
  )
}

