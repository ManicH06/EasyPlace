import ShopInfo from "@/components/pages/boutiques/ShopInfo"
import ShopLocation from "@/components/pages/boutiques/ShopLocation"
import ShopProducts from "@/components/pages/boutiques/ShopProduct"
import ShopReviews from "@/components/pages/boutiques/ShopReviews"

export default function VitrinePage() {
  return (
    <div className="container mx-auto py-10">
      <ShopInfo />
      <ShopLocation />
      <ShopProducts />
      <ShopReviews />
    </div>
  )
}
