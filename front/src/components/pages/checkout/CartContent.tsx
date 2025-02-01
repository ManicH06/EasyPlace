"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/components/context/CartContext";

export default function OrderDetail() {
    const { cart } = useCart();

    const cartTotal = Object.values(cart)
    .flat()
    .reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Articles dans le panier</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.keys(cart).map((shopName) => (
            <div key={shopName} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{shopName}</h3>
              <div className="border rounded-lg p-4">
                {cart[shopName].map((item) => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>{(item.price * item.quantity).toFixed(2)} €</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-xl">
            Total: {cartTotal.toFixed(2)} €
          </div>
        </CardContent>
      </Card>
    </>
  );
}
