'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { getSuggestedProducts } from '../../../../data/product'

interface SuggestedProduct {
  id: string
  name: string
  price: number
  image: string
}

export default function SuggestedProducts() {
  const [products, setProducts] = useState<SuggestedProduct[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const suggestedProducts = await getSuggestedProducts()
      setProducts(suggestedProducts)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Produits suggérés</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price.toFixed(2)} €</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

