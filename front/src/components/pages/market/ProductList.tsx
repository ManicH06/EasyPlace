'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Product } from '../../../../src/@types/types'

interface ProductListProps {
  initialProducts: Product[]
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products] = useState<Product[]>(initialProducts)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.price.toFixed(2)} €</p>
              <p className="text-sm text-gray-500">{product.seller.name}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

