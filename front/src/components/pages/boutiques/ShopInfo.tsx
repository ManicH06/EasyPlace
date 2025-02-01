import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Utensils } from 'lucide-react'

export default function ShopInfo() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Header Section */}
      <header className="py-8 bg-gray-100 mb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Chez Michel</h1>
          <h2 className="text-xl text-muted-foreground">Boulangerie</h2>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <Button variant="secondary">Présentation</Button>
        <Button variant="secondary">Nos produits</Button>
        <Button variant="secondary">Nous trouver</Button>
        <Button variant="secondary">Laisser un avis</Button>
      </nav>

      <div className="space-y-6">
        {/* Presentation Image Placeholder */}
        <Card className="w-full aspect-[2/1] flex items-center justify-center bg-muted">
          <p className="text-2xl text-muted-foreground">Photo présentation</p>
        </Card>

        {/* Shop Description */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Notre boutique</h2>
          <p className="text-muted-foreground leading-relaxed">
            Bienvenue chez Chez Michel, votre boulangerie artisanale au cœur de la ville ! 
            Depuis 20 ans, nous vous proposons une sélection de pains, viennoiseries, 
            et pâtisseries faits maison, préparés chaque jour avec des ingrédients de qualité. 
            Chez nous, tradition et savoir-faire se mêlent pour vous offrir des saveurs authentiques. 
            <Utensils className="inline ml-2 h-4 w-4" />
          </p>
        </section>
      </div>
    </div>
  )
}

