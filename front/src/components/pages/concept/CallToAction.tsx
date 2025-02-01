
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-black bg-white">
      <div className="px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Prêt à découvrir Easy-Place ?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Alors vous aussi rejoignez notre communauté,
            </p>
          </div>
          <div className="space-x-4">
            <Link
              href="/boutiques/register"
              className="px-6 py-3 text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75"
            >
              Inscrivez votre commerce
            </Link>
            <Link
              href="/boutiques"
              className="px-6 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
            >
              Découvrez les marchands
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}