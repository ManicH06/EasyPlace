interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    category?: string
    seller: {
      id: string
      name: string
      address: string
      deliveryOptions: string[]
    }
  }
  
  interface SuggestedProduct {
    id: string
    name: string
    price: number
    image: string
  }
  
  const products: Product[] = [
    {
      id: '1',
      name: 'Chaise de bureau ergonomique',
      description: 'Chaise de bureau confortable avec support lombaire ajustable et accoudoirs réglables.',
      price: 199.99,
      image: '/placeholder.svg?height=500&width=500',
      seller: {
        id: '1',
        name: 'MeublesPro',
        address: '123 Rue du Commerce, 75001 Paris',
        deliveryOptions: ['Livraison à domicile', 'Retrait en magasin']
      }
    },
    {
      id: '3',
      name: 'Smartphone XYZ',
      description: 'Dernier modèle de smartphone avec appareil photo haute résolution.',
      price: 699.99,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Électronique',
      seller: {
        id: '2',
        name: 'ElectroShop',
        address: '123 Rue de la Technologie, 75002 Paris',
        deliveryOptions: ['Livraison à domicile', 'Retrait en magasin']
      }
    },
    {
      id: '2',
      name: 'T-shirt en coton bio',
      description: 'T-shirt confortable en coton 100% biologique.',
      price: 29.99,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Vêtements',
      seller: {
        id: '4',
        name: 'ÉcoMode',
        address: '45 Avenue de la Mode, 69001 Lyon',
        deliveryOptions: ['Livraison à domicile']
      }
    },
    {
      id: '3',
      name: 'Cafetière italienne',
      description: 'Cafetière italienne traditionnelle en acier inoxydable.',
      price: 39.99,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Maison',
      seller: {
        id: '3',
        name: 'MaisonPlus',
        address: '78 Rue du Foyer, 33000 Bordeaux',
        deliveryOptions: ['Livraison à domicile', 'Retrait en magasin']
      }
    },
    {
      id: '4',
      name: 'Ballon de football',
      description: 'Ballon de football professionnel, taille 5.',
      price: 49.99,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Sports',
      seller: {
        id: '5',
        name: 'SportXtreme',
        address: '12 Boulevard du Sport, 59000 Lille',
        deliveryOptions: ['Livraison à domicile']
      }
    },
    // Ajoutez d'autres produits ici
  ]
  
  const suggestedProducts: SuggestedProduct[] = [
    {
      id: '2',
      name: 'Bureau ajustable',
      price: 299.99,
      image: '/placeholder.svg?height=200&width=200'
    },
    {
      id: '3',
      name: 'Lampe de bureau LED',
      price: 49.99,
      image: '/placeholder.svg?height=200&width=200'
    },
    {
      id: '4',
      name: 'Tapis de souris ergonomique',
      price: 19.99,
      image: '/placeholder.svg?height=200&width=200'
    },
    {
      id: '5',
      name: 'Support pour moniteur',
      price: 39.99,
      image: '/placeholder.svg?height=200&width=200'
    },
  ]
  
  export async function getProductById(id: string): Promise<Product | undefined> {
    // Simuler un délai de chargement
    await new Promise(resolve => setTimeout(resolve, 500))
    return products.find(product => product.id === id)
  }

  export async function getProducts(): Promise<Product[]> {
    // Simuler un délai de chargement
    await new Promise(resolve => setTimeout(resolve, 500))
    return products
  }
  
  
  export async function getSuggestedProducts(): Promise<SuggestedProduct[]> {
    // Simuler un délai de chargement
    await new Promise(resolve => setTimeout(resolve, 500))
    return suggestedProducts
  }
  
  