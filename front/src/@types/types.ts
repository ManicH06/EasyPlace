export interface Seller {
    id: string
    name: string
    address: string
    deliveryOptions: string[]
  }
  
  export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    category?: string
    seller: Seller
  }
  
  