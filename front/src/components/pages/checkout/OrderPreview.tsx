import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/components/context/CartContext";

interface Address {
  name: string;
  street: string;
  city: string;
  zip: string;
  phone: string;
}

interface UserAddressProps {
  address: Address;
}

export default function OrderPreview({ address }: UserAddressProps) {
  const { cart } = useCart();
 


  const cartTotal = Object.values(cart)
    .flat()
    .reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Détails de la commande</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="divide-y divide-gray-200">
              <div className="py-3 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">Total</dt>
                <dd className="text-sm text-gray-900">
                  {cartTotal.toFixed(2)} €
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
            <p className="text-sm text-gray-600">{address.name}</p>
            <p className="text-sm text-gray-600">{address.street}</p>
            <p className="text-sm text-gray-600">
              {address.city}, {address.zip}
            </p>
            <p className="text-sm text-gray-600">{address.phone}</p>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Note</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600">
              * Veuillez noter que les produits doivent être récupérés en
              magasin. Aucune livraison n&apos;est disponible pour le moment.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
