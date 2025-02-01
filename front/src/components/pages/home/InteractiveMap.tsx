import MapSVG from "../../../../public/image/carte.svg";
import { useRouter } from "next/navigation";

interface interactiveMapProps {
  onRegionHover: (region: string | null) => void;
}

function InteractiveMap({ onRegionHover }: interactiveMapProps) {
  const router = useRouter();

  const handleMouseOver = (e: React.MouseEvent<SVGElement>) => {
    const path = e.target as SVGElement;
    const region = path.getAttribute("data-name");
    onRegionHover(region);
    if (region) {
      path.style.fill = "#10b981 ";
      path.style.transition = "fill 0.3s ease";
      path.style.cursor = "pointer";
    }
  };

  const handleMouseOut = (e: React.MouseEvent<SVGAElement>) => {
    const path = e.target as SVGElement;
    path.style.fill = "#fff";
    onRegionHover(null);
  };

  const handleClick = (e: React.MouseEvent<SVGAElement>) => {
    const path = e.target as SVGAElement;
    const region = path.getAttribute("data-name");
    console.log(region);
    console.log(`clicked on the region ${region}`);
    router.push(`/region/${region?.toLowerCase()}`);
  };

  return (
    <div>
      <MapSVG
        className="w-60 h-auto"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      />
    </div>
  );
}

export default InteractiveMap;
