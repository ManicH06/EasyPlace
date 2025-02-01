import Image from "next/image";
import Link from "next/link";

export default function PresentationSection() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2">
        <Image
          src="/commerce-locale.jpeg"
          alt="Intérieur d'une boutique avec une commerçante"
          width={600}
          height={400}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="bg-[#D9E9E0] rounded-lg p-4">
          <h1 className="text-2xl text-black font-semibold">
            Donnez à votre commerce une nouvelle dimension.
          </h1>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-4">
          <p className="text-sm text-black">
            Vous êtes commerçant local et vous souhaitez développer votre
            visibilité numérique ? Nos experts du digital, présents dans votre
            région, vous accompagnent dans votre développement.
          </p>
          <ul className="space-y-2 text-center">
            <li className="flex items-center gap-2 ">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              <span className="text-sm text-gray-400">
                Plus de 200 commerçants nous font déjà confiance
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              <span className="text-sm text-gray-400">
                Accompagnement personnalisé
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              <span className="text-sm text-gray-400">
                Visibilité garantie dans votre zone
              </span>
            </li>
          </ul>

          <Link
            href="/boutiques/register"
            passHref
            className="w-full block text-center bg-[#7AC088] hover:bg-[#68A374] text-white font-medium py-2 rounded-full"
          >
            Rejoignez-nous !
          </Link>
        </div>
      </div>
    </div>
  );
}