import Image from "next/image";
import { MapPin, Users, Zap } from "lucide-react";

export function Concept() {
  return (
    <section id="concept" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Notre Concept
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <p className="text-white">
              Easy-Place est une plateforme e-commerce innovante qui met en
              relation les consommateurs avec les artisans, producteurs et
              petits commerces locaux. Notre mission est de soutenir l&apos;économie
              locale tout en offrant aux utilisateurs un accès facile à des
              produits uniques et de qualité.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2 h-6 w-6 text-white" />
                <span>Découvrez des commerçants près de chez vous</span>
              </li>
              <li className="flex items-center">
                <Users className="mr-2 h-6 w-6 text-white" />
                <span>Soutenez les artisans et producteurs locaux</span>
              </li>
              <li className="flex items-center">
                <Zap className="mr-2 h-6 w-6 text-white" />
                <span>Commandez facilement en quelques clics</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] sm:h-[400px]">
            <Image
              src="/commerce-locale.jpeg"
              alt="Intérieur d'une boutique avec une commerçante"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}