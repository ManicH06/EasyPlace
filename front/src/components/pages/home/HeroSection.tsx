import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <>
      <h1 className="pb-4 font-poppins font-semibold text-green-500 text-3xl md:text-4xl lg:text-5xl mb-4">
        EasyPlace
      </h1>
      <p className="pb-4 font-montserrat font-normal text-white text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
        La Marketplace des Commerces de Proximité pour une Consommation Locale
        et Responsable
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link href="/boutiques">
          <Button
            size="lg"
            className="self-center w-full max-w-xs mt-4 bg-white hover:bg-emerald-600 text-black rounded-full"
          >
            Commerces
          </Button>
        </Link>
        <Link href="/">
          {/* Lien vers le shop de l'utilisateur, s'il a un shop, sinon, vers la page de demande/page d'inscription*/}
          <Button
            size="lg"
            className="self-center w-full max-w-xs mt-4 hover:bg-emerald-600 rounded-full"
          >
            Votre Boutique
          </Button>
        </Link>
      </div>
    </>
  );
}
