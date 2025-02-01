import Link from 'next/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const orders = [
  { id: '1', date: '2023-05-01', total: '89.99€', status: 'Livré' },
  { id: '2', date: '2023-06-15', total: '129.99€', status: 'En cours' },
  { id: '3', date: '2023-07-22', total: '59.99€', status: 'En préparation' },
]

export default function OrderHistory() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Historique des commandes</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Numéro de commande</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Statut</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className="cursor-pointer hover:bg-muted/50">
              <TableCell className="font-medium">
                <Link href={`/order/${order.id}`} className="block w-full">
                  {order.id}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/order/${order.id}`} className="block w-full">
                  {order.date}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/order/${order.id}`} className="block w-full">
                  {order.total}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/order/${order.id}`} className="block w-full">
                  {order.status}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

