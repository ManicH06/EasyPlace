import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

//testimonials temporaires
const testimonials = [
  {
    name: "Marie D.",
    role: "Utilisatrice",
    content: "Easy-Place m'a permis de découvrir des artisans locaux incroyables. Je suis ravie de pouvoir soutenir ma communauté tout en achetant des produits uniques."
  },
  {
    name: "Pierre L.",
    role: "Artisan Boulanger",
    content: "Grâce à Easy-Place, j'ai pu élargir ma clientèle et simplifier mes ventes en ligne. C'est un outil formidable pour les petits commerces comme le mien."
  },
  {
    name: "Sophie M.",
    role: "Productrice Locale",
    content: "Easy-Place a révolutionné la façon dont je vends mes produits. La plateforme est intuitive et m'a permis de toucher une clientèle que je n'aurais jamais pu atteindre autrement."
  }
]

export function Testimonials() {
  return (
    <section id="temoignages" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Témoignages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
