import { Product } from "@/@types/types";
import Image from "next/image";
import Link from "next/link";
import Slider, { CustomArrowProps } from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductSliderProps {
  title: string;
}

// Custom Arrow for the slider
const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
      onClick={onClick}
      type="button"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
};

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
      onClick={onClick}
      type="button"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
};

// ProductSlider is now a Server Component fetching data
export default async function ProductSlider({ title }: ProductSliderProps) {
  const API_URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;

  if (!API_URL || !API_KEY) {
    console.error(
      "API_URL or API_KEY is missing. Please check your environment variables."
    );
    return <div>Error: Missing environment variables</div>;
  }

  try {
    // Fetching data on the server side
    const response = await fetch(`${API_URL}/products`, {
      headers: {
        "x-api-key": API_KEY,
      },
      cache: "no-store", // Disables caching to always fetch fresh data (important for SSR)
    });

    if (!response.ok) {
      console.error("Failed to fetch products:", response.statusText);
      return (
        <div>Error: Could not fetch products. Please try again later.</div>
      );
    }

    const products: Product[] = await response.json();

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <Link href={`/product/${product.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-square relative mb-4">
                        <Image
                          src={product.image_url}
                          alt={product.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 truncate">
                        {product.name}
                      </h3>
                      <p className="text-gray-600">
                        {product.price.toFixed(2)} €
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Error: Could not fetch products. Please try again later.</div>;
  }
}
