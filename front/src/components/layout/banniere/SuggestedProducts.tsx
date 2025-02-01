'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/@types/types'
import { Card, CardContent } from "@/components/ui/card"

export default function SuggestedProducts(products: Product[]) {

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Produits suggérés</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <Image
                  src={product.image_url}
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

