import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Apple, Cpu, Hammer, HeartHandshake } from 'lucide-react'

const categories = [
  { name: 'Alimentation', icon: Apple, href: 'boutiques/category/alimentation' },
  { name: 'Électronique', icon: Cpu, href: 'boutiques/category/electronique' },
  { name: 'Artisanat', icon: Hammer, href: 'boutiques/category/artisanat' },
  { name: 'Services', icon: HeartHandshake, href: 'boutiques/category/services' },
]

export default function CategoryShowcase() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explorez nos catégories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link href={category.href} key={category.name} className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="background-gradient min-h-32 rounded-lg flex flex-col items-center justify-center p-6 text-white">
                  <category.icon className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-lg font-semibold text-center">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

