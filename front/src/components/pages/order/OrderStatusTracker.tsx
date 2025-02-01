import { CheckCircle2, Circle, Truck, Package, ShoppingCart } from 'lucide-react'

const steps = [
  { name: 'Commande passée', icon: ShoppingCart },
  { name: 'En préparation', icon: Package },
  { name: 'Expédiée', icon: Truck },
  { name: 'Livrée', icon: CheckCircle2 },
]

export default function OrderStatusTracker({ status }: { status: string }) {
  const currentStep = steps.findIndex(step => step.name === status) + 1

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.name} className="flex flex-col items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
            index < currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            {index < currentStep ? <step.icon className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
          </div>
          <p className="mt-2 text-xs text-center">{step.name}</p>
        </div>
      ))}
    </div>
  )
}

