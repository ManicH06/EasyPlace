import { MapPin, Truck, Store } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Seller {
  name: string
  address: string
  deliveryOptions: string[]
}

export default function SellerInfo({ seller }: { seller: Seller }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations du vendeur</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">{seller.name}</h3>
        <p className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <MapPin size={16} />
          {seller.address}
        </p>
        <h4 className="font-semibold mb-2">Options de livraison / retrait</h4>
        <ul className="space-y-2">
          {seller.deliveryOptions.map((option, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              {option.includes('Livraison') ? <Truck size={16} /> : <Store size={16} />}
              {option}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

