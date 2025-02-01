import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function AccountSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true)

  const handleLogout = () => {
    // Ajoutez ici la logique de déconnexion
    console.log('Déconnexion')
  }

  const handleDeleteAccount = () => {
    // Ajoutez ici la logique de suppression de compte
    console.log('Compte supprimé')
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Paramètres du compte</h2>
      
      <div className="flex items-center justify-between">
        <Label htmlFor="email-notifications" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Notifications par email
        </Label>
        <Switch
          id="email-notifications"
          checked={emailNotifications}
          onCheckedChange={setEmailNotifications}
        />
      </div>

      <div>
        <Button onClick={handleLogout} variant="outline">Se déconnecter</Button>
      </div>

      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Supprimer le compte</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
              <AlertDialogDescription>
                Cette action ne peut pas être annulée. Cela supprimera définitivement votre compte
                et supprimera vos données de nos serveurs.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteAccount}>Continuer</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}

