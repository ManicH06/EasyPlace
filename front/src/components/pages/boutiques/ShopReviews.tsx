'use client'

import { useState } from 'react'
import { Star, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface Review {
  id: number
  author: string
  rating: number
  comment: string
  date: string
}

const initialReviews: Review[] = [
  { id: 1, author: "Marie L.", rating: 5, comment: "Les meilleures viennoiseries de la ville ! Je recommande vivement.", date: "2023-05-15" },
  { id: 2, author: "Pierre D.", rating: 4, comment: "Très bon pain, mais un peu cher.", date: "2023-06-02" },
  { id: 3, author: "Sophie M.", rating: 5, comment: "J'adore leurs tartes aux fruits, toujours fraîches et délicieuses.", date: "2023-06-20" },
]

export default function ShopReviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [newReview, setNewReview] = useState({ author: '', rating: 5, comment: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const review: Review = {
      id: reviews.length + 1,
      ...newReview,
      date: new Date().toISOString().split('T')[0]
    }
    setReviews([review, ...reviews])
    setNewReview({ author: '', rating: 5, comment: '' })
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Avis Clients</h2>
      
      <div className="grid gap-8 md:grid-cols-[1fr,400px]">
        {/* Liste des avis */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <User className="w-6 h-6" />
                    <CardTitle>{review.author}</CardTitle>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{review.comment}</p>
                <p className="text-sm text-muted-foreground">Publié le {review.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Formulaire pour laisser un avis */}
        <Card>
          <CardHeader>
            <CardTitle>Laisser un avis</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="author">Nom</Label>
                <Input 
                  id="author"
                  value={newReview.author}
                  onChange={(e) => setNewReview({...newReview, author: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="rating">Note</Label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setNewReview({...newReview, rating})}
                      className="focus:outline-none"
                    >
                      <Star 
                        className={`w-8 h-8 ${rating <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="comment">Commentaire</Label>
                <Textarea 
                  id="comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Publier l&apos;avis
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

