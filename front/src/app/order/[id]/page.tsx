import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge} from "@/components/ui/badge"
import OrderStatusTracker from '../../../components/pages/order/OrderStatusTracker'

// Simuler la récupération des détails d'une commande
async function getOrderDetails(id: string) {
  
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const orders = {
    '1': {
      id: '1',
      date: '2023-05-01',
      total: '89.99€',
      status: 'Livré',
      items: [
        { name: 'Produit A', quantity: 2, price: '29.99€' },
        { name: 'Produit B', quantity: 1, price: '30.01€' }
      ],
      customer: {
        name: 'Jean Dupont',
        address: '123 Rue de la Paix, 75000 Paris'
      },
      tracking: {
        number: 'TR123456789FR',
        url: 'https://example.com/track'
      }
    },
  
  }
  
  return orders[id as keyof typeof orders] || null
}

export default async function OrderPage({ params }: { params: { id: string } }) {
  const order = await getOrderDetails(params.id)

  if (!order) {
    notFound()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Récapitulatif de la commande #{order.id}</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Détails de la commande</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="divide-y divide-gray-200">
              <div className="py-3 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">Date de commande</dt>
                <dd className="text-sm text-gray-900">{order.date}</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">Total</dt>
                <dd className="text-sm text-gray-900">{order.total}</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">Statut</dt>
                <dd className="text-sm text-gray-900">
                  <Badge>
                    {order.status}
                  </Badge>
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Adresse de livraison</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{order.customer.name}</p>
            <p className="text-sm text-gray-600">{order.customer.address}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Articles commandés</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantité</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Suivi de commande</CardTitle>
        </CardHeader>
        <CardContent>
          <OrderStatusTracker status={order.status} />
          <div className="mt-4">
            <p className="text-sm text-gray-600">Numéro de suivi : {order.tracking.number}</p>
            <a href={order.tracking.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
              Suivre votre colis
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

