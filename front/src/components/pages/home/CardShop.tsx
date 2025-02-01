"use client"

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CiStar } from "react-icons/ci";

interface CardShopProps {
  key: number;
  id: number;
  name: string;
  image: string;
  describe: string;
}

const CardShop: React.FC<CardShopProps> = ({ id, name, image, describe }) => {
  return (
    <Link href={`/boutiques/${id}`} passHref>
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <Image
            src={image}
            alt={name}
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <CardContent className="p-4">
          <h2 className="font-semibold text-lg mb-2">{name}</h2>
          <div className="flex items-center mb-2">
            <CiStar />

            <span className="ml-2 text-sm text-muted-foreground">4.0</span>
          </div>
          <p className="text-sm text-muted-foreground">{describe}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardShop;
