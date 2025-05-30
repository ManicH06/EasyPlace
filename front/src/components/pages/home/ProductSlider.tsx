"use client";

import { Product } from "@/@types/types";
import Image from "next/image";
import Link from "next/link";
import Slider, { CustomArrowProps } from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react"; // Import React

interface ProductSliderClientProps {
  title: string;
  products: Product[];
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

export default function ProductSliderClient({
  title,
  products,
}: ProductSliderClientProps) {
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
}
