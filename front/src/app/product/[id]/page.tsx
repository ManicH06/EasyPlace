import ProductDetails from '../../../components/pages/product/ProductDetails'
import SellerInfo from '../../../components/pages/product/SellerInfo'
import SuggestedProducts from '../../../components/layout/banniere/SuggestedProducts'
import { getProductById } from '../../../../data/product'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    return <div>Produit non trouvé</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ProductDetails product={product} />
        </div>
        <div>
          <SellerInfo seller={product.seller} />
        </div>
      </div>
      <div className="mt-12">
        <SuggestedProducts />
      </div>
    </div>
  )
}

