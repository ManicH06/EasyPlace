import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ShoppingBag, MapPin } from 'lucide-react'

export function Advantages() {
  return (
    <section id="avantages" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-700">
          Avantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Pour les utilisateurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Accès à des produits locaux et uniques</li>
                <li>Soutien à l&apos;économie locale</li>
                <li>Expérience d&apos;achat personnalisée</li>
                <li>Retrait en magasin</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5 text-primary" />
                Pour les commerçants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Visibilité accrue auprès des clients locaux</li>
                <li>Plateforme de vente en ligne facile à utiliser</li>
                <li>Gestion simplifiée des commandes</li>
                <li>Opportunités de croissance</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                Pour la communauté
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Renforcement du tissu économique local</li>
                <li>Réduction de l&apos;empreinte carbone</li>
                <li>Préservation des savoir-faire artisanaux</li>
                <li>Création d&apos;emplois locaux</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
