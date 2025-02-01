import CardShop from "./CardShop";
import type { Boutique } from "../../../../src/@types/boutique";

interface CardShopSectionProps {
  boutiques: Boutique[];
}

const CardShopSection: React.FC<CardShopSectionProps> = ({
  boutiques = [],
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {boutiques.map((boutique) => (
        <CardShop
          key={boutique.id}
          id={boutique.id}
          name={boutique.companyName}
          image={boutique.image_url}
          describe={boutique.describe}
        />
      ))}
    </div>
  );
};

export default CardShopSection;
