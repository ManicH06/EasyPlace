import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PersonalInfo() {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+33 6 12 34 56 78'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous ajouteriez la logique pour sauvegarder les modifications
    console.log('Informations mises à jour:', userInfo)
    setIsEditing(false)
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nom</Label>
            <Input
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={userInfo.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>
        {isEditing ? (
          <div className="mt-4 space-x-2">
            <Button type="submit">Sauvegarder</Button>
            <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>Annuler</Button>
          </div>
        ) : (
          <Button type="button" onClick={() => setIsEditing(true)} className="mt-4">Modifier</Button>
        )}
      </form>
    </div>
  )
}

